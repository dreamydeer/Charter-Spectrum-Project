const calculatePoints = function(purchaseValue) {
  const tier1Threshold = 50;
  const tier2Threshold = 100;

  const tier1Multiplier = 1;
  const tier2Multiplier = 2;

  const tier1Points = (
    Math.max(purchaseValue - tier1Threshold, 0) *
    tier1Multiplier
  );
  const tier2Points = (
    Math.max(purchaseValue - tier2Threshold, 0) *
    (tier2Multiplier - tier1Multiplier)
  );
  
  const allTierPoints = tier1Points + tier2Points;

  return allTierPoints;
}

const calculatePointsForMonth = function(purchases, month) {
  const filteredPurchases = purchases.filter(
    (purchase) => (purchase.month === month)
  );
  const pointsForMonth = filteredPurchases.reduce(
    (acc, cur) => (acc + calculatePoints(cur.value)),
  0);

  return pointsForMonth;
}

const calculateCustomerResults = function(purchases) {
  const septemberPoints = calculatePointsForMonth(purchases, "September");
  const octoberPoints = calculatePointsForMonth(purchases, "October");
  const novemberPoints = calculatePointsForMonth(purchases, "November");

  const totalPoints = septemberPoints + octoberPoints + novemberPoints;

  const customerResults = {
    septemberPoints: septemberPoints,
    octoberPoints: octoberPoints,
    novemberPoints: novemberPoints,
    totalPoints: totalPoints
  }

  return customerResults;
}

const createCustomerResultObj = function(customer) {
    const customerResultObj = {
      name: customer.name,
      ...calculateCustomerResults(customer.purchases)
    }
    return customerResultObj;
}

export {
    calculatePoints,
    calculatePointsForMonth,
    createCustomerResultObj
}