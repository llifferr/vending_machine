import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/slices/products/productSlice';
import Product from '../Product/Product';
import './ProductList.css';

const ProductList = () => {
  const products = useSelector(selectProducts);
  console.log(products);
  return (
    <div>
      <h2 className="product-list-title">Product List</h2>
      {products.length === 0 ? (
        <p>No Products Available</p>
      ) : (
        <div className="product-list">
          {products.map((product, index) => {
            return (
              <div className="product-wrapper" key={product.id}>
                <Product product={product} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
