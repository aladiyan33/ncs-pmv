import { useState } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({
  cartCount = 0,
  onCartClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sports", href: "#sports" },
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* =========================
          DESKTOP NAVBAR
      ========================== */}

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          h-[78px]
          border-b
          border-white/10
          bg-black/75
          backdrop-blur-xl
        "
      >

        <div
          className="
            ncs-container
            h-full
            flex
            items-center
            justify-between
          "
        >

          {/* LOGO */}

          <a
            href="#home"
            className="
              flex
              items-center
              gap-3
              group
            "
          >

            <div
              className="
                w-11
                h-11
                rounded-full
                overflow-hidden
                border
                border-ncs-gold/50
                group-hover:border-ncs-gold
                transition-colors
              "
            >

              <img
                src={`${import.meta.env.BASE_URL}assets/logo.png`}
                alt="NCS PMV"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>

            <div className="hidden sm:flex flex-col">

              <span
                className="
                  font-display
                  text-xl
                  font-black
                  tracking-[0.12em]
                  leading-none
                "
              >
                NCS
              </span>

              <span
                className="
                  text-[8px]
                  tracking-[0.15em]
                  text-ncs-gold-light
                  mt-1
                  whitespace-nowrap
                "
              >
                NEW CHAMPION SPORTS & WEARS
              </span>

            </div>

          </a>


          {/* DESKTOP LINKS */}

          <nav className="hidden lg:flex items-center gap-9">

            {navItems.map((item) => (

              <a
                key={item.label}
                href={item.href}
                className="
                  relative
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-white/70
                  hover:text-white
                  transition-colors
                  group
                "
              >

                {item.label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-0
                    h-[1px]
                    w-0
                    bg-ncs-gold
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />

              </a>

            ))}

          </nav>


          {/* RIGHT ACTIONS */}

          <div className="flex items-center gap-2">

            {/* SEARCH */}

            <button
              aria-label="Search"
              className="
                hidden
                sm:flex
                w-10
                h-10
                items-center
                justify-center
                rounded-full
                text-white/70
                hover:text-ncs-gold-light
                hover:bg-white/5
                transition
              "
            >
              <Search size={18} strokeWidth={1.7} />
            </button>


            {/* CART */}

            <button
              onClick={onCartClick}
              aria-label="Shopping cart"
              className="
                relative
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                text-white/80
                hover:text-ncs-gold-light
                hover:bg-white/5
                transition
              "
            >

              <ShoppingBag
                size={19}
                strokeWidth={1.7}
              />

              {cartCount > 0 && (

                <span
                  className="
                    absolute
                    -top-0.5
                    -right-0.5
                    min-w-[18px]
                    h-[18px]
                    px-1
                    rounded-full
                    bg-ncs-gold
                    text-black
                    text-[9px]
                    font-black
                    flex
                    items-center
                    justify-center
                  "
                >
                  {cartCount}
                </span>

              )}

            </button>


            {/* MOBILE MENU */}

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="
                lg:hidden
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                hover:bg-white/5
                transition
              "
            >

              <Menu size={21} />

            </button>

          </div>

        </div>

      </motion.header>


      {/* =========================
          MOBILE MENU
      ========================== */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[60]
              bg-black/80
              backdrop-blur-md
            "
            onClick={() => setMenuOpen(false)}
          >

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="
                absolute
                right-0
                top-0
                bottom-0
                w-[min(420px,88%)]
                bg-ncs-dark
                border-l
                border-white/10
                px-7
                py-7
              "
            >

              {/* MOBILE HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  pb-7
                  border-b
                  border-white/10
                "
              >

                <div>

                  <p
                    className="
                      font-display
                      text-2xl
                      font-black
                      tracking-wider
                    "
                  >
                    NCS PMV
                  </p>

                  <p
                    className="
                      text-[8px]
                      tracking-[0.18em]
                      text-ncs-gold-light
                      mt-1
                    "
                  >
                    NEW CHAMPION SPORTS & WEARS
                  </p>

                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="
                    w-10
                    h-10
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                  "
                >

                  <X size={20} />

                </button>

              </div>


              {/* MOBILE LINKS */}

              <nav className="mt-10 flex flex-col">

                {navItems.map((item, index) => (

                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.07,
                    }}
                    className="
                      py-5
                      border-b
                      border-white/10
                      font-display
                      text-4xl
                      uppercase
                      font-bold
                      hover:text-ncs-gold-light
                      transition-colors
                    "
                  >

                    {item.label}

                  </motion.a>

                ))}

              </nav>


              {/* MOBILE FOOTER */}

              <div className="absolute bottom-8 left-7 right-7">

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                    mb-3
                  "
                >
                  Order directly
                </p>

                <a
                  href="https://wa.me/919791351110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    ncs-button
                    ncs-button-gold
                    w-full
                  "
                >
                  WhatsApp NCS PMV
                </a>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}