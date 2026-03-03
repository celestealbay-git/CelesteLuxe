import React, { useState, useEffect } from 'react';

export default function DealOfTheWeek() {
  const [timeLeft, setTimeLeft] = useState({ hrs: 12, mins: 45, secs: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hrs, mins, secs } = prev;
        if (secs > 0) secs--;
        else {
          secs = 59;
          if (mins > 0) mins--;
          else {
            mins = 59;
            if (hrs > 0) hrs--;
          }
        }
        return { hrs, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <section className="deal-glass-section">
      {/* Dynamic Background para terno sa CardList */}
      <div className="luxury-bg"></div>
      <div className="luxury-overlay"></div>

      <div className="container">
        <div className="deal-wrapper glass-effect">
          <div className="floating-badge">20% OFF</div>
          
          {/* Left Side: Text Content */}
          <div className="deal-text-side">
            <span className="deal-tag">— SPECIAL SPOTLIGHT</span>
            <h2 className="deal-title">
              Seiko Presage <br /> 
              <span className="italic-accent">Cocktail Time</span>
            </h2>
            <p className="deal-desc">
              A timeless masterpiece inspired by the glamour of cocktail lounges. 
              Swiss-level precision meets Japanese artistry.
            </p>

            <div className="deal-timer">
              <div className="t-item">
                <span className="t-num">{formatNumber(timeLeft.hrs)}</span>
                <span className="t-unit">HRS</span>
              </div>
              <span className="t-sep">:</span>
              <div className="t-item">
                <span className="t-num">{formatNumber(timeLeft.mins)}</span>
                <span className="t-unit">MINS</span>
              </div>
              <span className="t-sep">:</span>
              <div className="t-item">
                <span className="t-num">{formatNumber(timeLeft.secs)}</span>
                <span className="t-unit">SECS</span>
              </div>
            </div>

            <button className="deal-action-btn">ACQUIRE NOW</button>
          </div>

          {/* Right Side: Image Side */}
          <div className="deal-image-side">
            <div className="image-frame">
              <img 
                src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=600" 
                alt="Seiko Presage" 
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .deal-glass-section {
          position: relative;
          padding: 100px 0;
          min-height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        /* Terno sa background ng CardList */
        .luxury-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1509048191080-d2984bad6ad5?q=80&w=1600');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -2;
        }

        .luxury-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%);
          z-index: -1;
        }

        .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; width: 100%; }

        /* GLASSMORPHISM STYLE - Terno sa CardList */
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px; /* Mas rounded para sa spotlight */
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .deal-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          padding: 60px;
          position: relative;
        }

        .deal-tag {
          font-size: 10px;
          letter-spacing: 5px;
          color: #c5a059;
          font-weight: 700;
          margin-bottom: 15px;
          display: block;
        }

        .deal-title {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 20px;
        }

        .italic-accent {
          font-style: italic;
          color: #c5a059;
        }

        .deal-desc {
          font-size: 14px;
          color: #ccc;
          line-height: 1.6;
          margin-bottom: 35px;
          max-width: 400px;
        }

        /* Timer Styling */
        .deal-timer {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .t-num {
          font-size: 32px;
          font-family: 'Playfair Display', serif;
          color: #c5a059;
          font-weight: bold;
        }

        .t-unit {
          font-size: 9px;
          letter-spacing: 2px;
          color: #999;
          display: block;
        }

        .t-sep { color: rgba(255,255,255,0.2); font-size: 24px; margin-bottom: 15px; }

        .deal-action-btn {
          background: #c5a059;
          color: #000;
          border: none;
          padding: 18px 45px;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 800;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .deal-action-btn:hover {
          background: #fff;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(197,160,89,0.3);
        }

        /* Image Frame - Rounded Gaya ng Cards */
        .image-frame {
          width: 100%;
          max-width: 320px;
          aspect-ratio: 1 / 1.2;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.8s ease;
        }

        .deal-wrapper:hover .image-frame img { transform: scale(1.1); }

        .floating-badge {
          position: absolute;
          top: -20px;
          right: 40px;
          background: #c5a059;
          color: #000;
          padding: 20px 15px;
          font-size: 12px;
          font-weight: 900;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }

        @media (max-width: 850px) {
          .deal-wrapper { grid-template-columns: 1fr; text-align: center; padding: 40px; }
          .deal-image-side { order: 1; display: flex; justify-content: center; margin-bottom: 30px; }
          .deal-text-side { order: 2; }
          .deal-timer { justify-content: center; }
          .deal-desc { margin: 0 auto 35px; }
        }
      `}</style>
    </section>
  );
}