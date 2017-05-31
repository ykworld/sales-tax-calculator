var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = new Object();

  for (data of salesData) {
    if (!result.hasOwnProperty(data.name)) {
      result[data.name] = {totalSales: 0, totalTaxes: 0};
    }

    result[data.name].totalSales += calculateSales(data.sales);
    result[data.name].totalTaxes += calculateTax(data.sales, salesTaxRates[data.province]);
  }

  return result;
}

function calculateSales(sales) {
  return sales.reduce(function(total, num) {
    return total + num;
  });
}

function calculateTax(sales, taxRate) {
  return calculateSales(sales) * taxRate;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
