import React from "react";
import logo from "../../../images/logo-icon.png"
const Footer = () => {
  return (
    <div className="bg-black ">
      <footer className="footer p-10  text-base-content max-w-6xl mx-auto">
        <div className="text-center">
          <img src={logo} alt="Footer Logo" className="w-15 mx-auto" />
          <span className="font-semibold text-white mt-7"> Copyright 2019 © Developed by ThemeLooks.</span>
        </div>
        <div className="text-white">
          <span className="footer-title">Services</span>
          <a href className="link link-hover">Corporate Law</a>
          <a href className="link link-hover">Real state law</a>
          <a href className="link link-hover">Financial law</a>
          <a href className="link link-hover">Family law</a>
        </div>
        <div className="text-white">
          <span className="footer-title">Details</span>
          <a href className="link link-hover">Reviews</a>
          <a href className="link link-hover">About us</a>
          <a href className="link link-hover">Contact</a>
          <a href className="link link-hover">Share</a>
        </div>
        <div className="text-white">
          <span className="footer-title">Legal</span>
          <a href className="link link-hover">Terms of use</a>
          <a href className="link link-hover">Privacy policy</a>
          <a href className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
