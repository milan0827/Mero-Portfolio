import Image from "../../Assets/me.png";

import "./About.css";

function About() {
  return (
    <section className="section about">
      <h3 className="heading__tertiary">Welcome</h3>

      <div className=" about__myself flex ">
        <img src={Image} alt="My Image" className="img" />

        <p>
          <span>Web Designer</span> and <span>Web Developer</span>
        </p>
      </div>
    </section>
  );
}

export default About;
