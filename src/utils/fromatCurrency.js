function formatCurrency(value) {
  new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    value
  );
}

export default formatCurrency;
