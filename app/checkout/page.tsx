"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

// this is where we establish the connection to the Stripe API
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const CheckoutPage = () => {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  // call back to our server to get the client secret
  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post("/api/payment", {
      bookingId,
    });
    return response.data.clientSecret;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    fetchClientSecret,
  };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default CheckoutPage;
