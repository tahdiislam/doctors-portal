import React from "react";
import { Link } from "react-router-dom";
import chair from "../../../assets/images/chair.png";
import PrimaryBtn from "../../../Component/PrimaryBtn";

const TopBanner = () => {
  return (
    <section>
      <div className="hero p-9">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="md:w-1/2 rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              doloribus cumque facere blanditiis, cum, repellat modi rem velit
              exercitationem fugiat, atque dignissimos
            </p>
            <Link to="/appointment">
              <PrimaryBtn>Get Started</PrimaryBtn>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
