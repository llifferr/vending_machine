import formattedPrice from '../../utils/formatPrice';

const Price = ({ price }) => {
  const priceFormatted = formattedPrice(price);

  return (
    <div className="price">
      <span className="price-name">{priceFormatted}$</span>
    </div>
  );
};

export default Price;
