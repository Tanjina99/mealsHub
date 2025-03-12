import Image from "next/image";

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
            className="absolute inset-0 w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
          <p className="mt-4 text-xl md:text-2xl font-bold text-text-color">
            Bringing you delicious meals, anytime, anywhere.
          </p>

          <div>
            <a
              href="#mission"
              className="inline-block mt-8 px-8 py-3 bg-button-primary hover:bg-button-primary-hover rounded-full text-text-color font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Our Story
            </a>
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
                "https://i.pinimg.com/originals/9b/b2/65/9bb265c71b782bfb9ae01763369355fb.jpg",
            },
            {
              name: "Jane Smith",
              role: "Head Chef",
              image:
                "https://img.freepik.com/premium-photo/handsome-businessman-suit_965238-3746.jpg",
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
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <div className="mt-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="text-text-color hover:text-primary">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-text-color hover:text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.967 0-1.75-.784-1.75-1.75s.783-1.75 1.75-1.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.556c0-1.327-.027-3.033-1.85-3.033-1.851 0-2.135 1.445-2.135 2.941v5.648h-3v-10h2.885v1.364h.041c.402-.762 1.385-1.564 2.849-1.564 3.048 0 3.61 2.006 3.61 4.613v5.587z" />
                    </svg>
                  </a>
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
