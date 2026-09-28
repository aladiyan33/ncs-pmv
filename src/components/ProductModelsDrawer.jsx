import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ShoppingBag,
  ChevronRight,
  Package,
} from "lucide-react";

export default function ProductModelsDrawer({
  isOpen,
  onClose,
  title = "Products",
  category = "",
  product = null,
  products = [],
  onAddToCart,
}) {
  const productList = product?.models ?? products;
  const drawerTitle = product?.name || title;
  const drawerCategory = product?.category || category;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/75 backdrop-blur-sm"
          />

          {/* DRAWER */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 32,
            }}
            className="fixed right-0 top-0 z-[100] flex h-full w-full max-w-xl flex-col border-l border-white/10 bg-[#08090b] shadow-2xl"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-7">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-ncs-gold">
                  NCS PMV
                </p>

                <h2 className="mt-1 font-display text-3xl font-black uppercase tracking-tight text-white">
                  {drawerTitle}
                </h2>

                <p className="mt-1 text-xs text-white/40">
                  {drawerCategory
                    ? `Available ${drawerCategory.toLowerCase()} products`
                    : "Choose your product"}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition hover:border-ncs-gold hover:text-ncs-gold"
                aria-label="Close products"
              >
                <X size={19} />
              </button>
            </div>

            {/* PRODUCTS */}
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              {productList.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Package
                    size={42}
                    className="text-ncs-gold/30"
                  />

                  <p className="mt-4 font-display text-xl font-bold uppercase text-white">
                    No products available
                  </p>

                  <p className="mt-2 text-xs text-white/35">
                    Please check back soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {productList.map((item, index) => (
                    <motion.article
                      key={`${item.id || "product"}-${index}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                      }}
                      className="group overflow-hidden border border-white/10 bg-[#101114] transition hover:border-ncs-gold/50"
                    >
                      {/* IMAGE */}
                      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#0b0c0e]">
                        <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ncs-gold/10 blur-3xl" />

                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="relative z-10 h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="relative z-10 flex flex-col items-center">
                            <ShoppingBag
                              size={42}
                              className="text-ncs-gold/30"
                            />

                            <span className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/25">
                              Product photo
                            </span>
                          </div>
                        )}

                        <span className="absolute left-4 top-4 font-display text-4xl font-black text-white/[0.05]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {item.brand && (
                          <span className="absolute right-4 top-4 border border-white/10 bg-black/40 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white/45">
                            {product.brand}
                          </span>
                        )}
                      </div>

                      {/* INFORMATION */}
                      <div className="p-5">
                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-ncs-gold">
                          {item.brand || "NCS PMV"}
                        </p>

                        <h3 className="mt-1 font-display text-2xl font-black uppercase text-white">
                          {item.name}
                        </h3>

                        {item.description && (
                          <p className="mt-2 text-xs leading-5 text-white/40">
                            {item.description}
                          </p>
                        )}

                        {/* OPTIONAL SPECS */}
                        {item.specifications &&
                          item.specifications.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.specifications.map((spec) => (
                                <span
                                  key={spec}
                                  className="border border-white/10 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white/45"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          )}

                        {/* ADD TO CART */}
                        <button
                          type="button"
                          onClick={() =>
                            onAddToCart({
                              ...item,
                              category: item.category || drawerCategory,
                              id: `${product?.id || drawerTitle}-${item.id || "model"}-${index}`,
                            })
                          }
                          className="mt-5 flex min-h-12 w-full items-center justify-between border border-ncs-gold/60 bg-ncs-gold px-4 text-[10px] font-black uppercase tracking-[0.18em] text-black transition hover:bg-[#f1ce65]"
                        >
                          <span className="flex items-center gap-2">
                            <ShoppingBag size={15} />
                            Add to Cart
                          </span>

                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 px-5 py-4 sm:px-7">
              <p className="text-center text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                Select a product to add it to your cart
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}