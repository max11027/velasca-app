const euroFormatter = (number) => {
  number = typeof number === "number" && !isNaN(number) ? number : 0;
  const euro = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(number);
  return euro;
};

const commonTools = {
  euroFormatter,
};

export default commonTools;
