const getSum = () => {
  // Select all price cells (dynamically, so it works if values change)
  const prices = document.querySelectorAll('.price');
  let sum = 0;
  for (let price of prices) {
    sum += Number(price.innerHTML);
  }

  // Get the table
  const table = document.querySelector('table');

  // Remove existing total row if it exists
  const existingTotal = document.getElementById('totalRow');
  if (existingTotal) {
    existingTotal.remove();
  }

  // Create new row for total
  const newRow = document.createElement('tr');
  newRow.id = 'totalRow';

  // Create left cell for label
  const totalLabel = document.createElement('td');
  totalLabel.innerHTML = 'Total';

  // Create right cell for sum
  const totalValue = document.createElement('td');
  totalValue.innerHTML = sum;

  // Append cells to row, then row to table
  newRow.appendChild(totalLabel);
  newRow.appendChild(totalValue);
  table.appendChild(newRow);
};
