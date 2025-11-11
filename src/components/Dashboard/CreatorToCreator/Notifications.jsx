import React, { useEffect, useState } from "react";
import {
  Users,
  Diamond,
  MessageSquare,
  RotateCcw,
  MoreHorizontal,
} from "lucide-react";
import {
  getPendingLikeRequests,
  respondLikeRequest,
  getCollaborationRequests,
} from "../../../api/client";
import CollabReqAcceptRejectButtons from "./CollabReqAcceptRejectButtons";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [counts, setCounts] = useState({
    matches: 0,
    collaborations: 0,
    messages: 0,
    updates: 0,
  });

  // Fetch all notifications (likes + collabs)
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const [likesRes, collabRes] = await Promise.all([
          getPendingLikeRequests(),
          getCollaborationRequests("received"),
        ]);

        const likes =
          likesRes?.data?.success && likesRes.data.data
            ? likesRes.data.data.map((req) => ({
                id: req._id,
                type: "like",
                title: "New Like 💖",
                message: `${req.from.name} liked your profile`,
                avatar: req.from.profilePic || "/default-avatar.png",
                timestamp: new Date(req.createdAt).toLocaleDateString(),
                isRead: false,
                actions: ["decline", "accept"],
              }))
            : [];

        const collabs =
          collabRes?.data?.success && collabRes.data.data
            ? collabRes.data.data.map((req) => ({
                id: req._id,
                type: "collaboration",
                title: req.title || "Collaboration Request 🤝",
                message:
                  req.description ||
                  `${req.sender.name} sent you a collaboration request`,
                avatar: req.sender.profilePic || "/default-avatar.png",
                timestamp: new Date(req.createdAt).toLocaleDateString(),
                isRead: false,
                actions: ["decline", "accept", "view"],
                fullRequest: req,
              }))
            : [];

        setNotifications([...likes, ...collabs]);

        setCounts({
          matches: likes.length,
          collaborations: collabs.length,
          messages: 0,
          updates: 0,
        });
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 10000);
    return () => clearInterval(interval);
  }, []);

  // Handle Accept / Reject for Likes
  const handleNotificationAction = async (notificationId, action) => {
    try {
      const notif = notifications.find((n) => n.id === notificationId);
      if (!notif) return;

      if (notif.type === "like") {
        await respondLikeRequest(notificationId, action === "accept" ? "accepted" : "rejected");
      }

      setNotifications((prev) =>
        prev.map((n) =>
          n.id === notificationId ? { ...n, isRead: true } : n
        )
      );
    } catch (error) {
      console.error("Error handling notification action:", error);
    }
  };

  const markAsRead = (notificationId) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === notificationId ? { ...n, isRead: true } : n
      )
    );
  };

  const NotificationTypeCard = ({ icon: Icon, title, count, color }) => (
    <div
      className={`${color} rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6 text-white shadow-sm`}
    >
      <div className="flex items-center justify-center mb-2">
        <Icon size={24} className="opacity-80" />
      </div>
      <h3 className="text-lg md:text-xl font-medium text-center opacity-90">
        {title}
      </h3>
      <p className="text-2xl md:text-3xl font-bold text-center mt-1">
        {count}
      </p>
    </div>
  );

  const NotificationCard = ({ notification }) => (
    <div
      className={`bg-white rounded-lg p-4 md:p-6 mb-4 border border-gray-700 transition-all hover:bg-gray-750 ${
        !notification.isRead ? "border-l-4 border-l-blue-500" : ""
      }`}
      onClick={() => !notification.isRead && markAsRead(notification.id)}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <img
            src={notification.avatar}
            alt="Avatar"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
            onError={(e) => {
              e.target.src = `data:image/svg+xml;base64,${btoa(
                '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="#6b7280"/><text x="20" y="25" text-anchor="middle" fill="white" font-size="16">👤</text></svg>'
              )}`;
            }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-black font-semibold text-sm md:text-base mb-1">
              {notification.title}
            </h3>
            <p className="text-black text-sm md:text-base break-words">
              {notification.message}
            </p>
            <p className="text-gray-400 text-xs md:text-sm mt-2">
              {notification.timestamp}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 ml-2">
          {!notification.isRead && (
            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
          )}
          <button className="text-gray-400 hover:text-white p-1">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>

      {notification.type === "collaboration" && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
          <CollabReqAcceptRejectButtons
            request={notification.fullRequest}
            onUpdate={() =>
              setNotifications((prev) =>
                prev.filter((n) => n.id !== notification.id)
              )
            }
          />
        </div>
      )}

      {notification.type === "like" && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
          {notification.actions.map((action) => (
            <button
              key={action}
              onClick={(e) => {
                e.stopPropagation();
                handleNotificationAction(notification.id, action);
              }}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                action === "accept"
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-gray-600 hover:bg-gray-500 text-white"
              }`}
            >
              {action.charAt(0).toUpperCase() + action.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div className="p-6 bg-[#2A2A2A]">
        <h1 className="text-white text-2xl md:text-3xl font-bold">
          Notifications
        </h1>
      </div>

      {/* Notification Type Cards */}
      <div className="w-full bg-[#2A2A2A] grid grid-cols-2 p-3 lg:grid-cols-3 gap-3 md:gap-4">
        <NotificationTypeCard
          icon={Users}
          title="New Matches"
          count={counts.matches}
          color="bg-[#F5ADB2]"
        />
        <NotificationTypeCard
          icon={Diamond}
          title="Collaborations"
          count={counts.collaborations}
          color="bg-[#93B076]"
        />
        <NotificationTypeCard
          icon={MessageSquare}
          title="Messages"
          count={counts.messages}
          color="bg-[#F77128]"
        />
      </div>

      {/* Notification Feed */}
      <div className="min-h-screen bg-[#1F1F22] p-4 md:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto space-y-4">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          ))}

          {/* Load More Button */}
          <div className="text-center mt-8">
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Load More Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
