import { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

import products from "../data/products";
import ProductCard from "./ProductCard";

const categories = [
  "All",
  "Cricket",
  "Football",
  "Kabaddi",
  "Badminton",
  "Basketball",
  "Fitness",
  "Athletic",
  "Sportswear",
  "Accessories",
];

export default function FeaturedProducts({
  onAddToCart,
  onOpenDetails,
  selectedCategory = "All",
  onCategoryChange,
}) {
  /*
   * IMPORTANT:
   *
   * selectedCategory comes from App.jsx.
   *
   * When the user clicks:
   * Cricket → selectedCategory = "Cricket"
   * Football → selectedCategory = "Football"
   * etc.
   *
   * The shop automatically filters using that value.
   */

  const activeCategory = selectedCategory;

  /*
   * FILTER PRODUCTS
   */
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter(
      (product) =>
        product.category?.toLowerCase() ===
        activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  /*
   * Make sure the selected category is valid.
   */
  useEffect(() => {
    if (
      selectedCategory &&
      !categories.some(
        (category) =>
          category.toLowerCase() === selectedCategory.toLowerCase()
      )
    ) {
      onCategoryChange?.("All");
    }
  }, [selectedCategory, onCategoryChange]);

  return (
    <section
      id="shop"
      className="
        relative
        overflow-hidden
        bg-ncs-dark
        py-28
        sm:py-36
      "
    >
      {/* =====================================
          BACKGROUND GLOW
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-ncs-blue/10
          blur-[150px]
        "
      />

      <div className="ncs-container relative z-10">

        {/* =====================================
            HEADER
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >

          <div>

            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  h-px
                  w-10
                  bg-ncs-gold
                "
              />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-ncs-gold-light
                "
              >
                {activeCategory === "All"
                  ? "The Collection"
                  : `${activeCategory} Collection`}
              </span>

            </div>

            <h2
              className="
                font-display
                text-[clamp(60px,8vw,110px)]
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.04em]
              "
            >
              {activeCategory === "All" ? (
                <>
                  SHOP
                  <br />

                  <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">
                    THE GEAR.
                  </span>
                </>
              ) : (
                <>
                  {activeCategory}
                  <br />

                  <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">
                    GEAR.
                  </span>
                </>
              )}
            </h2>

          </div>

          <p
            className="
              max-w-sm
              text-sm
              leading-7
              text-white/40
            "
          >
            Explore sports equipment, training gear,
            sportswear and accessories available
            through NCS PMV.
          </p>

        </motion.div>


        {/* =====================================
            CATEGORY FILTER
        ====================================== */}

        <div
          className="
            mt-12
            overflow-x-auto
            pb-3
          "
        >

          <div
            className="
              flex
              min-w-max
              items-center
              gap-2
            "
          >

            <div
              className="
                mr-2
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-white/40
              "
            >
              <SlidersHorizontal size={15} />
            </div>


            {categories.map((category) => {

              const active =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    onCategoryChange?.(category)
                  }
                  className={`
                    rounded-full
                    border
                    px-5
                    py-2.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                          border-ncs-gold
                          bg-ncs-gold
                          text-black
                        `
                        : `
                          border-white/10
                          bg-transparent
                          text-white/45
                          hover:border-white/25
                          hover:text-white
                        `
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}

          </div>

        </div>


        {/* =====================================
            ACTIVE CATEGORY INDICATOR
        ====================================== */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-between
            border-b
            border-white/[0.08]
            pb-4
          "
        >

          <div className="flex items-center gap-3">

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-ncs-gold
                shadow-[0_0_12px_rgba(214,165,44,.6)]
              "
            />

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              Showing
            </p>

            <p
              className="
                text-[9px]
                font-black
                uppercase
                tracking-[0.2em]
                text-white/70
              "
            >
              {activeCategory}
            </p>

          </div>


          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}
          </p>

        </div>


        {/* =====================================
            PRODUCTS
        ====================================== */}

        {filteredProducts.length > 0 && (
          <motion.div
            layout
            className="
              mt-8
              grid
              grid-cols-1
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >

            {filteredProducts.map((product) => (

              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onOpenDetails={onOpenDetails}
              />

            ))}

          </motion.div>
        )}


        {/* =====================================
            EMPTY STATE
        ====================================== */}

        {filteredProducts.length === 0 && (

          <div
            className="
              mt-8
              flex
              min-h-[300px]
              items-center
              justify-center
              border
              border-white/[0.08]
              bg-ncs-panel
            "
          >

            <div className="text-center">

              <p
                className="
                  font-display
                  text-4xl
                  font-bold
                  uppercase
                "
              >
                Coming Soon
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  text-white/35
                "
              >
                More {activeCategory} products
                will be added soon.
              </p>

              <button
                type="button"
                onClick={() =>
                  onCategoryChange?.("All")
                }
                className="
                  mt-6
                  border
                  border-ncs-gold
                  px-5
                  py-3
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-ncs-gold
                  transition
                  hover:bg-ncs-gold
                  hover:text-black
                "
              >
                View All Products
              </button>

            </div>

          </div>

        )}

      </div>

    </section>
  );
}