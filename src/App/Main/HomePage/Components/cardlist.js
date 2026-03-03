export default function CardList() {
  const watches = [
    { id: 1, name: "Submariner Date", brand: "Rolex", price: "750,000", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=400" },
    { id: 2, name: "Daytona Cosmograph", brand: "Rolex", price: "1,850,000", image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=400" },
    { id: 3, name: "Royal Oak Selfwinding", brand: "Audemars Piguet", price: "2,850,000", image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=400" },
    { id: 4, name: "Nautilus Chronograph", brand: "Patek Philippe", price: "6,400,000", image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=400" },
    { id: 5, name: "Carrera Chronograph", brand: "Tag Heuer", price: "380,000", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=400" },
    { id: 6, name: "Luminor Marina", brand: "Panerai", price: "410,000", image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=400" },
    { id: 7, name: "Santos de Cartier", brand: "Cartier", price: "445,000", image: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=400" },
    { id: 8, name: "Black Bay GMT", brand: "Tudor", price: "245,000", image: "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=400" }
  ];

  return (
    <section className="watch-section">
      <div className="luxury-bg"></div>
      <div className="luxury-overlay"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-tag">— THE GLASS COLLECTION</span>
          <h2 className="section-title">Elegance Redefined</h2>
          <div className="title-underline"></div>
        </div>

        <div className="watch-grid">
          {watches.map((w, index) => (
            <div 
              key={w.id} 
              className="glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="badge-new">New</div>
              <div className="image-box">
                 <img src={w.image} alt={w.name} />
              </div>
              <div className="item-info">
                <span className="brand">{w.brand}</span>
                <h3 className="name">{w.name}</h3>
                <p className="price">₱{w.price}</p>
              </div>
              <button className="add-btn">ADD TO CART</button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .watch-section { 
          position: relative;
          padding: 100px 0; 
          min-height: 100vh;
          overflow: hidden;
        }

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
          background: radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%);
          z-index: -1;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .section-header { text-align: center; margin-bottom: 60px; color: #fff; }
        .section-tag { font-size: 0.7rem; letter-spacing: 5px; color: #c5a059; font-weight: bold; }
        .section-title { font-family: 'Playfair Display', serif; font-size: 3rem; margin: 15px 0; }
        .title-underline { width: 50px; height: 2px; background: #c5a059; margin: 0 auto; }
        
        .watch-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        /* GLASSMORPHISM STYLE */
        .glass-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05); /* Very transparent white */
          backdrop-filter: blur(12px); /* Blurred background effect */
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px;
          text-align: center;
          border-radius: 20px;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          transition: all 0.3s ease;
        }

        .glass-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(197, 160, 89, 0.5);
          transform: translateY(-10px);
        }

        .badge-new {
          position: absolute;
          top: 15px; right: 15px;
          background: #c5a059;
          color: white;
          font-size: 8px;
          padding: 2px 8px;
          border-radius: 20px;
          font-weight: bold;
          text-transform: uppercase;
        }

        .image-box {
          width: 100%;
          aspect-ratio: 1 / 1;
          background: rgba(255, 255, 255, 0.03);
          margin-bottom: 15px;
          border-radius: 15px;
          overflow: hidden;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 15px;
          filter: drop-shadow(0 5px 15px rgba(0,0,0,0.3));
          transition: transform 0.5s ease;
        }

        .glass-card:hover img { transform: scale(1.1); }

        .brand { font-size: 10px; letter-spacing: 2px; color: #ccc; text-transform: uppercase; }
        .name { font-size: 1.1rem; font-weight: 600; margin: 10px 0; color: #fff; min-height: 50px; }
        .price { color: #c5a059; font-weight: 700; font-size: 1.2rem; margin-bottom: 20px; }

        .add-btn {
          width: 100%;
          padding: 14px;
          background: #c5a059;
          color: #000;
          border: none;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: 0.3s;
        }

        .add-btn:hover { 
          background: #fff;
          box-shadow: 0 0 20px rgba(197, 160, 89, 0.4);
        }

        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 1100px) { .watch-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .watch-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}