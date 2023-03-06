import React from "react";

type Props = {};

export default function Testimonials({}: Props) {
  const testimonials = [
    {
      img: "images/avatar-anisha.png",
      name: "Anisha Li",
      testimonial: `“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`,
    },
    {
      img: "images/avatar-ali.png",
      name: "Ali Bravo",
      testimonial: `“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”`,
    },
    {
      img: "images/avatar-richard.png",
      name: "Richard Watts",
      testimonial: `“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”`,
    },
  ];
  return (
    <section id="team" className="container mx-auto p-6 mb-12">
      <div className="flex flex-col items-center space-y-8">
        <h2 className="font-bold text-4xl text-center mb-8">
          What's Different About Manage?
        </h2>
        <div className="flex flex-col md:flex-row">
          {testimonials.map((testimony) => (
            <>
              <div className="flex flex-col items-center p-6 rounded-lg space-y-4 bg-veryLightGray mb-12 md:mb-0 md:mx-2 md:w-1/3 xl:mx-4">
                <img
                  src={testimony.img}
                  className="w-[4rem] -mt-14"
                  alt="avatar"
                />
                <h2 className="font-bold text-xl">{testimony.name}</h2>
                <p className="text-darkGrayishBlue">{testimony.testimonial}</p>
              </div>
            </>
          ))}
        </div>
        <a href="#" className="btn-primary">
          Get Started
        </a>
      </div>
    </section>
  );
}
