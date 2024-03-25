import heroImg from "../assets/freelancer.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Portfolio</h1>
          <p>
            Discover an immersive journey through my portfolio on our
            React-driven website, intricately crafted and powered by Contentful
            CMS. Engage with ease as clients explore my showcased projects,
            elegantly listed below. With seamless navigation and captivating
            design, your online experience is elevated to new heights.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="portfolio" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
