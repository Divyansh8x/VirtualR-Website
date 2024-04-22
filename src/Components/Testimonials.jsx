import React from "react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      user: "John Doe",
      company: "Stellar Solutions",
      image: user1,
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      user: "Jane Smith",
      company: "Blue Horizon Technologies",
      image: user2,
      text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
      user: "David Johnson",
      company: "Quantum Innovations",
      image: user3,
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Ronee Brown",
      company: "Fusion Dynamics",
      image: user4,
      text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
      user: "Michael Wilson",
      company: "Visionary Creations",
      image: user5,
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
      user: "Emily Davis",
      company: "Synergy Systems",
      image: user6,
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="mt-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide my-10 lg:my-20">
          What people are saying
        </h1>
      </div>
      <div className={`flex flex-wrap justify-center mt-10`}>
        {testimonials.map((item, i) => (
          <div
            className={`w-full lg:w-1/3 sm:w-1/2 px-4 py-2 flex-grow transition ease-in-out hover:scale-105 duration-300 `}
            key={i}
          >
            <div
              className={`bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin h-full flex flex-col justify-between`}
            >
              <p className="">{item.text}</p>
              <div className="flex items-start mt-8">
                <img
                  className="w-28 h-28 mr-6 rounded-full border border-neutral-300"
                  src={item.image}
                  alt=""
                />
                <div>
                  <h6 className="">{item.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {item.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;