
function mostActive(customers) {
  let threshold = customers.length * 0.05;
  let result = [];

  let customersWithTradeValue = {};
  for (let i = 0; i < customers.length; i++) {
    if (customersWithTradeValue[customers[i]]) customersWithTradeValue[customers[i]]++;
    else customersWithTradeValue[customers[i]] = 1;
  }
  Object.entries(customersWithTradeValue).map(([customerName, trades]) => {
    if (trades >= threshold ) result.push({ customerName, trades });
  });

  return result.map((customer) => customer.customerName).sort()
}