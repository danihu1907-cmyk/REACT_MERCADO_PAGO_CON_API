// types/payment.types.ts

export interface CreatePaymentRequest {
  title: string;
  amount: number;
  quantity: number;
  externalReference?: string;
}

export interface CreatePaymentResponse {
  id: number;
  preferenceId: string;
  initPoint: string;
  sandboxInitPoint: string;
}

export interface PaymentStatus {
  id: number;
  status: string; // "pending", "approved", "rejected"
  mercadopagoId?: string;
  amount: number;
}
