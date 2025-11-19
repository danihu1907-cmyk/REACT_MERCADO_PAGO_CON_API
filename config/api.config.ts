// config/api.config.ts

export const API_CONFIG = {
  BASE_URL: "https://87e4c29ef339.ngrok-free.app/api",
  TIMEOUT: 10000,
};

export const PAYMENT_ENDPOINTS = {
  CREATE: "/payments/create",
  GET_STATUS: "/payments",
};

// URLs de retorno (Deep Links)
export const DEEP_LINKS = {
  SUCCESS: "abarrotess://payment-success", // ← Cambio aquí
  FAILURE: "abarrotess://payment-failure", // ← Cambio aquí
  PENDING: "abarrotess://payment-pending", // ← Cambio aquí
};
