import { AnimatePresence, motion } from "framer-motion";
import { createWhatsAppOrder } from "../utils/whatsapp";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const pricedItems = cart.filter(
    (item) => item.price !== null
  );

  const totalPrice = pricedItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* =====================================
              BACKDROP
          ====================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              fixed
              inset-0
              z-[70]
              bg-black/70
              backdrop-blur-sm
            "
          />

          {/* =====================================
              DRAWER
          ====================================== */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              right-0
              top-0
              z-[80]
              flex
              h-full
              w-full
              max-w-[480px]
              flex-col
              border-l
              border-white/10
              bg-ncs-dark
              shadow-[-30px_0_100px_rgba(0,0,0,0.5)]
            "
          >

            {/* =================================
                HEADER
            ================================== */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/[0.08]
                px-6
                py-6
              "
            >

              <div>

                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-ncs-gold-light
                  "
                >
                  Your selection
                </p>

                <h2
                  className="
                    mt-1
                    font-display
                    text-4xl
                    font-black
                    uppercase
                  "
                >
                  Cart
                </h2>

              </div>


              <button
                onClick={onClose}
                aria-label="Close cart"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  text-white/60
                  transition
                  hover:border-white/25
                  hover:text-white
                "
              >
                <X size={18} />
              </button>

            </div>


            {/* =================================
                CART CONTENT
            ================================== */}

            <div className="flex-1 overflow-y-auto px-6 py-6">

              {cart.length === 0 ? (

                /* EMPTY CART */

                <div
                  className="
                    flex
                    h-full
                    min-h-[400px]
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >

                  <div
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-ncs-gold/20
                      bg-ncs-gold/5
                      text-ncs-gold
                    "
                  >
                    <ShoppingBag size={28} />
                  </div>

                  <h3
                    className="
                      mt-6
                      font-display
                      text-3xl
                      font-bold
                      uppercase
                    "
                  >
                    Your cart is empty
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-xs
                      text-xs
                      leading-6
                      text-white/35
                    "
                  >
                    Add something from the collection
                    and it will appear here.
                  </p>

                  <button
                    onClick={onClose}
                    className="
                      ncs-button
                      ncs-button-gold
                      mt-7
                    "
                  >
                    Continue shopping
                  </button>

                </div>

              ) : (

                /* CART ITEMS */

                <div className="space-y-3">

                  {cart.map((item) => (

                    <motion.div
                      layout
                      key={item.id}
                      className="
                        relative
                        border
                        border-white/[0.08]
                        bg-ncs-panel
                        p-4
                      "
                    >

                      <div
                        className="
                          flex
                          gap-4
                        "
                      >

                        {/* PRODUCT VISUAL */}

                        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-[#17181c]">
                           {item.image ? (
                           <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain p-2"
                            />
                           ) : (
                            <span className="font-display text-sm font-black text-white/20">
                                NCS
                            </span>
                          )}
                        </div>


                        {/* DETAILS */}

                        <div className="min-w-0 flex-1">

                          <p
                            className="
                              text-[8px]
                              uppercase
                              tracking-[0.18em]
                              text-ncs-gold-light
                            "
                          >
                            {item.category}
                          </p>

                          <h3
                            className="
                              mt-1
                              truncate
                              font-display
                              text-xl
                              font-bold
                              uppercase
                            "
                          >
                            {item.name}
                          </h3>


                          {item.price !== null ? (

                            <p
                              className="
                                mt-1
                                font-display
                                text-lg
                                font-bold
                                text-ncs-gold-light
                              "
                            >
                              ₹{item.price}
                            </p>

                          ) : (

                            <p
                              className="
                                mt-1
                                text-[8px]
                                uppercase
                                tracking-[0.12em]
                                text-white/30
                              "
                            >
                              Price on request
                            </p>

                          )}

                        </div>


                        {/* REMOVE */}

                        <button
                          onClick={() =>
                            onRemove(item.id)
                          }
                          aria-label={`Remove ${item.name}`}
                          className="
                            absolute
                            right-3
                            top-3
                            text-white/20
                            transition
                            hover:text-red-400
                          "
                        >
                          <Trash2 size={14} />
                        </button>

                      </div>


                      {/* QUANTITY */}

                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          justify-between
                          border-t
                          border-white/[0.06]
                          pt-3
                        "
                      >

                        <span
                          className="
                            text-[8px]
                            uppercase
                            tracking-[0.18em]
                            text-white/25
                          "
                        >
                          Quantity
                        </span>


                        <div
                          className="
                            flex
                            items-center
                            border
                            border-white/10
                          "
                        >

                          <button
                            onClick={() =>
                              onDecrease(item.id)
                            }
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              text-white/50
                              transition
                              hover:bg-white/5
                              hover:text-white
                            "
                          >
                            <Minus size={13} />
                          </button>


                          <span
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              border-x
                              border-white/10
                              text-xs
                              font-bold
                            "
                          >
                            {item.quantity}
                          </span>


                          <button
                            onClick={() =>
                              onIncrease(item.id)
                            }
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              text-white/50
                              transition
                              hover:bg-white/5
                              hover:text-white
                            "
                          >
                            <Plus size={13} />
                          </button>

                        </div>

                      </div>

                    </motion.div>

                  ))}

                </div>

              )}

            </div>


            {/* =================================
                FOOTER
            ================================== */}

            {cart.length > 0 && (

              <div
                className="
                  border-t
                  border-white/[0.08]
                  bg-black/20
                  px-6
                  py-6
                "
              >

                <div
                  className="
                    mb-5
                    flex
                    items-center
                    justify-between
                  "
                >

                  <span
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.2em]
                      text-white/30
                    "
                  >
                    {totalItems} items
                  </span>


                  {pricedItems.length === cart.length ? (

                    <span
                      className="
                        font-display
                        text-2xl
                        font-bold
                        text-ncs-gold-light
                      "
                    >
                      ₹{totalPrice.toLocaleString("en-IN")}
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
                      Price confirmation required
                    </span>

                  )}

                </div>


                {/* WHATSAPP */}

                <a
                  href={createWhatsAppOrder(cart)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                     ncs-button
                     ncs-button-gold
                     w-full
                     justify-center"
                >
                    Continue on WhatsApp
                </a>


                <p
                  className="
                    mt-3
                    text-center
                    text-[8px]
                    leading-5
                    text-white/25
                  "
                >
                  Your order will be confirmed directly
                  with NCS PMV through WhatsApp.
                </p>

              </div>

            )}

          </motion.aside>

        </>
      )}
    </AnimatePresence>
  );
}
