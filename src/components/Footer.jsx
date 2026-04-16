import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div>
          <p className="footer-eyebrow">Let’s work together</p>
          <h2>Bring the next film, sequence, or studio-grade asset to life.</h2>
          <p>
            If your project needs disciplined VFX prep, stereo support, or a streamlined handoff to finish, let’s talk.
          </p>
        </div>
        <a className="footer-action" href="mailto:hello@amitgupta.com">
          Say hello
        </a>
      </div>

      <div className="footer-grid">
        <div className="footer-column">
          <h3>Navigation</h3>
          <a href="/">Home</a>
          <a href="/portfolio">Work</a>
          <a href="#services">Services</a>
          <a href="#about">Studio</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <a href="#services">ROTO</a>
          <a href="#services">PREP</a>
          <a href="#services">STEREO</a>
        </div>

        <div className="footer-column">
          <h3>Social</h3>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
            YouTube
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <div className="footer-column">
          <h3>Legal</h3>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>
          <p className="footer-contact-copy">
            Ready to elevate your VFX pipeline? Let's discuss your next project.
          </p>
          <p className="footer-contact-line">
            Available for remote collaboration worldwide.
          </p>
          <a className="footer-email" href="mailto:hello@amitgupta.com">
            hello@amitgupta.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Amit Gupta Studio • All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
