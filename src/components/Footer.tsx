import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <section id="footer" className="bg-veryDarkBlue text-white">
      <div className="container mx-auto p-6">
        <div className="flex flex-col-reverse items-center space-y-8 md:flex-row md:justify-between">
          <div className="flex flex-col-reverse justify-between space-y-12 items-center md:flex-col md:space-y-0 md:items-start xl:w-1/3">
            <div className="text-gray-400 text-sm mt-6 md:hidden">
              Copyright &copy; 2023, All Rights Reserved
            </div>
            <img src="images/logo-white.svg" className="h-8" alt="" />
            <div className="flex flex-row space-x-6">
              {[
                "icon-facebook.svg",
                "icon-youtube.svg",
                "icon-twitter.svg",
                "icon-pinterest.svg",
                "icon-instagram.svg",
              ].map((path) => (
                <a href="#">
                  <img src={`images/${path}`} className="h-7" alt="" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-around w-full md:w-1/3">
            <div className="flex flex-col space-y-3">
              {["Home", "Pricing", "Products", "About"].map((menu) => (
                <a href="#" className="li-primary">
                  {menu}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-3">
              {["Careers", "Community", "Privacy Policy"].map((menu) => (
                <a href="#" className="li-primary">
                  {menu}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-12 w-full md:w-1/2 lg:w-1/3">
            <form action="#">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Updated in your inbox"
                  className="flex-1 px-4 text-black rounded-full focus:outline-none"
                />
                <button className="btn-primary py-2">Go</button>
              </div>
            </form>
            <div className="hidden text-gray-400 text-sm md:block">
              Copyright &copy; 2023, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
