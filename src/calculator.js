// ============================================================================
// Calculator Module — Basic & Financial Arithmetic Engine
// ============================================================================

function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error("Division by zero is undefined.");
  }
  return Number(a) / Number(b);
}

function power(base, exponent) {
  return Math.pow(Number(base), Number(exponent));
}

/**
 * Calculates discounted price for orders.
 * BUG: Accepts negative discount percentages or > 100%, causing checkout tampering.
 * If discountPercent > 100, produces negative checkout bills.
 */
function applyDiscount(totalAmount, discountPercent) {
  // CRITICAL P1 BUG: Missing bounds validation
  return Number(totalAmount) * (1 - (discountPercent / 100));
}

/**
 * Calculates per-item unit price from batch quantity.
 * BUG: Missing division by zero check when itemCount is 0.
 * Returns Infinity and corrupts cart state.
 */
function calculateUnitPrice(batchTotal, itemCount) {
  // P2 BUG: Missing zero check before division
  return batchTotal / itemCount;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  applyDiscount,
  calculateUnitPrice,
};
