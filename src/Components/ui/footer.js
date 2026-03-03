// src/Components/ui/footer.js
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <h3 className="footer-logo">LUXETIME<span>.</span></h3>
          <p className="brand-story">
            Experience the pinnacle of horology. We curate the world’s most 
            prestigious timepieces for the modern collector.
          </p>
          <div className="social-icons">
            <span>FB</span> <span>IG</span> <span>TW</span>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-col links-col">
          <h4>CLIENT SERVICES</h4>
          <ul>
            {/* Pinalitan ang # ng #! para hindi mag-error sa Vercel build */}
            <li><a href="#!">Contact Us</a></li>
            <li><a href="#!">Track Your Order</a></li>
            <li><a href="#!">Shipping & Returns</a></li>
            <li><a href="#!">Authenticity Guarantee</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="footer-col newsletter-col">
          <h4>THE INSIDER</h4>
          <p>Subscribe to receive early access to new collections and exclusive events.</p>
          <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" />
            <button type="submit">JOIN</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 LUXETIME PHILIPPINES. ALL RIGHTS RESERVED.</p>
        <div className="footer-legal">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}