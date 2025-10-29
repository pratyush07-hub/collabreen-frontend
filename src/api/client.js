// import axios from 'axios';
// import Cookies from 'js-cookie';

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// const api = axios.create({
//     baseURL: `${BACKEND_URL}/api`, // Adjust for production
//     headers: { 'Content-Type': 'application/json' },
// });

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             localStorage.removeItem('token');
//             window.location.href = '/login';
//         } else if (error.response?.status === 403 && error.response.data.message.includes('Profile setup required')) {
//             window.location.href = '/creator-to-creator?section=setup'; // Adjust route
//         }
//         return Promise.reject(error);
//     }
// );

// const client = axios.create({
//     baseURL: import.meta.env.VITE_BACKEND_URL,
// });

// client.interceptors.request.use(
//     (config) => {
//         const token = Cookies.get('jwt');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// export const getAllProfiles = (filters = {}) => api.get('/creatorprofiles', { params: filters });
// export const getProfile = (userId) => api.get(`/creatorprofiles/${userId}`);
// export const setupProfile = (data) => api.post('/creatorprofiles/setup', data);
// export const updateProfile = (userId, data) => api.put(`/creatorprofiles/${userId}`, data);
// export const getUserChats = () => api.get('/chats');
// export const getOrCreateChat = (participantId) => api.get(`/chats/create/${participantId}`);
// export const getChatMessages = (chatId) => api.get(`/chats/${chatId}/messages`);
// export const sendMessage = (chatId, content) => api.post(`/chats/${chatId}/messages`, { content });
// export const sendCollaborationRequest = (data) => api.post('/collaborations', data);
// export const getCollaborationRequests = (type) => api.get('/collaborations', { params: { type } });
// export const updateCollaborationStatus = (requestId, status) => api.put(`/collaborations/${requestId}/status`, { status });

// export default api;

import axios from "axios";
import Cookies from "js-cookie";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: `${BACKEND_URL}/api`,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("jwt");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove("jwt");
      window.location.href = "/login";
    } else if (
      error.response?.status === 403 &&
      error.response?.data?.message &&
      error.response.data.message.includes("Profile setup required")
    ) {
      window.location.href = "/creator-to-creator?section=setup";
    }
    return Promise.reject(error);
  }
);

const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

client.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove("jwt");
      window.location.href = "/login";
    } else if (
      error.response?.status === 403 &&
      error.response?.data?.message &&
      error.response.data.message.includes("Profile setup required")
    ) {
      window.location.href = "/creator-to-creator?section=setup";
    }
    return Promise.reject(error);
  }
);

// export const getAllProfiles = (filters = {}) =>
//   api.get("/creatorprofiles", { params: filters });
export const getProfile = (userId) => api.get(`/creatorprofiles/${userId}`);
export const setupProfile = (data) =>
  client.post("/creatorprofiles/setup", data); // This is correct
export const updateProfile = (userId, data) =>
  api.put(`/creatorprofiles/${userId}`, data);
export const getUserChats = () => api.get("/chats");
export const createChat = (participants) =>
  api.post("/chats", { participants });
export const getOrCreateChat = (participantId) =>
  api.get(`/chats/create/${participantId}`);
export const getChatMessages = (chatId) => api.get(`/chats/${chatId}/messages`);
export const sendMessage = (chatId, content) =>
  api.post(`/chats/${chatId}/messages`, { content });
export const sendCollaborationRequest = (data) =>
  api.post("/collaborations", data);
export const getCollaborationRequests = (type) =>
  api.get("/collaborations", { params: { type } });
export const updateCollaborationStatus = (requestId, status) =>
  api.put(`/collaborations/${requestId}/status`, { status });

export const getCurrentUser = () => api.get("/user/currentuser");

export default api;

export const createAcceptedCollaboration = (data) =>
  api.post("/accepted-collaborations", data);

export const getAcceptedCollaborations = () =>
  api.get("/accepted-collaborations");

export const getAcceptedCollaborationById = (id) =>
  api.get(`/accepted-collaborations/${id}/files`);

export const uploadFileToCollaboration = async (collaborationId, file) => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post(
    `/accepted-collaborations/${collaborationId}/upload`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
};

export const createGroup = (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("category", data.category); // added
  formData.append("privacy", data.privacy);   // added
  formData.append("createdBy", data.createdBy);

  if (data.image) formData.append("image", data.image);

  return api.post("/groups/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};


export const getAllGroups = () => api.get("/groups");
export const getGroupById = (id) => api.get(`/groups/${id}`);
export const joinGroup = (groupId, userId) => api.post(`/groups/${groupId}/join`, { userId });
export const leaveGroup = (groupId, userId) => api.post(`/groups/${groupId}/leave`, { userId });

export const getGroupMessages = (groupId) => api.get(`/groups/${groupId}/messages`);
export const sendGroupMessage = (groupId, content) =>
  api.post(`/groups/${groupId}/message`, { groupId, content });

export const getAllProfiles = () => api.get('/creatorprofiles');
// export const likeProfile = (profileId) => api.post(`/creatorprofiles/${profileId}/like`);
export const getProfileById = (id) => api.get(`/creatorprofiles/${id}`);
export const likeProfile = (profileId) => api.post(
  `/creatorprofiles/${profileId}/like`,
  {},
  { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
);



// export const likeProfile = (profileId) => api.post(`/creatorprofiles/${profileId}/like`, {});
export const getPendingLikeRequests = () => api.get('/creatorprofiles/like-requests/pending');
export const respondLikeRequest = (requestId, action) =>
  api.put(`/creatorprofiles/like-requests/${requestId}/respond`, { action });