import React from "react";

type Props = {};

export default function CTA({}: Props) {
  return (
    <section id="cta">
      <div className="bg-brightRed py-8">
        <div className="container mx-auto p-6">
          <div className="flex flex-col items-center justify-between space-y-12 md:space-y-6 lg:space-y-0 lg:flex-row">
            <h2 className="text-white font-bold text-5xl text-center md:text-start md:text-4xl lg:w-1/2">
              Simplify how your team works today
            </h2>
            <a
              href="#"
              className="p-3 px-6 text-brightRed bg-white rounded-full hover:bg-black transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
