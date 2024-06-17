import ProductForm from './components/ProductForm/ProductForm';
import ProductList from './components/ProductList/ProductList';
import Error from './components/Error/Error';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vending Machine</h1>
      </header>
      <main>
        <div className="vending-machine-wrapper">
          <div className="vending-machine-product-list">
            <ProductList />
          </div>
          <div className="vending-machine-form">
            <ProductForm />
          </div>
          <div className="vending-machine-footer">
            {/* TODO: Mocked */}
            <Footer state={'ready'} />
          </div>
        </div>
      </main>
      <Error />
    </div>
  );
}

export default App;
