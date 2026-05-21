export const baseUrl = import.meta.env.VITE_API_URL;

export const getToken = () => {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
};

export const apiClient = async (endpoint, options = {}) => {
  const token = getToken();
  const url = `${baseUrl}${endpoint}`;
  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...options.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
  const response = await fetch(url, config);

  if (response.status === 401) {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.href = "/login";
    return;
  }
  if (response.status === 204) return null;
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.message || `Request failed (${response.status})`);
  }

  return response.json();
};

export const api = {
  get: (endpoint, options) =>
    apiClient(endpoint, { ...options, method: "GET" }),
  post: (endpoint, options, body) =>
    apiClient(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: (endpoint, options, body) =>
    apiClient(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    }),
  patch: (endpoint, options, body) =>
    apiClient(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  delete: (endpoint, options) =>
    apiClient(endpoint, {
      ...options,
      method: "DELETE",
    }),
};
