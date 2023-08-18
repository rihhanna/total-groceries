// Good Luck 💪🏾
function calculateTotalPrice(groceries) {
    return groceries.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  const groceries = [
    { product: 'Milk', quantity: 1, price: 1.23 },
    { product: 'Eggs', quantity: 12, price: 0.98 },
    { product: 'Bread', quantity: 2, price: 2.45 },
  ];
  
  console.log(calculateTotalPrice(groceries)); // Output: 10.29
    