// app/page.js
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/common/Header";
import Home from "@/app/home/page";
import AboutUs from "@/app/about/page";
export default function HomePage() {
  const [currentSection, setCurrentSection] = React.useState("home");
  useEffect(() => {
    // if (window.location.hash === "#contact") {
    //   setTimeout(() => {
    //     document
    //       .getElementById("contact")
    //       ?.scrollIntoView({ behavior: "smooth" });
    //   }, 100);
    // }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      />
      <main>
        {currentSection === "home" && <Home />}
        {currentSection === "about" && <AboutUs />}
      </main>
    </div>
  );
}
