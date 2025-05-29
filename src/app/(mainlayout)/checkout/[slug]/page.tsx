"use client";
import CheckoutForm from "@/components/checkout-form/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  console.log(slug);

  const mealPlans = [
    {
      name: "Silver Plan",
      slug: "Silver",
      price: 12.99,
      badge_image: "https://i.ibb.co/pzrbDjN/silver-badge-removebg-preview.png",
      description:
        "Enjoy basic meal delivery with fresh, healthy meals delivered daily.",
      benefits: [
        "Fresh daily meals",
        "Standard delivery time",
        "Basic customer support",
      ],
    },
    {
      name: "Gold Plan",
      slug: "Gold",
      price: 69.99,
      badge_image: "https://i.ibb.co/ynJQQRv/gold-bage-removebg-preview.png",
      description:
        "Get premium meals with additional benefits for a week's worth of healthy meals.",
      benefits: [
        "Fresh, nutritious meals delivered every day",
        "Priority delivery",
        "Enhanced customer support",
        "Weekly meal customization",
      ],
    },
    {
      name: "Platinum Plan",
      slug: "Platinum",
      price: 249.99,
      badge_image:
        "https://i.ibb.co/mBtyvLc/platinum-badge-removebg-preview.png",
      description:
        "The ultimate plan for a month's worth of meals, with premium options and exclusive perks.",
      benefits: [
        "Fresh, gourmet meals delivered daily",
        "Priority delivery with express options",
        "24/7 customer support",
        "Weekly and monthly meal customization",
        "Exclusive recipe choices and discounts",
      ],
    },
  ];
  const currentPlan = mealPlans.find((meal) => meal.slug === slug);
  console.log(currentPlan);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PAYMENT_KEY || "");
  console.log(stripePromise);
  return (
    <div className="min-h-screen py-20 text-center">
      <div>Plan Name: {currentPlan?.name}</div>
      <p>price: ${currentPlan?.price}</p>
      <ol>
        {currentPlan?.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ol>
      <div className="mt-12 max-w-sm mx-auto">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            price={currentPlan?.price}
            package_name={currentPlan?.name}
            badge_image={currentPlan?.badge_image}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Checkout;
