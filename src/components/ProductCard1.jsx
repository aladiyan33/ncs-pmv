import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";

export default function ProductCard({
  product,
  onAddToCart,
}) {
  return (
    <motion.article
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
        amount: 0.15,
      }}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden
        border
        border-white/[0.08]
        bg-ncs-panel
      "
    >

      {/* =====================================
          PRODUCT VISUAL
      ====================================== */}

      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          bg-gradient-to-br
          from-[#171a20]
          to-[#090a0c]
        "
      >

        {/* ABSTRACT PRODUCT VISUAL */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
          "
        >

          <div
            className="
              relative
              h-40
              w-40
              rounded-full
              border
              border-ncs-gold/20
              bg-ncs-blue/10
              shadow-[0_0_100px_rgba(7,89,184,0.15)]
            "
          >

            <div
              className="
                absolute
                inset-5
                rounded-full
                border
                border-white/[0.05]
              "
            />

            <span
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                font-display
                text-5xl
                font-black
                text-white/[0.12]
              "
            >
              NCS
            </span>

          </div>

        </div>


        {/* CATEGORY */}

        <div
          className="
            absolute
            left-4
            top-4
            border
            border-white/10
            bg-black/60
            px-3
            py-2
            backdrop-blur-md
          "
        >

          <span
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-ncs-gold-light
            "
          >
            {product.category}
          </span>

        </div>


        {/* VIEW BUTTON */}

        <motion.button
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileHover={{
            opacity: 1,
            y: 0,
          }}
          className="
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-black/60
            text-white
            backdrop-blur-md
          "
        >

          <ArrowUpRight size={15} />

        </motion.button>


        {/* BOTTOM GLOW */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-24
            bg-gradient-to-t
            from-black/60
            to-transparent
          "
        />

      </div>


      {/* =====================================
          PRODUCT INFORMATION
      ====================================== */}

      <div className="p-5">

        <p
          className="
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-white/30
          "
        >
          {product.type}
        </p>


        <h3
          className="
            mt-2
            font-display
            text-2xl
            font-bold
            uppercase
            leading-none
          "
        >
          {product.name}
        </h3>


        <p
          className="
            mt-3
            line-clamp-2
            text-xs
            leading-5
            text-white/35
          "
        >
          {product.description}
        </p>


        {/* PRODUCT FOOTER */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            border-white/[0.08]
            pt-4
          "
        >

          <div>

            {product.price ? (

              <span
                className="
                  font-display
                  text-2xl
                  font-bold
                  text-ncs-gold-light
                "
              >
                ₹{product.price}
              </span>

            ) : (

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-white/35
                "
              >
                Price on request
              </span>

            )}

          </div>


          <button
            onClick={() => onAddToCart(product)}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-ncs-gold
              text-black
              transition-all
              duration-300
              hover:bg-ncs-goldLight
              hover:scale-105
            "
            aria-label={`Add ${product.name} to cart`}
          >

            <ShoppingBag
              size={16}
              strokeWidth={2}
            />

          </button>

        </div>

      </div>


      {/* HOVER LINE */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-[2px]
          w-0
          bg-ncs-gold
          transition-all
          duration-500
          group-hover:w-full
        "
      />

    </motion.article>
  );
}