// src/Components/ui/card.js
export default function Card({ image, name, brand, price }) {
  return (
    <div className="watch-card">
      <div className="watch-badge">LIMITED</div>
      <div className="watch-image-container">
        <img src={image} alt={name} />
        <div className="watch-overlay">
          <button className="quick-view">QUICK VIEW</button>
        </div>
      </div>
      <div className="watch-info">
        <p className="watch-brand">{brand}</p>
        <h3 className="watch-name">{name}</h3>
        <p className="watch-price">₱{price}</p>
        <button className="watch-add-btn">ADD TO COLLECTION</button>
      </div>

      <style jsx>{`
        .watch-card {
          background: #fff;
          padding: 0;
          text-align: center;
          transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          border: 1px solid #f0f0f0;
        }
        .watch-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .watch-badge {
          position: absolute; top: 15px; left: 15px; z-index: 10;
          background: #111; color: #fff; font-size: 9px; padding: 4px 10px;
          letter-spacing: 2px; font-weight: 600;
        }
        .watch-image-container { position: relative; overflow: hidden; background: #f9f9f9; aspect-ratio: 1/1.2; display: flex; align-items: center; }
        .watch-image-container img { width: 100%; transition: 1s; }
        .watch-card:hover img { transform: scale(1.1); }
        .watch-overlay {
          position: absolute; inset: 0; background: rgba(0,0,0,0.05);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: 0.4s;
        }
        .watch-card:hover .watch-overlay { opacity: 1; }
        .quick-view { background: white; border: none; padding: 12px 25px; font-size: 10px; letter-spacing: 2px; font-weight: 600; cursor: pointer; }
        .watch-info { padding: 25px 15px; }
        .watch-brand { color: #888; font-size: 10px; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 8px; }
        .watch-name { font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 12px; font-weight: 400; }
        .watch-price { font-weight: 400; color: #111; font-size: 0.9rem; margin-bottom: 20px; }
        .watch-add-btn {
          width: 100%; background: transparent; color: #111; border: 1px solid #111;
          padding: 14px; cursor: pointer; text-transform: uppercase; font-size: 0.75rem;
          letter-spacing: 2px; font-weight: 600; transition: 0.4s;
        }
        .watch-add-btn:hover { background: #111; color: #fff; }
      `}</style>
    </div>
  );
}