import { motion } from "framer-motion";
import {
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

export default function ProductCard({
  product,
  onOpenDetails,
}) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden border border-white/10 bg-[#101114]"
    >
      {/* PRODUCT IMAGE */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#0b0c0e]">
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ncs-blue/10 blur-3xl" />

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="relative z-10 h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="relative z-10 flex flex-col items-center">
            <ShoppingBag
              size={40}
              className="text-ncs-gold/30"
            />

            <span className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/25">
              Product photo
            </span>
          </div>
        )}

        <span className="absolute left-4 top-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
          {product.category}
        </span>
      </div>

      {/* INFO */}
      <div className="p-5">
        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-ncs-gold">
          {product.brand || "NCS PMV"}
        </p>

        <h3 className="mt-1 font-display text-2xl font-black uppercase text-white">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/40">
            {product.description}
          </p>
        )}

        <button
          type="button"
          onClick={() => onOpenDetails(product)}
          className="mt-5 flex min-h-11 w-full items-center justify-between border border-ncs-gold/50 px-4 text-[9px] font-black uppercase tracking-[0.15em] text-white transition hover:bg-ncs-gold hover:text-black"
        >
          <span>View Products</span>
          <ChevronRight size={15} />
        </button>
      </div>
    </motion.article>
  );
}