import React from "react";

type Props = {};

export default function Features({}: Props) {
  const items = [
    {
      title: "Track company-wide progress",
      text: `See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.`,
    },
    {
      title: "Advanced built-in reports",
      text: `Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.`,
    },
    {
      title: "Everything you need in one place",
      text: `Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.`,
    },
  ];
  return (
    <section id="features" className="container mx-auto p-6 mb-12">
      <div className="flex flex-col space-y-12 md:flex-row">
        <div className="flex flex-col items-center md:w-1/2 md:items-start">
          <h2 className="font-bold max-w-md text-center text-4xl space-y-12 mb-12 md:text-start">
            What's different about Manage?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-start">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          {items.map(({ title, text }, index) => {
            index++;
            return (
              <>
                <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                  <div className="flex flex-row items-center space-x-2 md:space-x-3">
                    <div className="px-4 py-2 text-white rounded-full bg-brightRed md:py-1">
                      0{index}
                    </div>
                    <h3 className="font-bold text-base md:text-lg">{title}</h3>
                  </div>
                </div>
                <p className="text-darkGrayishBlue md:text-start md:ml-16 lg:max-w-lg">
                  {text}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
