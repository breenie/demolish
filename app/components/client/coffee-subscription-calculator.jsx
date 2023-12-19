import React, { useState } from "react";

const CoffeeSubscriptionCalculator = () => {
  const [bagCost, setBagCost] = useState(6.95);
  const [shippingCost, setShippingCost] = useState(3.95);
  const [discountPercentage, setDiscountPercentage] = useState(10);
  const [weeklyConsumption, setWeeklyConsumption] = useState(250);

  const calculateCosts = () => {
    // Calculate weekly cost without subscription
    const weeklyCostWithoutSubscription = bagCost + shippingCost;

    // Calculate discounted bag cost with subscription
    const discountedBagCost = bagCost - (discountPercentage / 100) * bagCost;

    // Calculate weekly cost with subscription
    const weeklyCostWithSubscription = discountedBagCost + shippingCost;

    // Calculate savings per week with subscription
    const savingsPerWeek =
      weeklyCostWithoutSubscription - weeklyCostWithSubscription;

    // Calculate number of bags needed for free shipping
    const bagsForFreeShipping = Math.ceil(25 / discountedBagCost);

    // Calculate total cost with free shipping
    const totalCostWithFreeShipping = discountedBagCost * bagsForFreeShipping;

    return {
      weeklyCostWithoutSubscription,
      weeklyCostWithSubscription,
      savingsPerWeek,
      bagsForFreeShipping,
      totalCostWithFreeShipping
    };
  };

  const handleInputChange = (setter) => (event) => {
    setter(parseFloat(event.target.value) || 0);
  };

  const {
    weeklyCostWithoutSubscription,
    weeklyCostWithSubscription,
    savingsPerWeek,
    bagsForFreeShipping,
    totalCostWithFreeShipping
  } = calculateCosts();

  return (
    <div>
      <h1>Coffee Subscription Calculator</h1>
      <form>
        <div>
          <label>
            Bag Cost (£):
            <input
              type="number"
              value={bagCost}
              onChange={handleInputChange(setBagCost)}
            />
          </label>
        </div>
        <div>
          <label>
            Shipping Cost (£):
            <input
              type="number"
              value={shippingCost}
              onChange={handleInputChange(setShippingCost)}
            />
          </label>
        </div>
        <label>
          Discount Percentage (%):
          <input
            type="number"
            value={discountPercentage}
            onChange={handleInputChange(setDiscountPercentage)}
          />
        </label>
        <div>
          <label>
            Weekly Consumption (grams):
            <input
              type="number"
              value={weeklyConsumption}
              onChange={handleInputChange(setWeeklyConsumption)}
            />
          </label>
        </div>
      </form>

      <h2>Results:</h2>
      <p>
        Weekly Cost without Subscription: £
        {weeklyCostWithoutSubscription.toFixed(2)}
      </p>
      <p>
        Weekly Cost with Subscription: £{weeklyCostWithSubscription.toFixed(2)}
      </p>
      <p>Savings per Week with Subscription: £{savingsPerWeek.toFixed(2)}</p>
      <p>Bags Needed for Free Shipping: {bagsForFreeShipping}</p>
      <p>
        Total Cost with Free Shipping: £{totalCostWithFreeShipping.toFixed(2)}
      </p>
    </div>
  );
};

export default CoffeeSubscriptionCalculator;
