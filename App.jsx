function App() {
  return (
    <>
      <header className="hero">
        <div className="overlay">
          <h1>NVStudio</h1>
          <p>Luxury Wedding Films • Reels Editing • Pre Wedding Shoots</p>

          <div className="hero-buttons">
            <a href="tel:9876543210" className="btn gold">Call Now</a>
            <a href="https://wa.me/919876543210" className="btn dark">WhatsApp</a>
          </div>
        </div>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          We create cinematic wedding memories, emotional storytelling films,
          premium reels and unforgettable pre wedding shoots.
        </p>
      </section>

      <section className="portfolio">
        <h2>Our Portfolio</h2>

        <div className="grid">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" />
          <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800" />
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" />
          <img src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800" />
        </div>
      </section>

      <section className="services">
        <h2>Services</h2>

        <div className="cards">
          <div className="card">Wedding Films</div>
          <div className="card">Pre Wedding Shoots</div>
          <div className="card">Instagram Reels Editing</div>
          <div className="card">Drone Coverage</div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>📞 9310771200</p>
        <p>📷 Instagram: @thenvproduction</p>
        <p>📍 Lajpat Nagar , Sahibabad , Ghaziabad</p>

        <a href="https://wa.me/919876543210" className="btn gold">
          Book Now
        </a>
      </section>

      <footer>
        © 2026 NVStudio. All Rights Reserved.
      </footer>
    </>
  )
}

export default App
```
