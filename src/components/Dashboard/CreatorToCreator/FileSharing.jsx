import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import {
  getAcceptedCollaborationById,
  uploadFileToCollaboration,
} from "../../../api/client";

const FileSharing = ({ collab, currentUser, onBack }) => {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = React.useRef(null);
  useEffect(() => {
    if (collab) fetchCollaborationFiles();
  }, [collab]);

  const fetchCollaborationFiles = async () => {
    try {
      const res = await getAcceptedCollaborationById(collab._id);
      setFiles(res.data.files || []);
    } catch (err) {
      console.error("Error fetching files:", err);
      alert("Failed to fetch files");
    }
  };

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file first!");
    try {
      setLoading(true);
      const res = await uploadFileToCollaboration(collab._id, selectedFile);
      const uploadedFile = {
      ...res.data.file,
      uploadedBy: currentUser,
      uploadedAt: res.data.file.uploadedAt || new Date().toISOString(),
    };
      setFiles((prev) => [...prev, uploadedFile]);
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      alert("File uploaded successfully!");
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("File upload failed");
    } finally {
      setLoading(false);
    }
  };

  
  const downloadFile = async (url, name) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/octet-stream",
      },
    });
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error("Download failed", error);
    alert("Failed to download file");
  }
};


  if (!collab || !currentUser) return null;

  const otherUser =
    collab.sender._id === currentUser._id ? collab.receiver : collab.sender;

  // Group files by type
  const groupedFiles = files.reduce((acc, file) => {
    const type = file.fileType?.split("/")[0] || "other";
    if (!acc[type]) acc[type] = [];
    acc[type].push(file);
    return acc;
  }, {});

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">
          File Sharing with {otherUser.name}
        </h2>
        <button
          onClick={onBack}
          className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          Back
        </button>
      </div>

      {/* Collaborator info */}
      <div className="flex flex-col items-center gap-4 mb-6">
        <img
          src={otherUser.profilePic || "/default-avatar.png"}
          alt={otherUser.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
        />
        <p className="font-medium text-gray-700">{otherUser.name}</p>
      </div>

      {/* File upload */}
      <div className="text-center mb-6">
        <input ref={fileInputRef} type="file" onChange={handleFileChange} className="mb-4" />
        <button
          onClick={handleUpload}
          disabled={loading}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Share File"}
        </button>
      </div>

      {/* Files list grouped by type */}
      <div className="space-y-6">
        {Object.keys(groupedFiles).length === 0 ? (
          <p className="text-gray-500 text-center">No files shared yet.</p>
        ) : (
          Object.entries(groupedFiles).map(([type, filesOfType]) => (
            <div key={type}>
              <h3 className="text-lg font-semibold mb-2 capitalize">{type}</h3>
              <div className="space-y-2">
                {filesOfType.map((file, index) => (
                  <div
                    key={file._id || file.fileUrl || index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow"
                  >
                    <div className="flex flex-col">
                      <p className="text-gray-700 font-medium">{file.fileName}</p>
                      <span className="text-gray-400 text-sm">
                        by {file.uploadedBy?.name || "Unknown"} |{" "}
                        {file.uploadedAt
                          ? new Date(file.uploadedAt).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : ""}
                      </span>
                    </div>
                    <button
                      onClick={() => downloadFile(file.fileUrl, file.fileName)}
                      className="flex items-center gap-1 text-gray-500 hover:underline text-sm"
                    >
                      <FaDownload size={16} />
                    </button>

                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FileSharing;
