
const getImageUrl = (path) => {
    if (!path) return "";

    if (path.includes("uploads")) {
        const relativePath = path.split("uploads")[1];
        return `${import.meta.env.VITE_BACKEND_URL}/uploads${relativePath.replace(/\\/g, "/")}`;
    }
    return path;
};
export default getImageUrl;