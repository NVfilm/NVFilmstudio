function App() {
  return (
    <>
      <header className="hero">
        <div className="overlay">

          <nav className="navbar">
            <h3>NVStudio</h3>

            <div className="menu">
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#services">Services</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-content">
            <h1>NVStudio</h1>
            <p>
              Luxury Wedding Films • Reels Editing • Pre Wedding Shoots
            </p>

            <div className="hero-buttons">
              <a href="tel:9310771200" className="btn gold">Call Now</a>

              <a
                href="https://wa.me/919310771200"
                className="btn dark"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <h2>About Us</h2>
        <p>
          We create emotional wedding stories with cinematic visuals,
          premium edits and unforgettable memories.
        </p>
      </section>

      <section id="portfolio">
        <h2>Our Portfolio</h2>

        <div className="grid">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" />
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800" />
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" />
          <img src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800" />
          <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800" />
          <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=800" />
        </div>
      </section>

      <section id="services">
        <h2>Services</h2>

        <div className="cards">
          <div className="card">Wedding Films</div>
          <div className="card">Pre Wedding Shoots</div>
          <div className="card">Reels Editing</div>
          <div className="card">Drone Coverage</div>
          <div className="card">Teaser Videos</div>
          <div className="card">Album Design</div>
        </div>
      </section>

      <section id="reviews">
        <h2>Client Reviews</h2>

        <div className="cards">
          <div className="card">
            “Best wedding team ever. Amazing cinematic work!”
            <br /><br />⭐⭐⭐⭐⭐
          </div>

          <div className="card">
            “Reels editing top class. Highly recommended.”
            <br /><br />⭐⭐⭐⭐⭐
          </div>

          <div className="card">
            “Professional team and premium quality.”
            <br /><br />⭐⭐⭐⭐⭐
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Us</h2>

        <p>📞 9310771200</p>
        <p>📷 Instagram: @thenvproduction</p>
        <p>📍 Lajpat Nagar, Sahibabad, Ghaziabad</p>

        <div className="hero-buttons">
          <a href="tel:9310771200" className="btn gold">Call Now</a>

          <a
            href="https://wa.me/919310771200"
            className="btn dark"
          >
            WhatsApp
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/919310771200"
        className="floating"
      >
        WhatsApp
      </a>

      <footer>
        © 2026 NVStudio. All Rights Reserved.
      </footer>
    </>
  )
}

export default App
