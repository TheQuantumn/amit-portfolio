import "./Companies.css";

function Companies() {
  const logos = [1, 2, 3, 4, 5, 6];

  return (
    <section className="companies">
      <div className="container">
        <h2>Worked With</h2>

        <div className="logo-grid">
          {logos.map((l) => (
            <div key={l} className="logo-box">Logo</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;