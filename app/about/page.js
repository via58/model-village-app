"use client";
import React from "react";
import "./aboutus.css";
const timelineData = [
  {
    year: "1996",
    title: "Village Transformation Begins",
    description:
      "Kuthambakkam initiates a community-driven development model focusing on self-reliance and dignity.",
  },
  {
    year: "2005",
    title: "Expansion of Livelihood Programs",
    description:
      "Introduction of sustainable employment initiatives for women and youth.",
  },
  {
    year: "2015",
    title: "STEM & Education Focus",
    description:
      "Launch of STEM learning and leadership programs for rural children.",
  },
  {
    year: "2022",
    title: "Regenerative Village Model",
    description:
      "Adoption of regenerative development practices integrating ecology and economy.",
  },
];

const partners = [
  "Academic Institutions",
  "Grassroots NGOs",
  "CSR & Corporate Partners",
  "Government Bodies",
  "International Development Networks",
];

const AboutUs = () => {
  return (
    <section className="about-container">
      {/* History */}
      <div className="about-section">
        <h2>History of Kuthambakkam’s Transformation</h2>
        <p>
          Kuthambakkam stands as a living example of how community-led
          governance and inclusive development can transform rural ecosystems.
          The village’s journey reflects decades of participatory leadership,
          sustainable livelihoods, and social justice.
        </p>
      </div>

      {/* Vision */}
      <div className="about-section">
        <h2>R. Elango’s Vision</h2>
        <p>
          R. Elango envisioned a development model rooted in dignity, equity,
          and sustainability. His work emphasizes empowering communities to lead
          their own transformation rather than depending on external aid.
        </p>

        {/* Video placeholder */}
        <div className="video-placeholder">
          <span>▶ Watch Vision Story</span>
        </div>
      </div>

      {/* About TVSG */}
      <div className="about-section">
        <h2>About TVSG</h2>

        <h4>Mission</h4>
        <p>
          To foster regenerative development models that are inclusive,
          community-owned, and scalable across regions.
        </p>

        <h4>Values</h4>
        <ul>
          <li>Community Participation</li>
          <li>Sustainability & Regeneration</li>
          <li>Equity & Social Justice</li>
          <li>Transparency & Accountability</li>
        </ul>

        <h4>Governance</h4>
        <p>
          TVSG follows transparent governance practices with participatory
          leadership structures, ensuring ethical and impactful decision-making.
        </p>
      </div>

      {/* Timeline */}
      <div className="about-section">
        <h2>Timeline of Major Projects</h2>
        <div className="timeline">
          {timelineData.map((item) => (
            <div key={item.year} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="about-section">
        <h2>Partners & Collaborators</h2>
        <ul className="partners-list">
          {partners.map((partner) => (
            <li key={partner}>{partner}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
