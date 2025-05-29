"use client";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-hot-toast";
import useAuth from "@/hooks/useAuth";
import useUser from "@/hooks/useUser";

interface CheckoutFormProps {
  price?: number;
  package_name?: string;
  badge_image?: string;
}

interface User {
  _id: string;
  email: string;
  displayName?: string;
}

const CheckoutForm = ({
  price,
  package_name,
  badge_image,
}: CheckoutFormProps) => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [transactionId, setTransactionId] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const { userData, isLoading } = useUser();

  useEffect(() => {
    // Only create payment intent if there's a price to charge
    console.log(price);
    if (price && price > 0) {
      const fetchPaymentIntent = async () => {
        try {
          const response = await axios.post(
            "https://dorm-dine-hub-server.vercel.app/create-payment-intent",
            {
              price,
            }
          );
          console.log(response);
          setClientSecret(response.data.clientSecret);
        } catch (err) {
          console.error("Error creating payment intent:", err);
          setError("Failed to initialize payment. Please try again.");
        }
      };

      fetchPaymentIntent();
    }
  }, [price]);

  if (isLoading) {
    return <div className="flex justify-center py-10">Loading...</div>;
  }

  // Directly access the first user from userData array
  const currentUser = userData?.[0];

  if (!currentUser) {
    return <div className="text-red-500">User data not found</div>;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setError("");

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setIsProcessing(false);
      return;
    }

    try {
      // Create payment method
      const { error: paymentMethodError } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (paymentMethodError) {
        setError(paymentMethodError.message || "Payment failed");
        setIsProcessing(false);
        return;
      }

      // Confirm payment
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              email: user?.email || "anonymous",
              name: user?.displayName || "anonymous",
            },
          },
        });

      if (confirmError) {
        setError(confirmError.message || "Payment confirmation failed");
      } else if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        // Update user with new badge
        try {
          const response = await axios.put(
            `https://dorm-dine-hub-server.vercel.app/users/${currentUser._id}`,
            {
              badge: package_name,
              badge_image: badge_image,
            }
          );

          if (response.data.modifiedCount > 0) {
            toast.success("Thank you for your purchase!");
          }
        } catch (err) {
          console.error("Error updating user:", err);
          toast.error("Purchase successful but failed to update profile");
        }
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError("An unexpected error occurred");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="p-4 border rounded-md shadow-sm bg-white">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>

      <div className="max-w-xs mx-auto">
        <button
          className={`w-full py-2 px-4 rounded-md transition-colors ${
            isProcessing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          type="submit"
          disabled={!stripe || !clientSecret || isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </div>

      {error && (
        <div className="text-red-600 text-center font-medium mt-4">{error}</div>
      )}

      {transactionId && (
        <div className="text-green-600 text-center mt-4">
          Your transaction ID: {transactionId}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
