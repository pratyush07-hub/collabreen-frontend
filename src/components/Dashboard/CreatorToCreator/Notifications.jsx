import React, { useState } from 'react';
import { Users, Diamond, MessageSquare, RotateCcw, MoreHorizontal } from 'lucide-react';

const NotificationDashboard = () => {
    // Sample data - replace with your API calls
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'match',
            title: 'New Match Nearby!',
            message: 'Sarah Chen is looking for videographers in your area',
            avatar: '/api/placeholder/40/40',
            timestamp: '1/15/2025',
            isRead: false
        },
        {
            id: 2,
            type: 'collaboration',
            title: 'Collaboration Request',
            message: 'Marcus Rodriguez sent you a collaboration request',
            avatar: '/api/placeholder/40/40',
            timestamp: '1/15/2025',
            isRead: false,
            actions: ['decline', 'accept', 'view']
        },
        {
            id: 3,
            type: 'message',
            title: 'New Message',
            message: 'Emma Thompson: "Thanks for the great collaboration!"',
            avatar: '/api/placeholder/40/40',
            timestamp: '1/15/2025',
            isRead: false
        }
    ]);

    const [counts, setCounts] = useState({
        matches: 1,
        collaborations: 1,
        messages: 1,
        updates: 1
    });

    // Functions for backend integration
    const handleNotificationAction = async (notificationId, action) => {
        try {
            // Replace with your API call
            console.log(`Action: ${action} on notification: ${notificationId}`);

            if (action === 'accept' || action === 'decline') {
                // Update local state and make API call
                setNotifications(prev =>
                    prev.map(notif =>
                        notif.id === notificationId
                            ? { ...notif, isRead: true }
                            : notif
                    )
                );

                // API call example:
                // await fetch(`/api/collaborations/${notificationId}/${action}`, { method: 'POST' });
            }
        } catch (error) {
            console.error('Error handling notification action:', error);
        }
    };

    const markAsRead = async (notificationId) => {
        try {
            setNotifications(prev =>
                prev.map(notif =>
                    notif.id === notificationId
                        ? { ...notif, isRead: true }
                        : notif
                )
            );

            // API call example:
            // await fetch(`/api/notifications/${notificationId}/read`, { method: 'PATCH' });
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
    };

    const NotificationTypeCard = ({ icon: Icon, title, count, color }) => (
        <div className={`${color} rounded-lg rounded-tr-none rounded-bl-none p-4 md:p-6 text-white shadow-sm`}>
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
            className={`bg-white rounded-lg p-4 md:p-6 mb-4 border border-gray-700 transition-all hover:bg-gray-750 ${!notification.isRead ? 'border-l-4 border-l-blue-500' : ''
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
                            e.target.src = `data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="40" height="40" fill="#6b7280"/><text x="20" y="25" text-anchor="middle" fill="white" font-size="16">👤</text></svg>')}`;
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

            {/* Action buttons for collaboration requests */}
            {notification.actions && (
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-700">
                    {notification.actions.map((action) => (
                        <button
                            key={action}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleNotificationAction(notification.id, action);
                            }}
                            className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${action === 'accept'
                                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                                    : action === 'view'
                                        ? 'bg-orange-400 hover:bg-orange-500 text-white'
                                        : 'bg-gray-600 hover:bg-gray-500 text-white'
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
        <div class>
            {/* Header */}
            <div className="p-6 bg-[#2A2A2A]">
                <h1 className="text-white text-2xl md:text-3xl font-bold">
                    Notification Type
                </h1>
            </div>
            {/* Notification Type Cards */}
            <div className="w-full bg-[#2A2A2A] grid grid-cols-2 p-3 lg:grid-cols-4 gap-3 md:gap-4">
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
                <NotificationTypeCard
                    icon={RotateCcw}
                    title="Updates"
                    count={counts.updates}
                    color="bg-[#EFAC16]"
                />
            </div>
        <div className="min-h-screen bg-[#1F1F22] p-4 md:p-6 lg:p-8">
            <div className="max-w-6xl mx-auto">
                

                

                {/* Notification Feed */}
                <div className="space-y-4">
                    {notifications.map((notification) => (
                        <NotificationCard
                            key={notification.id}
                            notification={notification}
                        />
                    ))}
                </div>

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

export default NotificationDashboard;