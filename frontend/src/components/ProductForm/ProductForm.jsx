import { useDispatch, useSelector } from 'react-redux';
import './ProductForm.css';

import {
  fetchProduct,
  removeProductPiece,
  selectProducts,
  changeIsSaleReady,
} from '../../redux/slices/products/productSlice';
import Price from '../Price/Price';
import { useEffect, useState } from 'react';
import { setError } from '../../redux/slices/errors/errorSlice';
import formattedPrice from '../../utils/formatPrice';

const ProductForm = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const [currentValue, setCurrentValue] = useState(0);
  const [changeValue, setChangeValue] = useState(0);
  const [selectedProductId, setSelectedProductId] = useState(0);
  const handleChangeCurrentValue = (amount) => {
    const acceptableСurrency = [1, 2, 5, 10, 25, 50, 100, 200];
    if (acceptableСurrency.includes(amount)) {
      setCurrentValue((currentValue) => currentValue + amount);
    } else {
      dispatch(setError('You have entered an unsupported bill or coin'));
      setChangeValue((changeValue) => changeValue + amount);
    }
  };
  const handleReset = () => {
    setChangeValue((changeValue) => changeValue + currentValue);
    setCurrentValue(0);
  };
  const handleSubmitProduct = (event) => {
    event.preventDefault();
    const productIndex = products.findIndex((product) => {
      return product.id == selectedProductId;
    });
    if (productIndex === -1) {
      dispatch(setError('There is no products with this number'));
    } else if (products[productIndex].quantity === 0) {
      dispatch(
        setError(
          'Selected product is out of stock, select another product or click "Reset" to receive your money back'
        )
      );
    } else if (products[productIndex].price > currentValue) {
      const neededValue = products[productIndex].price - currentValue;
      const formattedNeededValue = formattedPrice(neededValue);
      dispatch(
        setError(
          `Not enough money, you should to enter ${formattedNeededValue}$ more`
        )
      );
    } else {
      dispatch(removeProductPiece(productIndex));
      dispatch(changeIsSaleReady(true));
      const change = currentValue - products[productIndex].price;
      setChangeValue((changeValue) => changeValue + change);
      setCurrentValue(0);
    }
  };
  const handleReceiveChange = () => {
    setChangeValue(0);
  };
  return (
    <div>
      <div className="product-form-coins">
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(1)}
        >
          1¢
        </div>
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(2)}
        >
          2¢
        </div>
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(5)}
        >
          5¢
        </div>
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(10)}
        >
          10¢
        </div>
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(25)}
        >
          25¢
        </div>
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(50)}
        >
          50¢
        </div>
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(100)}
        >
          1$
        </div>
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(200)}
        >
          2$
        </div>
        <div
          className="product-form-coin"
          onClick={() => handleChangeCurrentValue(500)}
        >
          5$
        </div>
      </div>

      <div>
        <span className="product-form-current-value">
          You entered <Price price={currentValue} />
        </span>
      </div>

      <form className="product-form-form" onSubmit={handleSubmitProduct}>
        <span className="product-form-input-label">Insert Product Number</span>
        <input
          className="product-form-input-label-input-field"
          type="number"
          id="number"
          onChange={(e) => setSelectedProductId(e.target.value)}
        ></input>
        <div className="product-form-ok-wrapper">
          <button className="product-form-ok" type="submit">
            OK
          </button>
        </div>
      </form>

      <div className="product-form-reset-wrapper">
        <span className="product-form-reset" onClick={handleReset}>
          Reset
        </span>
      </div>

      <div>
        <span
          className="product-form-current-value product-form-change"
          onClick={handleReceiveChange}
        >
          Your change <Price price={changeValue} />
        </span>
      </div>
    </div>
  );
};

export default ProductForm;
