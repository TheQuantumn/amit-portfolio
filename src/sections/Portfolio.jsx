import "./Portfolio.css";

function Portfolio() {
  const categories = ["Feature", "Commercial", "Domestic"];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>

        {categories.map((cat) => (
          <div key={cat} className="category">
            <h3>{cat}</h3>

            <div className="grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="poster">
                  <div className="overlay">Project</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;