const WHATSAPP_NUMBER = "919791358110";

export function createWhatsAppOrder(cart) {
  if (!cart || cart.length === 0) {
    return null;
  }

  const lines = [
    "Hello NCS PMV 👋",
    "",
    "I would like to enquire/order the following items:",
    "",
  ];

  cart.forEach((item, index) => {
    lines.push(
      `${index + 1}. ${item.name}`,
      `   Category: ${item.category}`,
      `   Quantity: ${item.quantity}`
    );

    if (item.price !== null) {
      lines.push(
        `   Price: ₹${item.price.toLocaleString("en-IN")}`
      );
    }

    lines.push("");
  });

  const pricedItems = cart.filter(
    (item) => item.price !== null
  );

  if (pricedItems.length === cart.length) {
    const total = cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

    lines.push(
      `Estimated total: ₹${total.toLocaleString("en-IN")}`
    );
  } else {
    lines.push(
      "Please confirm the prices and availability."
    );
  }

  lines.push(
    "",
    "Please let me know the availability and next steps.",
    "",
    "Thank you!"
  );

  const message = lines.join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}