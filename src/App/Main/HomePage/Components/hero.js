// src/App/Main/HomePage/Components/hero.js
export default function Hero() {
  return (
    <section className="hero-luxury">
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-reveal">
            <span className="hero-sub">— ESTABLISHED 2026</span>
            <h1 className="hero-title">
              The Ultimate <br /> 
              <span className="gold-text">Mark of Distinction</span>
            </h1>
            <p className="hero-description">
              Master the art of timekeeping with our exclusive collection of 
              Swiss-engineered timepieces designed for the modern pioneer.
            </p>
            <div className="hero-btns">
              <button className="btn-gold">EXPLORE COLLECTION</button>
              <button className="btn-glass">THE HERITAGE</button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-luxury {
          height: 100vh;
          /* Background: Ginamit natin ang Dark Luxury Watch image */
          background: url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600') center/cover no-repeat;
          position: relative;
          background-attachment: fixed; /* Parallax effect */
        }

        .hero-overlay {
          height: 100%;
          width: 100%;
          /* Vignette effect para magmukhang cinematic */
          background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .hero-content {
          max-width: 900px;
          padding: 0 20px;
          z-index: 2;
        }

        .hero-reveal {
          animation: fadeInUp 1.5s ease-out;
        }

        .hero-sub {
          display: block;
          letter-spacing: 7px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 25px;
          color: #c5a059;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 5.5rem);
          font-family: 'Playfair Display', serif;
          margin-bottom: 30px;
          line-height: 1.1;
          font-weight: 400;
          text-transform: uppercase;
        }

        .gold-text {
          color: #c5a059;
          font-style: italic;
          text-transform: none;
        }

        .hero-description {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          margin-bottom: 45px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
          font-weight: 300;
          letter-spacing: 1px;
          opacity: 0.85;
        }

        .hero-btns {
          display: flex;
          gap: 25px;
          justify-content: center;
        }

        button {
          padding: 20px 45px;
          border-radius: 0;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 3px;
          transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
        }

        .btn-gold {
          background: #c5a059;
          border: none;
          color: white;
          box-shadow: 0 10px 20px rgba(197, 160, 89, 0.2);
        }

        .btn-gold:hover {
          background: #fff;
          color: #111;
          transform: translateY(-5px);
        }

        .btn-glass {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: white;
          backdrop-filter: blur(5px);
        }

        .btn-glass:hover {
          background: white;
          color: #111;
          border-color: white;
          transform: translateY(-5px);
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Fixes */
        @media (max-width: 768px) {
          .hero-btns {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
          button {
            width: 100%;
            max-width: 300px;
          }
          .hero-title { font-size: 2.8rem; }
        }
      `}</style>
    </section>
  );
}