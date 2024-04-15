import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ItemsGrid from './components/ItemsGrid';

function App() {
  return (
    <div className="App">
      <Header/>
      <ItemsGrid/>
      <Footer/>
    </div>
  );
}

export default App;
