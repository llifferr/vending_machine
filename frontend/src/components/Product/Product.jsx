import './Product.css';
import Price from '../Price/Price';

const Product = ({ product }) => {
  return (
    <div className="product">
      <p className="product-name">{product.name}</p>

      <div className="product-footer">
        <span className="product-id">#{product.id}</span>
        <Price price={product.price} />
        <span className="product-quantity-left">
          {product.quantity} pcs. left
        </span>
      </div>
    </div>
  );
};

export default Product;
