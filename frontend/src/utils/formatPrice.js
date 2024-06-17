const formattedPrice = (toFormat) => {
  return (toFormat / 100).toFixed(2);
};

export default formattedPrice;
