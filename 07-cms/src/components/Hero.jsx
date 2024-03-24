import heroImg from '../assets/freelancer.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni
            officiis dolorem nemo asperiores, ipsam fugiat impedit natus
            assumenda recusandae, iste repellat obcaecati sequi perspiciatis
            dignissimos excepturi id. Non, facilis?
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
