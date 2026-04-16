import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <p className="eyebrow">About</p>
        <h2>Crafting precise, cinematic visual effects support.</h2>
        <p>
          Amit Gupta partners with high-end VFX teams to deliver clean, dependable asset preparation and stereo support for feature and commercial work.
          Every frame is treated as a compositional moment, with an emphasis on accuracy, efficiency, and seamless integration into the final plate.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <h3>Studio approach</h3>
            <p>
              Frame-by-frame roto and prep that preserves performance, depth, and feature-level fidelity. Work is built to slot into complex compositing pipelines with confidence.
            </p>
          </div>
          <div className="about-card">
            <h3>Pipeline-ready output</h3>
            <p>
              Clean shapes, tracked mattes, and stereo deliverables are handed over with clarity and consistency, so the next team can move fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
