import AboutUs from "@/components/about-us/AboutUs";
import CustomerReviews from "@/components/customer-reviews/CustomerReviews";
import Hero from "@/components/Hero";
import MealByCategory from "@/components/meal-by-category/MealByCategory";
import MealPlans from "@/components/meals-plan/MealsPlan";
import ServiceSection from "@/components/service/Service";

const HomeForMainlayot = () => {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <MealByCategory />
      <MealPlans />
      <CustomerReviews />
      <AboutUs />
    </div>
  );
};

export default HomeForMainlayot;
