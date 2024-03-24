import aboutImg from "../../assets/about.jpeg";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Discover a New Perspective</h3>
          <p>
            Uncover the untold stories of remarkable journeys and extraordinary
            experiences that await you with our innovative application.
          </p>
          <p>
            Immerse yourself in a world of adventure, where every destination
            becomes a doorway to discovery, every moment a chance to redefine
            what's possible.
          </p>
          <a href="#about" className="btn">
            Learn More
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
