export interface Review {
  id: number;
  name: string;
  review: string;
  image: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    review:
      "This product transformed our workflow completely. The intuitive interface made onboarding a breeze, and our team productivity has increased by 30% since implementation.",
    image:
      "https://images.unsplash.com/photo-1609902726285-00668009f004?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDQzfHxoYXBweXxlbnwwfHx8fDE2MTU4OTMxMDU&ixlib=rb-1.2.1&q=80&w=2000",
    stars: 4.5,
  },
  {
    id: 2,
    name: "Michael Chen",
    review:
      "As someone who juggles multiple projects, this tool has been a game-changer for my time management. The only reason I'm not giving 5 stars is because I'd love to see more customization options.",
    image:
      "https://media.licdn.com/dms/image/D4E03AQF6Jbm6XhzKGA/profile-displayphoto-shrink_800_800/0/1679511064545?e=2147483647&v=beta&t=ut_d39I1rbUFHcMmZE-uTXEoL2cfjrzYynR69T3Y0xc",
    stars: 4,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    review:
      "We've tried numerous solutions before, but nothing compares to the seamless experience this platform offers. Customer support is exceptional too - they respond within minutes!",
    image:
      "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg",
    stars: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    review:
      "The security features and reliability sold us on this product. We've had zero downtime since implementation six months ago. Worth every penny for enterprise needs.",
    image:
      "https://th.bing.com/th/id/OIP.lN95Lfh2szk3YP3kwansFQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    stars: 4,
  },
  {
    id: 5,
    name: "Lisa Patel",
    review:
      "Perfect for small businesses with limited tech resources. Very user-friendly and the templates saved me hours of setup time. Looking forward to future updates!",
    image:
      "https://th.bing.com/th/id/R.bc205eac509090ba026433b1565bc18a?rik=1BblnGHP1wqVYA&riu=http%3a%2f%2fwww.perfocal.com%2fblog%2fcontent%2fimages%2f2021%2f01%2fPerfocal_17-11-2019_TYWFAQ_100_standard-3.jpg&ehk=MXaB6gPhPiykBuERz%2bfG0C9O7kxtvL6qKybZiRVExMI%3d&risl=&pid=ImgRaw&r=0",
    stars: 3.5,
  },
  {
    id: 6,
    name: "James Wilson",
    review:
      "Even in our non-tech industry, implementation was smooth. The mobile app is particularly useful for our field teams, and reporting features help me keep executives updated effortlessly.",
    image:
      "https://th.bing.com/th/id/OIP.sk7ea-hQNp8AO2dsr-QXUQHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    stars: 5,
  },
  {
    id: 7,
    name: "Olivia Kim",
    review:
      "I've recommended this to all my clients. The analytics capabilities are unmatched in the industry, and the recent AI integration is revolutionary.",
    image:
      "https://th.bing.com/th/id/OIP.gI5TnFbAj_2V18OwM1G0lgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3",
    stars: 3.5,
  },
];
