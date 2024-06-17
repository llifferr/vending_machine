import { useDispatch, useSelector } from 'react-redux';
import './Footer.css';
import {
  selectIsSaleReady,
  changeIsSaleReady,
} from '../../redux/slices/products/productSlice';

const Footer = () => {
  const isReady = useSelector(selectIsSaleReady);
  const dispatch = useDispatch();
  const handleChangeReady = () => {
    dispatch(changeIsSaleReady(false));
  };

  return (
    <div className="footer">
      <div className="footer-lid" onClick={handleChangeReady}>
        {isReady ? (
          <span className="footer-text">Receive your purchases.</span>
        ) : (
          <span className="footer-text">Nothing to receive.</span>
        )}
      </div>
    </div>
  );
};

export default Footer;
