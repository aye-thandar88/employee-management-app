"use client";

import React from "react";
import animationJson from "@/assets/page_loading.json";
import Lottie from "react-lottie-player";

const loading = () => {
  return (
    <div>
      <Lottie
        loop
        animationData={animationJson}
        play
        style={{ width: 150, height: 150 }}
      />
    </div>
  );
};

export default loading;
