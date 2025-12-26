import React from "react";

const programs = [
  {
    title: "Regenerative Village Development",
    items: [
      "Housing",
      "Community governance",
      "Local economy",
      "Waste & energy",
      "SDG alignment",
    ],
  },
  {
    title: "STEM for Village’s Future",
    items: [
      "Hub-and-spoke learning system",
      "Tools, labs, digital environments",
      "Impact stories",
      "Gallery",
    ],
  },
  {
    title: "Agriculture Innovation",
    items: [
      "Model farm",
      "Solar power tiller",
      "Coastal farming solutions",
      "Farmer training tools",
    ],
  },
  {
    title: "Youth & Women Empowerment",
    items: [
      "Training & skilling",
      "Micro-enterprises",
      "Leadership labs",
    ],
  },
  {
    title: "Panchayat Governance & Policy Work",
    items: [
      "73rd Amendment",
      "Decentralization research",
      "Policy notes",
      "Workshops & training",
    ],
  },
];

const ProgramsComponent = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What We Do
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our programs are designed to enable sustainable, community-led
            development rooted in equity, innovation, and local governance.
          </p>
        </div>

        {/* Program Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {program.title}
              </h3>

              <ul className="space-y-2">
                {program.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-700"
                  >
                    <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-gray-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsComponent;
