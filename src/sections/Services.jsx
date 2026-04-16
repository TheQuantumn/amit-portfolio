import "./Services.css";

function Services() {
  const services = [
    {
      title: "ROTO",
      description:
        "Precision roto shapes and silhouettes for plates of every scale — from subtle beauty shots to complex action sequences.",
      details:
        "Edge control is tuned for final comp, producing clean mattes with minimal touch-up and maximum pipeline reliability."
    },
    {
      title: "PREP",
      description:
        "Prepared plate elements with accurate alpha passes, cropping, and formatting optimized for compositors and finishing artists.",
      details:
        "Deliverables include tracked plates, undistorted mattes, and verified handoff notes so the next stage can start without friction."
    },
    {
      title: "STEREO",
      description:
        "Stereo cleanup and depth consistency across left/right views, built for seamless convergence and stereo compositing.",
      details:
        "The focus is on stability in motion, minimal flicker, and deliverables that survive even the strictest stereo QC."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <p className="eyebrow">Services</p>
        <h2>Focused support for complex VFX pipelines.</h2>
        <p className="service-intro">
          Every service is designed to remove uncertainty from your pipeline, from roto to prep to stereo. Clean, fast, and compositing-ready.
        </p>

        <div className="service-grid">
          {services.map((service) => (
            <div key={service.title} className="card">
              <span className="service-label">{service.title}</span>
              <p className="service-description">{service.description}</p>
              <p className="service-details">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
