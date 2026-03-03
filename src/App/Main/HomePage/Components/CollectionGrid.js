export default function CollectionGrid() {
  return (
    <section className="homepage-collections">
      {/* Main Feature with Glass Info Box */}
      <div className="main-feature" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=1200)'}}>
        <div className="feature-overlay"></div>
        <div className="feature-info glass-box">
          <small>LIMITED EDITION</small>
          <h2>The Obsidian <br/> <span className="gold-text">Collection</span></h2>
          <p>Masterpieces of precision and darkness.</p>
          <button className="luxe-button">EXPLORE SERIES</button>
        </div>
      </div>

      <div className="sub-features">
        {/* Women's Collection Box */}
        <div className="side-box" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523170335258-f5ed11844a1b?w=800)'}}>
          <div className="box-overlay"></div>
          <div className="box-content">
            <h3>Timeless Women</h3>
            <a href="#women" className="discover-link">Discover More</a>
          </div>
        </div>
        
        {/* Men's Collection Box */}
        <div className="side-box" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800)'}}>
          <div className="box-overlay"></div>
          <div className="box-content">
            <h3>Gifts for Him</h3>
            <a href="#men" className="discover-link">Discover More</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .homepage-collections { 
          display: grid; 
          grid-template-columns: 1.5fr 1fr; 
          height: 90vh; 
          gap: 25px; 
          padding: 40px 5%; 
          background: transparent; /* Para makita yung main background image sa likod */
        }

        /* Main Feature Styling */
        .main-feature { 
          position: relative; 
          background-size: cover; 
          background-position: center; 
          display: flex; 
          align-items: flex-end; /* Pinababa natin ang info para mas modern */
          padding: 60px; 
          border-radius: 30px; 
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .feature-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        }

        /* Glassmorphism Box for Main Info */
        .glass-box {
          position: relative;
          z-index: 2;
          padding: 40px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          max-width: 500px;
        }

        .feature-info small { 
          letter-spacing: 5px; 
          font-size: 10px; 
          color: #c5a059; 
          font-weight: 700;
          margin-bottom: 15px; 
          display: block; 
        }

        .feature-info h2 { 
          font-family: 'Playfair Display', serif;
          font-size: clamp(30px, 4vw, 55px); 
          line-height: 1.1; 
          margin-bottom: 20px; 
          color: #fff;
        }

        .gold-text { color: #c5a059; font-style: italic; }

        .feature-info p { 
          color: #ccc;
          font-weight: 300; 
          margin-bottom: 30px; 
          letter-spacing: 1px; 
        }

        /* Sub Features Styling */
        .sub-features { display: grid; grid-template-rows: 1fr 1fr; gap: 25px; }

        .side-box { 
          position: relative; 
          background-size: cover; 
          background-position: center; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          text-align: center; 
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
          transition: transform 0.5s ease;
        }

        .side-box:hover { transform: translateY(-5px); }

        .box-overlay { 
          position: absolute; 
          inset: 0; 
          background: rgba(0,0,0,0.4); 
          transition: 0.5s; 
        }

        .side-box:hover .box-overlay { background: rgba(0,0,0,0.6); }

        .box-content { position: relative; z-index: 1; }
        .box-content h3 { 
          font-family: 'Playfair Display', serif;
          font-size: 28px; 
          color: #fff;
          margin-bottom: 15px; 
        }

        .discover-link { 
          color: #c5a059; 
          font-size: 10px; 
          letter-spacing: 2px; 
          text-transform: uppercase; 
          font-weight: 700; 
          text-decoration: none; 
          border-bottom: 1px solid #c5a059; 
          padding-bottom: 5px; 
          transition: 0.3s;
        }

        .discover-link:hover { color: #fff; border-color: #fff; }

        .luxe-button { 
          background: #c5a059; 
          color: #000; 
          border: none; 
          padding: 15px 40px; 
          border-radius: 10px;
          font-size: 11px; 
          letter-spacing: 3px; 
          font-weight: 800; 
          cursor: pointer;
          transition: 0.3s;
        }

        .luxe-button:hover { 
          background: #fff; 
          transform: scale(1.05);
        }

        @media (max-width: 1024px) { 
          .homepage-collections { grid-template-columns: 1fr; height: auto; padding: 20px; }
          .main-feature { height: 500px; padding: 30px; }
          .side-box { height: 350px; }
        }
      `}</style>
    </section>
  );
}