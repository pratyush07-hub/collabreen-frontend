import { useState, useRef } from "react";
import { Mic, StopCircle } from "lucide-react";
import { sendGroupAudioMessage } from "../../../api/client";


export default function AudioRecorder({ groupId, socket }) {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const chunks = useRef([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);

      recorder.ondataavailable = (e) => chunks.current.push(e.data);

      recorder.onstop = async () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        chunks.current = [];

        const formData = new FormData();
        formData.append("audio", blob, "voice-message.webm");

        const res = await sendGroupAudioMessage(groupId, formData);

        socket.emit("sendAudioMessage", {
          groupId,
          audioUrl: res.data.audioUrl,
        });
      };

      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (err) {
      console.error("Recording error:", err);
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setRecording(false);
  };

  return (
    <button
      onClick={recording ? stopRecording : startRecording}
      className="p-2 rounded-full bg-gray-800 text-white"
    >
      {recording ? <StopCircle /> : <Mic />}
    </button>
  );
}
