const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        token: null,
        isFetching: true,
        error: false,
      };

    case "OTP_SENT":
      return {
        token: null,
        isFetching: true,
        error: false,
      };

    case "OTP_VERIFIED":
      return {
        token: action.payload,
        isFetching: false,
        error: false,
      };
    case "OTP_FAILURE":
      return {
        token: null,
        isFetching: false,
        error: true,
      };
    case "LOGIN_SUCCESS":
      return {
        token: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        token: null,
        isFetching: false,
        error: true,
      };

    case "LOGOUT":
      return {
        token: null,
        isFetching: false,
        error: false,
      };

    case "UPDATE_START":
      return {
        token: action.payload,
        isFetching: true,
        error: true,
      };
    case "UPDATE_SUCCESS":
      return {
        token: action.payload,
        isFetching: false,
        error: false,
      };
    case "UPDATE_FAILURE":
      return {
        token: action.payload,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default Reducer;
