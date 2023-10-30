import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="section hero">
      <div className="hero__text">
        <h2 className="heading__secondary">Mero portfolio</h2>
        <p className="">
          Hi, I am <span>Milan Rokaya</span>
        </p>
        <p>
          Web <span>Designer</span> &
        </p>
        <p>
          <span>Web</span> Developer
        </p>
      </div>
      <div className="button flex">
        <button className="btn btn__primary">Know about me</button>
        <button className="btn btn__secondary">Let's talk</button>
      </div>
    </section>
  );
}

export default HeroSection;
