import React from "react";
import picture from "../../../static/assets/images/bio/20191017_075154.png";

const About = () => {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + picture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <p>
          I've always sought out opportunities to challenge and expand my
          knowledge. Although my career path has taken many twists and turns -
          from ensuring quality food as a cook, guaranteeing excellent customer
          satisfaction as a Department Manager, to programming plasma and
          acetylene CAD machines - I've always engaged my passions to help
          others and solve problems.
        </p>
        <p>
          As a software engineer, I enjoy using my obsessive attention to
          detail, my unmatched love for creating things, and my mission-driven
          work ethic to literally change the world. That's why I'm thrilled to
          help build the technologies of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default About;
