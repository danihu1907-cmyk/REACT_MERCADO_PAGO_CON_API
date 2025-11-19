// services/paymentService.ts
import { PAYMENT_ENDPOINTS } from "../config/api.config";
import {
  CreatePaymentRequest,
  CreatePaymentResponse,
  PaymentStatus,
} from "../types/payment.types";
import api from "./api";

export const paymentService = {
  /**
   * Crear preferencia de pago en Mercado Pago
   */
  createPayment: async (
    data: CreatePaymentRequest
  ): Promise<CreatePaymentResponse> => {
    const response = await api.post<CreatePaymentResponse>(
      PAYMENT_ENDPOINTS.CREATE,
      data
    );
    return response.data;
  },

  /**
   * Obtener estado de un pago
   */
  getPaymentStatus: async (paymentId: number): Promise<PaymentStatus> => {
    const response = await api.get<PaymentStatus>(
      `${PAYMENT_ENDPOINTS.GET_STATUS}/${paymentId}`
    );
    return response.data;
  },
};
