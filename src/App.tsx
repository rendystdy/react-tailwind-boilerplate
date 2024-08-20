import "./App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";

import Provider from '@/lib/useGlobalContext';

function App() {
  return (
    <Provider>
      <Header />
      <Hero />
      <Banner />
      <Menu />
    </Provider>
  );
}

export default App;
