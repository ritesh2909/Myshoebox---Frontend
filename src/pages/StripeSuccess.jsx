import React from "react";
import { Context } from "../context/Context";
import { useContext, useState, useEffect } from "react";
import NotFound from "./NotFound"

function StripeSuccess() {
  const { token, isFetching, error, dispatch, isPaymentTriggered, sessionId } = useContext(Context);
  return (
    <>
      {isPaymentTriggered && <>
        <h2>Thanks for your order!</h2>
        <h4>Your payment is successful.</h4>
        <p>
          We appreciate your business! If you have any questions, please email us
          at
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </>}
      {!isPaymentTriggered && <>
        <NotFound />
      </>}
    </>
  );
}

export default StripeSuccess;
