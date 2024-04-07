export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCES",
  payload: token,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});

export const OtpSent = () => ({
  type: "OTP_SENT",
});

export const OtpFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const UpdateStart = () => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = () => ({
  type: "UPDATE_SUCCESS",
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});

export const SetPaymentTrigger = (sessionId) => ({
  type: "SET_PAYMENT_TRIGGER",
  payload: sessionId,
});

export const PaymentProcessed = () => ({
  type: "PAYMENT_PROCESSED",
});
