import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';

function App() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-accent/20 selection:text-primary">
      {/* The sticky navigation bar */}
      <Navbar />
      
      {/* The main landing page content */}
      <Hero />
    </main>
  );
}

export default App;