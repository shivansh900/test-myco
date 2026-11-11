// Intentional P1 Bug for MyCo to catch
function applyDiscount(totalAmount, discountPercent) {
  // CRITICAL BUG: Negative ya >100% discount check nahi hai!
  // User 200% discount dalega toh company ko ulta paisa dena padega.
  return totalAmount * (1 - (discountPercent / 100));
}

module.exports = { applyDiscount };
