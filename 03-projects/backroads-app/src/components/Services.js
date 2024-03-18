import { services } from "../data";
import Title from "./Index/Title";
import Service from "./Index/Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="services" subTitle="our" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};
export default Services;
