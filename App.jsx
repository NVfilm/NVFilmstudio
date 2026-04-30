```jsx
function App() {
  return (
    <>
      <header className="hero">

        <div className="video-bg">
          <video autoPlay muted loop playsInline>
            <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="overlay">

          <nav className="navbar">
            <h3>NVStudio</h3>

            <div className="menu">
              <a href="#about">About</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>

          <div className="hero-content">
            <h1>Luxury Wedding Films</h1>
            <p>Cinematic Memories • Premium Shoots • Reels Editing</p>

            <div className="hero-buttons">
              <a href="tel:9310771200" className="btn gold">Call Now</a>
              <a href="https://wa.me/919310771200" className="btn dark">WhatsApp</a>
            </div>
          </div>

        </div>
      </header>

      <section id="about" className="fade-up">
        <h2>About Us</h2>
        <p>
          NVStudio creates premium cinematic wedding stories with emotional
          moments, luxury visuals and unforgettable memories.
        </p>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>

        <div className="slider">
          <div className="slide-track">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" />
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800" />
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800" />
            <img src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800" />
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" />
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800" />
          </div>
        </div>
      </section>

      <section id="services">
        <h2>Services</h2>

        <div className="cards">
          <div className="card fade-up">Wedding Films</div>
          <div className="card fade-up">Pre Wedding Shoot</div>
          <div className="card fade-up">Drone Coverage</div>
          <div className="card fade-up">Reels Editing</div>
          <div className="card fade-up">Album Design</div>
          <div className="card fade-up">Traditional Shoot</div>
        </div>
      </section>

      <section id="contact" className="fade-up">
        <h2>Contact</h2>
        <p>📞 9310771200</p>
        <p>📍 Lajpat Nagar, Sahibabad, Ghaziabad</p>
        <p>📷 @thenvproduction</p>
      </section>

      <footer>
        <div className="footer-about">
          <h3>NVStudio</h3>
          <p>
            Turning your moments into cinematic forever memories.
          </p>
        </div>

        <p>© 2026 NVStudio. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default App
```
