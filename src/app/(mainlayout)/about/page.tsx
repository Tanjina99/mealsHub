import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="bg-secondary-mode-bg">
      <section className="relative w-full h-[500px] flex items-center justify-center text-text-color overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://www.publicdomainpictures.net/pictures/150000/velka/delicious-meal.jpg"
            alt="Delicious Meal"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            className="absolute inset-0 w-full h-full opacity-70"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-text-color">
            About Us
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-bold text-text-color">
            Bringing you delicious meals, anytime, anywhere.
          </p>

          <div>
            <Button className="mt-4 bg-button-primary hover:bg-button-primary-hover text-base font-semibold py-3 px-6 rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="max-w-6xl mx-auto py-16 px-6 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-color inline-block border-b-4 border-primary pb-2">
            Our Mission
          </h2>
          <p className="mt-8 text-lg leading-relaxed">
            We believe in providing high-quality, fresh, and delicious meals to
            food lovers everywhere. Whether you crave something savory or sweet,
            our mission is to bring convenience and taste to your dining
            experience.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary-mode-bg py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-color inline-block border-b-4 border-primary pb-2">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Fresh Ingredients",
                desc: "We use only the freshest and highest-quality ingredients.",
                icon: "🥦",
              },
              {
                title: "Fast Delivery",
                desc: "Get your favorite meals delivered hot and fresh in no time.",
                icon: "🚀",
              },
              {
                title: "Variety of Cuisines",
                desc: "Explore a diverse menu with meals from around the world.",
                icon: "🍽️",
              },
              {
                title: "Affordable Prices",
                desc: "Enjoy delicious meals without breaking the bank.",
                icon: "💰",
              },
              {
                title: "Eco-Friendly Packaging",
                desc: "We care about the environment and use sustainable materials.",
                icon: "♻️",
              },
              {
                title: "Excellent Support",
                desc: "Our team is always here to help you with your orders.",
                icon: "📞",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg group"
              >
                <div className="p-8 rounded-xl text-center h-full">
                  <div className="text-5xl mb-4 bg-primary bg-opacity-20 h-20 w-20 rounded-full flex items-center justify-center mx-auto">
                    <span className="transform transition-transform duration-300 group-hover:rotate-12">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-3">{item.title}</h3>
                  <p className="mt-2 text-opacity-90">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-color inline-block border-b-4 border-primary pb-2">
            Meet Our Team
          </h2>
          <p className="mt-6 text-text-color text-lg max-w-3xl mx-auto">
            Our passionate team is dedicated to making every meal an
            unforgettable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {[
            {
              name: "John Doe",
              role: "Founder & CEO",
              image:
                "https://thumbs.dreamstime.com/b/professional-businessman-suit-his-office-working-business-corporate-image-young-succesful-entrepreneur-work-97025320.jpg",
            },
            {
              name: "Jane Smith",
              role: "Head Chef",
              image:
                "https://as1.ftcdn.net/v2/jpg/05/99/98/00/1000_F_599980082_F5uwUytettMJCPKE5s7JgAxhyaMgUY1U.jpg",
            },
            {
              name: "Alex Brown",
              role: "Marketing Lead",
              image:
                "https://www.theguidetomenssuits.com/wp-content/uploads/2023/08/gray-suit-and-silver-tie-bar-1024x683.png",
            },
            {
              name: "Emily White",
              role: "Customer Support",
              image:
                "https://img.freepik.com/premium-photo/woman-suit_777078-41883.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className=" rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  height={1400}
                  width={1400}
                  objectFit="contain"
                  className="w-full h-full object-cover rounded-t-xl"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <div className="mt-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href="#" className="text-text-color hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 50 50"
                      fill="currentColor"
                    >
                      <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-text-color hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 50 50"
                      fill="currentColor"
                    >
                      <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                    </svg>
                  </Link>
                  <Link href="#" className="text-text-color hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 50 50"
                      fill="currentColor"
                    >
                      <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
