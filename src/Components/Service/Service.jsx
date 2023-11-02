import "./Service.css";

function Service() {
  return (
    <section className="service section">
      <h3 className="heading__tertiary">Service</h3>
      <div className="service__list">
        <div className="service__item service__item--1">
          <h4>Web Design</h4>
          <p>
            I do UI/UX for the webiste that helps website to get a unique look.
          </p>
        </div>

        <div className="service__item service__item--2">
          <h4>Frontend Development</h4>
          <p>
            I also develop website. I create high perfomance website with
            blazing fast speed.
          </p>
        </div>

        <div className="service__item service__item--3">
          <h4>Backend Development</h4>
          <p>
            I also develop website. I create high perfomance website with
            blazing fast speed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
