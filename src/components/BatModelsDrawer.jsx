import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, ChevronRight } from "lucide-react";

const batModels = [
  {
    id: "bat-model-01",
    name: "COSCO Razor",
    brand: "COSCO",
    category: "Cricket",
    description: "Cricket bat built for powerful strokes and match play.",
    image: "/assets/products/cosco-razor.jpg",
  },
  {
    id: "bat-model-02",
    name: "COSCO Thunder",
    brand: "COSCO",
    category: "Cricket",
    description: "Performance-focused cricket bat for training and matches.",
    image: "/assets/products/cosco-thunder.jpg",
  },
  {
    id: "bat-model-03",
    name: "COSCO Dynamite",
    brand: "COSCO",
    category: "Cricket",
    description: "Balanced cricket bat designed for confident stroke play.",
    image: "/assets/products/cosco-dynamite.jpg",
  },
];

export default function BatModelsDrawer({
  isOpen,
  onClose,
  onAddToCart,
}) {
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
                  Cricket Bat
                </h2>

                <p className="mt-1 text-xs text-white/40">
                  Select your preferred bat model
                </p>
              </div>

              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition hover:border-ncs-gold hover:text-ncs-gold"
                aria-label="Close cricket bat models"
              >
                <X size={19} />
              </button>
            </div>

            {/* MODELS */}
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
              <div className="space-y-4">
                {batModels.map((bat, index) => (
                  <motion.article
                    key={bat.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.35,
                    }}
                    className="group overflow-hidden border border-white/10 bg-[#101114] transition hover:border-ncs-gold/50"
                  >
                    {/* PRODUCT IMAGE */}
                    <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#0c0d0f]">
                      {/* subtle background glow */}
                      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ncs-gold/10 blur-3xl" />

                      {bat.image ? (
                        <img
                          src={bat.image}
                          alt={bat.name}
                          className="relative z-10 h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="relative z-10 flex flex-col items-center justify-center text-center">
                          <ShoppingBag
                            size={42}
                            className="text-ncs-gold/40"
                          />
                          <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
                            Product photo
                          </p>
                        </div>
                      )}

                      {/* MODEL NUMBER */}
                      <span className="absolute left-4 top-4 font-display text-4xl font-black text-white/[0.05]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* DETAILS */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-ncs-gold">
                            {bat.brand}
                          </p>

                          <h3 className="mt-1 font-display text-2xl font-black uppercase text-white">
                            {bat.name}
                          </h3>

                          <p className="mt-2 max-w-sm text-xs leading-5 text-white/45">
                            {bat.description}
                          </p>
                        </div>

                        <span className="border border-white/10 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.18em] text-white/35">
                          Cricket
                        </span>
                      </div>

                      {/* ADD TO CART */}
                      <button
                        onClick={() => {
                          onAddToCart({
                            id: bat.id,
                            name: bat.name,
                            brand: bat.brand,
                            category: bat.category,
                            description: bat.description,
                            image: bat.image,
                            price: null,
                          });
                        }}
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
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 px-5 py-4 sm:px-7">
              <p className="text-center text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                Add your selected model to the NCS PMV cart
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}