import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid.js';
import { ContextProvider } from './Context/Context.js';
function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Header/>
        <ProductGrid/>
        <Footer/>
      </div>
    </ContextProvider>

  );
}

export default App;
