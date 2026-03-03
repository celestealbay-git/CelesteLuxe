import Navbar from './Components/navbar_section';
import Hero from './Components/hero';
import CollectionGrid from './Components/CollectionGrid';
import CardList from './Components/cardlist';
import DealOfTheWeek from './Components/deal_of_the_week';
import Footer from '../../../Components/ui/footer';

export default function HomePage() {
  return (
    <main style={{background: '#fff', color: '#1a1a1a'}}>
      <Navbar />
      <Hero />
      <CollectionGrid />
      <CardList />
      <DealOfTheWeek />
      
      {/* Brand Partners Section based on wireframe bottom */}
      <div className="partners" style={{padding: '60px 0', borderTop: '1px solid #eee', textAlign: 'center', opacity: '0.4', letterSpacing: '8px', fontSize: '0.8rem'}}>
         ROLEX — OMEGA — PATEK PHILIPPE — CARTIER
      </div>

      <Footer />
    </main>
  );
}