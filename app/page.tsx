// app/page.js
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Carousel from "@/components/home/Carousel";
import ContactPage from "@/components/contact/contact";
import { Sprout, Droplets, Users, Heart } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  const impactAreas = [
    {
      icon: Sprout,
      title: "Agriculture",
      desc: "Modern farming equipment and training for better yields",
    },
    {
      icon: Droplets,
      title: "Irrigation",
      desc: "Sustainable water management systems for all seasons",
    },
    {
      icon: Users,
      title: "Community",
      desc: "Building stronger village bonds through collective growth",
    },
    {
      icon: Heart,
      title: "Healthcare",
      desc: "Accessible medical facilities for farming families",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Carousel Section */}
        <Carousel />
        {/* Impact Areas */}
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              STEM for Village’s Future An Integrated Knowledge Empowerment
              Program
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Vision : To build a robust, inclusive, and scalable education
              support system for children from poor and marginalized families by
              integrating STEM-based learning through modern tools, skilled
              educators, community ownership, and digital infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {impactAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-green-600 flex justify-center mb-4">
                  <area.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-600 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-green-100">Farmers Supported</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-green-100">Villages Reached</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">₹10L+</div>
                <div className="text-green-100">Funds Raised</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Make a Difference Today
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Your contribution, no matter the size, helps provide essential
              resources and support to hardworking farmers and their families.
            </p>
            {/* <Link 
              href="/donate"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 shadow-lg transform hover:scale-105 transition"
            > */}
            {/* Donate Now */}
            {/* </Link> */}
          {/* </div> */}
        {/* </section>  */}

        {/* Testimonials */}
        <section className="bg-gray-100 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-12 text-center">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ravi Kumar",
                  role: "Farmer, Green Valley",
                  text: "The new irrigation system has doubled our crop yield. We are truly grateful.",
                },
                {
                  name: "Priya Sharma",
                  role: "Village Leader",
                  text: "Community programs have brought us together and improved our lives significantly.",
                },
                {
                  name: "Suresh Patel",
                  role: "Organic Farmer",
                  text: "Training in sustainable farming practices has transformed how we work our land.",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-green-600 text-4xl mb-4">"</div>
                  <p className="text-gray-600 mb-4 italic">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

           <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Empowering Rural Education Through STEM
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">600+ Children Impacted</h3>
                      <p className="text-green-100">Access to engaging STEM content and modern tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Hub-and-Spoke Model</h3>
                      <p className="text-green-100">Scalable and replicable education ecosystem</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Local Capacity Building</h3>
                      <p className="text-green-100">Training youth as educators and researchers</p>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/about"
                  className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 shadow-lg transform hover:scale-105 transition"
                >
                  Learn More About Our Vision
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Project Impact</h3>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">₹1.05 Cr</div>
                    <div className="text-green-100">Total Project Budget</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold mb-1">5+</div>
                      <div className="text-green-100 text-sm">Schools</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-1">11</div>
                      <div className="text-green-100 text-sm">Staff Members</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-center text-sm text-green-100">
                      Aligned with 8 UN Sustainable Development Goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ContactPage />
      </main>
      <Footer />
    </div>
  );
}
