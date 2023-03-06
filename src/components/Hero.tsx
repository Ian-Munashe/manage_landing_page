import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-x-0 md:space-x-0">
        <div className="flex flex-col mb-32 items-center space-y-12 md:w-1/2 md:items-baseline">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <a href="#" className="btn-primary">
            Get Started
          </a>
        </div>
        <div className="md:w-1/2">
          <img src="images/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
  );
}
