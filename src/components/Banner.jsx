import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-blue">Perfect Job</span> Match today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Discover your next career opportunity with ease – search, apply, and
        land your dream job today!
      </p>

      <form action="">
        <div>
          <div>
           <input type="text" name="title" id="title" className="block flex-1 border-0 bg-transparent py-1.5 pl-8"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
