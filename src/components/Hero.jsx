import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

const sports = [
  "CRICKET",
  "FOOTBALL",
  "BADMINTON",
  "BASKETBALL",
  "VOLLEYBALL",
  "FITNESS",
];

export default function Hero() {
  return (
    <section
     id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >

      {/* =========================================
          BACKGROUND GRID
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "80px 80px",
        }}
      />


      {/* =========================================
          BLUE GLOW
      ========================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-180px]
          top-[15%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-ncs-blue
          blur-[180px]
          pointer-events-none
        "
      />


      {/* =========================================
          GOLD GLOW
      ========================================== */}

      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-200px]
          bottom-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-ncs-gold
          blur-[180px]
          opacity-[0.08]
          pointer-events-none
        "
      />


      {/* =========================================
          HUGE BACKGROUND NCS
      ========================================== */}

      <div
        className="
          absolute
          right-[-5vw]
          bottom-[-5vw]
          pointer-events-none
          select-none
        "
      >

        <span
          className="
            font-display
            font-black
            text-[38vw]
            leading-none
            tracking-[-0.08em]
            text-white/[0.025]
          "
        >
          NCS
        </span>

      </div>


      {/* =========================================
          MAIN CONTENT
      ========================================== */}

      <div
        className="
          ncs-container
          relative
          z-10
          min-h-[calc(100vh-78px)]
          grid
          lg:grid-cols-[1.1fr_0.9fr]
          gap-10
          items-center
          py-16
        "
      >

        {/* =====================================
            LEFT
        ====================================== */}

        <div>

          {/* TOP LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              items-center
              gap-3
              mb-8
            "
          >

            <span
              className="
                h-[1px]
                w-12
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
              New Champion Sports & Wears
            </span>

          </motion.div>


          {/* TITLE */}

          <div className="overflow-hidden">

            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-display
                text-[clamp(76px,10vw,160px)]
                font-black
                uppercase
                leading-[0.76]
                tracking-[-0.045em]
              "
            >
              PLAY.
            </motion.h1>

          </div>


          <div className="overflow-hidden">

            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-display
                text-[clamp(76px,10vw,160px)]
                font-black
                uppercase
                leading-[0.76]
                tracking-[-0.045em]
                text-transparent
                [-webkit-text-stroke:1px_rgba(255,255,255,0.85)]
              "
            >
              TRAIN.
            </motion.h1>

          </div>


          <div className="overflow-hidden">

            <motion.h1
              initial={{
                y: "110%",
              }}
              animate={{
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-display
                text-[clamp(76px,10vw,160px)]
                font-black
                uppercase
                leading-[0.76]
                tracking-[-0.045em]
                text-ncs-gold
              "
            >
              PERFORM.
            </motion.h1>

          </div>


          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.7,
            }}
            className="
              mt-9
              max-w-lg
              text-sm
              leading-7
              text-white/50
            "
          >
            Your game deserves the right gear.
            Discover sportswear, equipment and
            accessories for every move, every match
            and every training session.
          </motion.p>


          {/* BUTTONS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.85,
            }}
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >

            <a
              href="#shop"
              className="
                ncs-button
                ncs-button-gold
              "
            >
              Shop now

              <ArrowUpRight size={16} />
            </a>


            <a
              href="#sports"
              className="
                ncs-button
                ncs-button-outline
              "
            >
              Explore sports
            </a>

          </motion.div>


          {/* STORE INFO */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.1,
            }}
            className="
              mt-12
              flex
              items-center
              gap-8
              text-[10px]
              uppercase
              tracking-[0.18em]
              text-white/35
            "
          >

            <div
  className="
    flex
    items-center
    gap-3
    text-transparent
    bg-clip-text
    bg-gradient-to-r
    from-[#8b5f0b]
    via-[#f4d477]
    to-[#b77b16]
    font-bold
  "
>

  <span className="text-ncs-gold text-sm">
    ⌖
  </span>

  <span>
    PONNAMARAVATHI
  </span>

  <span className="text-ncs-gold">
    •
  </span>

  <span>
    PUDUKOTTAI,TAMIL NADU
  </span>

</div>

          </motion.div>

        </div>


        {/* =====================================
            RIGHT VISUAL
        ====================================== */}

        <div
          className="
            relative
            min-h-[560px]
            flex
            items-center
            justify-center
          "
        >

          {/* OUTER ROTATING RING */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[min(560px,80vw)]
              aspect-square
              rounded-full
              border
              border-white/[0.08]
            "
          >

            {/* GOLD DOT */}

            <span
              className="
                absolute
                left-1/2
                top-[-4px]
                h-2
                w-2
                -translate-x-1/2
                rounded-full
                bg-ncs-gold
                shadow-[0_0_25px_rgba(214,165,44,0.9)]
              "
            />

          </motion.div>


          {/* INNER ROTATING RING */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[min(400px,62vw)]
              aspect-square
              rounded-full
              border
              border-ncs-blue/30
              border-dashed
            "
          >

            <span
              className="
                absolute
                right-[-3px]
                top-1/2
                h-2
                w-2
                -translate-y-1/2
                rounded-full
                bg-ncs-blue-light
                shadow-[0_0_20px_rgba(22,128,255,0.9)]
              "
            />

          </motion.div>


          {/* CENTER GRAPHIC */}

          <motion.div
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-10
              w-[280px]
              h-[280px]
              sm:w-[350px]
              sm:h-[350px]
              rounded-full
              border
              border-white/10
              bg-gradient-to-br
              from-white/[0.06]
              to-transparent
              backdrop-blur-sm
              flex
              items-center
              justify-center
            "
          >

            {/* INNER GLOW */}

            <div
              className="
                absolute
                inset-[25px]
                rounded-full
                bg-ncs-blue/10
                blur-2xl
              "
            />


            {/* NCS */}

            <div className="relative text-center">

  {/* Crown */}

  <motion.div
    animate={{
      y: [0, -4, 0],
      filter: [
        "drop-shadow(0 0 4px rgba(214,165,44,.25))",
        "drop-shadow(0 0 14px rgba(214,165,44,.65))",
        "drop-shadow(0 0 4px rgba(214,165,44,.25))",
      ],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      mb-1
      text-3xl
      sm:text-4xl
      text-ncs-gold-light
    "
  >
    ♛
  </motion.div>


  {/* NCS */}

  <div className="relative overflow-hidden">

    <p
      className="
        font-display
        text-7xl
        sm:text-8xl
        font-black
        tracking-[-0.06em]
        text-transparent
        bg-clip-text
        bg-gradient-to-b
        from-[#fff1a8]
        via-[#d6a52c]
        to-[#8b5f0b]
      "
    >
      NCS
    </p>

    {/* Gold polish sweep */}

    <motion.div
      animate={{
        x: ["-120%", "120%"],
      }}
      transition={{
        duration: 2.8,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
      className="
        absolute
        inset-y-0
        w-1/3
        skew-x-[-20deg]
        bg-gradient-to-r
        from-transparent
        via-white/60
        to-transparent
        pointer-events-none
      "
    />

  </div>


  {/* Divider */}

  <div
    className="
      mx-auto
      mt-1
      h-[2px]
      w-20
      bg-gradient-to-r
      from-transparent
      via-ncs-gold
      to-transparent
    "
  />


  {/* KABADDI */}

  <p
    className="
      mt-3
      font-display
      text-xl
      sm:text-2xl
      font-bold
      tracking-[0.25em]
      text-transparent
      bg-clip-text
      bg-gradient-to-b
      from-[#fff1a8]
      via-[#d6a52c]
      to-[#9b6a10]
    "
  >
    SPORTS & WEARS
  </p>

</div>

          </motion.div>


          {/* FLOATING CRICKET */}

          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[2%]
              top-[15%]
              z-20
              border
              border-white/10
              bg-black/70
              px-4
              py-3
              backdrop-blur-xl
            "
          >

            <span
              className="
                block
                text-[8px]
                tracking-[0.25em]
                text-white/35
              "
            >
              SPORT 01
            </span>

            <span
              className="
                block
                mt-1
                font-display
                text-xl
                font-bold
              "
            >
              CRICKET
            </span>

          </motion.div>


          {/* FLOATING FOOTBALL */}

          <motion.div
            animate={{
              y: [10, -10, 10],
              rotate: [0, -4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[2%]
              bottom-[20%]
              z-20
              border
              border-white/10
              bg-black/70
              px-4
              py-3
              backdrop-blur-xl
            "
          >

            <span
              className="
                block
                text-[8px]
                tracking-[0.25em]
                text-white/35
              "
            >
              SPORT 02
            </span>

            <span
              className="
                block
                mt-1
                font-display
                text-xl
                font-bold
              "
            >
              KABADDI
            </span>

          </motion.div>


          {/* SMALL BLUE ACCENT */}

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className="
              absolute
              left-[15%]
              bottom-[17%]
              h-2
              w-2
              rounded-full
              bg-ncs-blue-light
            "
          />

        </div>

      </div>


      {/* =========================================
          BOTTOM SPORTS MARQUEE
      ========================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          border-t
          border-white/[0.08]
          bg-black/30
          backdrop-blur-sm
          overflow-hidden
        "
      >

        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            items-center
            gap-8
            py-4
          "
        >

          {[...sports, ...sports].map((sport, index) => (

            <div
              key={`${sport}-${index}`}
              className="
                flex
                items-center
                gap-8
              "
            >

              <span
                className="
                  font-display
                  text-sm
                  font-bold
                  tracking-[0.18em]
                  text-white/50
                "
              >
                {sport}
              </span>

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-ncs-gold
                "
              />

            </div>

          ))}

        </motion.div>

      </div>


      {/* SCROLL */}

      <motion.a
        href="#sports"
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[70px]
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/35
          sm:flex
        "
      >

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.3em]
          "
        >
          Scroll
        </span>

        <ArrowDown size={13} />

      </motion.a>

    </section>

    
  );
}
