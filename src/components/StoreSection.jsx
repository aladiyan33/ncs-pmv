import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

export default function StoreSection() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-ncs-black
        py-28
        sm:py-36
      "
    >

      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-ncs-blue/10
          blur-[160px]
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
        >

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
              Visit NCS PMV
            </span>

          </div>


          <h2
            className="
              font-display
              text-[clamp(65px,9vw,125px)]
              font-black
              uppercase
              leading-[0.78]
              tracking-[-0.04em]
            "
          >

            FIND
            <br />

            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">
              YOUR GEAR.
            </span>

          </h2>

        </motion.div>


        {/* =====================================
            STORE CARD
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            relative
            mt-16
            overflow-hidden
            border
            border-white/[0.09]
            bg-ncs-panel
          "
        >

          {/* DECORATIVE NCS */}

          <div
            className="
              pointer-events-none
              absolute
              right-[-60px]
              top-[-100px]
              font-display
              text-[280px]
              font-black
              leading-none
              text-white/[0.025]
            "
          >
            NCS
          </div>


          <div
            className="
              relative
              z-10
              grid
              lg:grid-cols-2
            "
          >

            {/* LOCATION */}

            <div
              className="
                border-b
                border-white/[0.08]
                p-8
                sm:p-12
                lg:border-b-0
                lg:border-r
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-ncs-gold/25
                  bg-ncs-gold/5
                  text-ncs-gold-light
                "
              >

                <MapPin size={20} />

              </div>


              <p
                className="
                  mt-8
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white/30
                "
              >
                Store location
              </p>


              <h3
                className="
                  mt-3
                  font-display
                  text-5xl
                  font-black
                  uppercase
                "
              >
                Ponnamaravathi
              </h3>


              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-7
                  text-white/40
                "
              >
                Near Amala Annai Higher Secondary
                School, Ponnamaravathi,Pudukottai, Tamil Nadu.
              </p>


              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-ncs-gold-light
                "
              >

                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-ncs-gold
                    shadow-[0_0_12px_rgba(214,165,44,0.8)]
                  "
                />

                Visit us in store

              </div>

            </div>


            {/* CONTACT */}

            <div className="p-8 sm:p-12">

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-white/30
                "
              >
                Contact NCS PMV
              </p>


              <div className="mt-8 space-y-6">

                {/* PHONE 1 */}

                <a
                  href="tel:+919791351110"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/10
                      text-white/50
                      transition
                      group-hover:border-ncs-gold/50
                      group-hover:text-ncs-gold-light
                    "
                  >
                    <Phone size={16} />
                  </span>

                  <div>

                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-white/25
                      "
                    >
                      Phone / WhatsApp
                    </p>

                    <p
                      className="
                        mt-1
                        font-display
                        text-2xl
                        font-bold
                      "
                    >
                      +91 97913 58110
                    </p>

                  </div>

                </a>


                {/* PHONE 2 */}

                <a
                  href="tel:+917639514826"
                  className="
                    group
                    flex
                    items-center
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/10
                      text-white/50
                      transition
                      group-hover:border-ncs-gold/50
                      group-hover:text-ncs-gold-light
                    "
                  >
                    <Phone size={16} />
                  </span>

                  <div>

                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-white/25
                      "
                    >
                      Phone
                    </p>

                    <p
                      className="
                        mt-1
                        font-display
                        text-2xl
                        font-bold
                      "
                    >
                      +91 76395 14826
                    </p>

                  </div>

                </a>


                {/* HOURS */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                  "
                >

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      border
                      border-white/10
                      text-white/50
                    "
                  >
                    <Clock3 size={16} />
                  </span>

                  <div>

                    <p
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.2em]
                        text-white/25
                      "
                    >
                      Store
                    </p>

                    <p
                      className="
                        mt-1
                        font-display
                        text-2xl
                        font-bold
                      "
                    >
                      Contact for timings
                    </p>

                  </div>

                </div>

              </div>


              {/* WHATSAPP CTA */}

              <a
                href="https://wa.me/919791351110"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  ncs-button
                  ncs-button-gold
                  mt-10
                  w-full
                  sm:w-auto
                "
              >

                Message NCS PMV

                <ArrowUpRight size={16} />

              </a>

            </div>

          </div>

        </motion.div>


        {/* =====================================
            GOLD LOCATION STRIP
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-5
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-5
            gap-y-2
            border
            border-ncs-gold/10
            bg-gradient-to-r
            from-ncs-gold/[0.03]
            via-ncs-gold/[0.08]
            to-ncs-gold/[0.03]
            px-5
            py-4
            text-center
          "
        >

          <MapPin
            size={13}
            className="text-ncs-gold-light"
          />

          <span
            className="
              font-display
              text-sm
              font-bold
              uppercase
              tracking-[0.25em]
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-[#9a6a10]
              via-[#ffe08a]
              to-[#b27a16]
            "
          >
            PONNAMARAVATHI
          </span>

          <span className="text-ncs-gold/50">
            •
          </span>

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-ncs-gold-light/70
            "
          >
            TAMIL NADU
          </span>

        </motion.div>

      </div>

    </section>
  );
}