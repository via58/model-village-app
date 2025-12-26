import React from "react";
import "./story.css";

const storySections = [
  {
    title: "Before & After (1996–2025)",
    description:
      "A visual comparison of Kuthambakkam’s transformation over nearly three decades — from basic infrastructure challenges to a regenerative village model.",
  },
  {
    title: "Regenerative Thinking Explained",
    description:
      "Simple diagrams and narratives explaining regenerative development, community ownership, and long-term sustainability.",
  },
  {
    title: "Village Maps & Production Networks",
    description:
      "Cluster maps, local production networks, and community linkages that power the village economy.",
  },
  {
    title: "Circular Economy in Practice",
    description:
      "How waste, energy, agriculture, and livelihoods are connected in a closed-loop system within the village.",
  },
  {
    title: "Replication of the Model",
    description:
      "Frameworks and learnings on how the Kuthambakkam model can be adapted and replicated across regions.",
  },
];

const mediaResources = [
  "Reports & Research Papers",
  "Presentations & Policy Notes",
  "News Articles & Media Coverage",
  "Videos & Documentaries",
  "CSR Case Studies",
  "Downloads for Researchers",
];

const KuthambakkamStory = () => {
  return (
    <section className="kuthambakkam-section">
      <div className="container">
        {/* Section 4 */}
        <div className="story-header">
          <h2>The Kuthambakkam Story</h2>
          <p>
            A journey of transformation rooted in people-led governance,
            regenerative thinking, and sustainable rural development.
          </p>
        </div>

        <div className="story-grid">
          {storySections.map((section, index) => (
            <div className="story-card" key={index}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          ))}
        </div>

        {/* Section 5 */}
        <div className="media-section">
          <h2>Media & Resources</h2>
          <p className="media-subtext">
            Curated knowledge assets for researchers, policymakers,
            practitioners, and partners.
          </p>

          <ul className="media-list">
            {mediaResources.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KuthambakkamStory;
