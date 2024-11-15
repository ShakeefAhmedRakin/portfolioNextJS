"use client";
import Lottie from "lottie-react";
import heroAnimation from "../../_data/lottie/hero-animation.json";

export default function HeroAnimation() {
  return (
    <>
      <Lottie animationData={heroAnimation} loop={true} />
    </>
  );
}
