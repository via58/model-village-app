// Home.jsx
import React from "react";
import "./home.css";
import { title } from "process";
export default function Home() {
  const youtubeLinks = [
    {
      title: "4th NCSE @ XLRI - Elango Rangaswamy (Founder, Panchayat Academy)",
      link: "https://www.youtube.com/watch?v=oSzWOkrLeIo",
    },
    {
      title: "A Working Model of Decentralized Governance by Elango Rangasamy",
      link: "https://www.youtube.com/watch?v=ZswbDYxTVGY",
    },
    {
      title: "Elango who turns villages into model ones",
      link: "https://www.dailymotion.com/video/x7v5h7b",
    },
  ];
  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com")) {
      const videoId = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes("dailymotion.com")) {
      const videoId = url.split("/video/")[1];
      return `https://www.dailymotion.com/embed/video/${videoId}`;
    }

    return "";
  };
  return (
    <main className="home">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            <span className="hero-title-1">
              Regenerative Development Rooted in Community
            </span>
            <span className="hero-title-2">
              — From Kuthambakkam to the World
            </span>
          </h1>
          <p className="summary hero-title-3">
            TVSG is a community-driven initiative focused on regenerative
            development — empowering villages through education, livelihoods,
            sustainable infrastructure, and self-governance.
          </p>
          <div className="hero-actions">
            <a href="#stem" className="btn primary">
              STEM Program
            </a>
            <a href="#model" className="btn">
              Village Model
            </a>
            <a href="#donate" className="btn">
              Donate
            </a>
            <a href="#visit" className="btn">
              Visit Kuthambakkam
            </a>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="impact">
        <div className="impact-card">
          <h2>12,000+</h2>
          <p>Children Reached</p>
        </div>
        <div className="impact-card">
          <h2>3,500+</h2>
          <p>Households Benefitted</p>
        </div>
        <div className="impact-card">
          <h2>25+</h2>
          <p>Years of Impact</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <h2>Recent Highlights</h2>

        <div className="highlight-grid">
          {youtubeLinks.map((video, index) => (
            <div key={index} className="highlight-card video-card">
              <div className="video-wrapper">
                <iframe
                  src={getEmbedUrl(video.link)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="video-title">{video.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
