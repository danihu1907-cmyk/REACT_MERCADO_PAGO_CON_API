// services/api.ts
import axios from "axios";
import { API_CONFIG } from "../config/api.config";

// Crear instancia de axios con configuración base
const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true", // ← FIX PARA NGROK
  },
});

// Interceptor para logging (opcional - para debugging)
api.interceptors.request.use(
  (config) => {
    console.log(`📤 ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("❌ Error en request:", error);
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => {
    console.log(`✅ ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      // El servidor respondió con un código de error
      console.error(`❌ Error ${error.response.status}:`, error.response.data);
    } else if (error.request) {
      // La petición se hizo pero no hubo respuesta
      console.error("❌ No se recibió respuesta del servidor");
    } else {
      // Error al configurar la petición
      console.error("❌ Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
