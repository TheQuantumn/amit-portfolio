import "./Hero.css";
import LineWaves from "../components/LineWaves";
import BlurText from "../components/BlurText";

function Hero() {
  return (
    <section className="hero">
      <LineWaves
        speed={0.3}
        innerLineCount={32}
        outerLineCount={36}
        warpIntensity={1.0}
        rotation={-45}
        edgeFadeWidth={0.0}
        colorCycleSpeed={1.0}
        brightness={0.15}
        color1="#00F0FF"
        color2="#8A2BE2"
        color3="#00F0FF"
        enableMouseInteraction={true}
        mouseInfluence={2.0}
      />
      <div className="hero-content">
        <BlurText
          text="[ VFX SHOWREEL 2024 ]"
          delay={120}
          animateBy="words"
          direction="top"
          className="hero-tagline"
        />
        <h1>Amit Gupta</h1>
        <p className="hero-title">Senior Compositor</p>
        <BlurText
          text="VFX Artist | ROTO • PREP • STEREO"
          delay={180}
          animateBy="words"
          direction="top"
          className="hero-subtitle"
        />
        <div className="hero-meta">
          <span className="hero-chip">[ Nuke ]</span>
          <span className="hero-chip">[ Mocha Pro ]</span>
          <span className="hero-chip">[ Silhouette ]</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;