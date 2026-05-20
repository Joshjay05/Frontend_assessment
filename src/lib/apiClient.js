const baseUrl = import.meta.env.VITE_API_URL;

const getToken = () => {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
};

export const apiClient = async (endpoint, options = {}) => {
  const token = getToken();
  if (!token) {
    throw new Error("No authentication token found");
  }
  const url = `${baseUrl}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }
  if (response.status === 401) {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.href("/login");
  }
  return response.json();
};
