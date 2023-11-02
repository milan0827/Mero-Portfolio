import { AiFillHtml5, AiOutlineConsoleSql, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoNodejs,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import Image from "../../Assets/me.png";

import "./About.css";

function About() {
  return (
    <section className="section about">
      <h3 className="heading__tertiary">Skills</h3>

      <div className=" about__myself flex ">
        <img src={Image} alt="My Image" className="img" />

        <div className="skill flex">
          <h2 className="heading__secondary">What am I good at:</h2>
          <p>Technology I use:</p>
          <ul className="flex skill__icons">
            <li className="icons ">
              <AiFillHtml5 className="icons__el icons__el-1" />
            </li>
            <li className="icons">
              <BiLogoCss3 className="icons__el icons__el-2" />
            </li>
            <li className="icons">
              <BiLogoJavascript className="icons__el icons__el-3" />
            </li>
            <li className="icons">
              <BiLogoReact className="icons__el icons__el-4" />
            </li>
            <li className="icons">
              <BiLogoNodejs className="icons__el icons__el-5" />
            </li>
            <li className="icons">
              <BiLogoTypescript className="icons__el icons__el-6" />
            </li>
            <li className="icons">
              <BiLogoMongodb className="icons__el icons__el-7" />
            </li>
            <li className="icons">
              <AiOutlineConsoleSql className="icons__el icons__el-8" />
            </li>
          </ul>
          <br />
          <p>Tools I use:</p>
          <ul className="flex skill__icons">
            <li className="icons">
              <BsGit className="icons__el icons__el-9" />
            </li>
            <li className="icons">
              <AiFillGithub className="icons__el icons__el-10" />
            </li>
            <li className="icons">
              <BiLogoVisualStudio className="icons__el icons__el-11" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
