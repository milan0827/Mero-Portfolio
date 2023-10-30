import work1 from "../../Assets/pack-the-bag.png";
import work2 from "../../Assets/to-do.png";
import work3 from "../../Assets/coffee-shop.png";

import "./Work.css";

const work = [
  {
    id: 1,
    name: "Pack-The-Bag",
    img: work1,
  },
  {
    id: 2,
    name: "To-Do",
    img: work2,
  },
  {
    id: 3,
    name: "Coffee Shop",
    img: work3,
  },
];

function Work() {
  return (
    <section className="work section">
      <h3 className="heading__tertiary">Work</h3>
      <ul className="work__list">
        {work.map((work) => (
          <WorkList work={work} key={work.id} />
        ))}
      </ul>
    </section>
  );
}

function WorkList({ work }) {
  return (
    <li className="work__item">
      <a href="#">
        <img src={work.img} alt={work.name} className="img" />
        <p>{work.name}</p>
        <div className="overlay"></div>
      </a>
    </li>
  );
}

export default Work;
