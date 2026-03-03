import React from 'react';
import './App.css';

// Tandaan: Huwag isama ang 'src' sa path dahil nandoon na tayo.
// Siguraduhin na 'HomePage' ang spelling at hindi 'Homepage'
import Navbar from './App/Main/HomePage/Components/navbar_section';
import Hero from './App/Main/HomePage/Components/hero';
import CollectionGrid from './App/Main/HomePage/Components/CollectionGrid';
import CardList from './App/Main/HomePage/Components/cardlist';
import DealOfTheWeek from './App/Main/HomePage/Components/deal_of_the_week';
import Footer from './Components/ui/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CollectionGrid />
      <CardList />
      <DealOfTheWeek />
      <Footer />
    </div>
  );
}

export default App;