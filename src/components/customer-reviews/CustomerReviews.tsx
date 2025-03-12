"use client";
import React from "react";
import TestimonialSwiper from "./TestimonialSwiper";
import { reviews } from "./review-Data";

export default function CustomerReviews() {
  console.log(reviews);
  return (
    <div className="bg-secondary-mode-bg">
      <div className="container mx-auto py-20 px-4 text-center max-w-5xl">
        <div className="flex justify-center mb-16">
          <h1 className="text-3xl font-bold text-text-color uppercase tracking-wide pb-2 inline-block relative -mt-2">
            What Our{" "}
            <span className="text-primary border-b-4 border-yellow-400">
              Customers
            </span>{" "}
            Say
          </h1>
        </div>

        <p className="text-lg text-text-color max-w-2xl mx-auto -mt-10">
          Don&apos;t just take our word for it. See how our meal plans have
          helped customers improve their lifestyles with healthy, convenient
          meal delivery.
        </p>
      </div>

      <section className="container mx-auto px-4 pb-24 max-w-5xl">
        <TestimonialSwiper reviews={reviews} />
      </section>
    </div>
  );
}
