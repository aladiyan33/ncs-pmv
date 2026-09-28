import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sports from "./components/Sports";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductModelsDrawer from "./components/ProductModelsDrawer";
import CartDrawer from "./components/CartDrawer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import StoreSection from "./components/StoreSection";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Currently selected sport/category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Product models drawer
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modelsOpen, setModelsOpen] = useState(false);

  // ==========================================
  // SPORT FILTER
  // ==========================================
  const handleSportSelect = (category) => {
    setSelectedCategory(category);

    setTimeout(() => {
      document.getElementById("shop")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  // ==========================================
  // OPEN PRODUCT / MODEL DRAWER
  // ==========================================
  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
    setModelsOpen(true);
  };

  // ==========================================
  // ADD PRODUCT / MODEL TO CART
  // ==========================================
  const handleAddToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    // Open cart after adding
    setCartOpen(true);
  };

  // ==========================================
  // ADD MODEL FROM MODEL DRAWER
  // ==========================================
  const handleModelAddToCart = (model) => {
    setModelsOpen(false);
    handleAddToCart(model);
  };

  // ==========================================
  // INCREASE CART QUANTITY
  // ==========================================
  const handleIncrease = (productId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ==========================================
  // DECREASE CART QUANTITY
  // ==========================================
  const handleDecrease = (productId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ==========================================
  // REMOVE FROM CART
  // ==========================================
  const handleRemove = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // ==========================================
  // CART COUNT
  // ==========================================
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      {/* NAVBAR */}
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      {/* MAIN WEBSITE */}
      <main>
        <Hero />

        {/* SPORTS */}
        <Sports onSportSelect={handleSportSelect} />

        {/* SHOP */}
        <FeaturedProducts
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onOpenDetails={handleOpenDetails}
        />

        <StoreSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* PRODUCT MODELS DRAWER */}
      <ProductModelsDrawer
        isOpen={modelsOpen}
        onClose={() => setModelsOpen(false)}
        product={selectedProduct}
        onAddToCart={handleModelAddToCart}
      />

      {/* CART */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />

      {/* WHATSAPP FLOAT */}
      <WhatsAppFloat />
    </>
  );
}

export default App;