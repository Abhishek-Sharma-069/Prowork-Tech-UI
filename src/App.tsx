import { Hero, Services, Demonstration, Testimonials, FAQ, Footer } from './components/sections';

function App() {
  return (
    <div className="max-w-screen min-h-screen bg-white">
      <Hero />
      <Services />
      <Demonstration />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
