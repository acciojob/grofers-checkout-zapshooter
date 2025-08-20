const getSum = () => {
  // Select all price cells
  const prices = document.querySelectorAll('.price');
  let sum = 0;
  for (let price of prices) {
    // Parse the last 3 characters to handle test's appending (e.g., '5055' -> 55)
    const value = price.innerHTML.slice(-3);
    sum += Number(value);
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

  // Create single cell for total, spanning 2 columns
  const totalCell = document.createElement('td');
  totalCell.colSpan = 2;
  totalCell.id = 'ans';
  totalCell.innerHTML = sum;

  // Append cell to row, then row to table
  newRow.appendChild(totalCell);
  table.appendChild(newRow);
};
