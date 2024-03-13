import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Call me for more" title="Contact Me" />

     <div className="text-center">
       <div className="mb-5 text-[20px]"> You Can Contact me via email </div>

        <strong className="text-[18px] md:text-[25px] font-bold uppercase text-[#a25bfe] ">mnasfa.houssam@gmail.com</strong>
        <br />

       <div className="my-5 text-[20px]"> or via Whatssap</div>

        <a href="https://wa.me/623581831" className="text-[18px] md:text-[25px] font-bold uppercase text-[#a25bfe] ">+212 623581831</a>
     </div>

      
    </div>
  </Section>
);

export default Roadmap;
