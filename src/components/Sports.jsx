import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MoveUpRight,
  CircleDot,
  Dumbbell,
  Trophy,
  Volleyball,
  Zap,
} from "lucide-react";

const sports = [
  {
    id: "cricket",
    name: "Cricket",
    category: "Cricket",
    number: "01",
    description: "Bats, balls, protection & training gear",
    icon: CircleDot,
    accent: "gold",
    tag: "BAT • BALL • TRAIN",
  },
  {
    id: "football",
    name: "Football",
    category: "Football",
    number: "02",
    description: "Football gear, boots & protection",
    icon: Trophy,
    accent: "blue",
    tag: "PLAY • ATTACK • WIN",
  },
  {
    id: "kabaddi",
    name: "Kabaddi",
    category: "Kabaddi",
    number: "03",
    description: "Match gear, training essentials & support",
    icon: Zap,
    accent: "gold",
    tag: "RAID • TACKLE • WIN",
  },
  {
    id: "badminton",
    name: "Badminton",
    category: "Badminton",
    number: "04",
    description: "Rackets, shuttles & accessories",
    icon: Volleyball,
    accent: "blue",
    tag: "SMASH • SPEED • CONTROL",
  },
  {
    id: "basketball",
    name: "Basketball",
    category: "Basketball",
    number: "05",
    description: "Basketballs, shoes & court equipment",
    icon: Trophy,
    accent: "gold",
    tag: "COURT • SHOOT • SCORE",
  },
  {
    id: "fitness",
    name: "Fitness",
    category: "Fitness",
    number: "06",
    description: "Training, gym & performance essentials",
    icon: Dumbbell,
    accent: "blue",
    tag: "TRAIN • BUILD • PERFORM",
  },
];

export default function Sports({ onSportSelect }) {
  const handleSportClick = (category) => {
    if (onSportSelect) {
      onSportSelect(category);
      return;
    }

    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="sports"
      className="relative overflow-hidden bg-[#050505] py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Gold glow */}
        <motion.div
          animate={{
            opacity: [0.04, 0.09, 0.04],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-ncs-gold blur-[140px]"
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-ncs-blue blur-[140px]"
        />
      </div>

      <div className="ncs-container relative">
        {/* =====================================================
            HEADER
            ===================================================== */}

        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-ncs-gold" />

              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-ncs-gold">
                Choose your arena
              </span>
            </div>

            <h2 className="font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.04em] text-white sm:text-8xl lg:text-9xl">
              GAME
              <br />

              <span className="text-white/[0.13]">
                ON.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="max-w-md"
          >
            <p className="text-sm leading-7 text-white/45">
              Whatever your arena, NCS PMV brings the equipment,
              apparel and training essentials to keep you performing.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-px w-12 bg-ncs-gold/60" />

              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/30">
                Select your sport
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SPORTS GRID
            ===================================================== */}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sports.map((sport, index) => {
            const Icon = sport.icon;

            const isGold = sport.accent === "gold";

            return (
              <motion.button
                key={sport.id}
                type="button"
                onClick={() => handleSportClick(sport.category)}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                className="group relative min-h-[285px] overflow-hidden border border-white/[0.09] bg-[#0a0a0c] p-6 text-left transition-colors duration-500 hover:border-ncs-gold/50 sm:p-8"
              >
                {/* =================================================
                    CARD GRID
                    ================================================= */}

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />

                {/* =================================================
                    NUMBER
                    ================================================= */}

                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="pointer-events-none absolute -right-2 -top-5 font-display text-[110px] font-black leading-none tracking-[-0.08em] text-white/[0.035] transition-all duration-700 group-hover:text-white/[0.075]"
                >
                  {sport.number}
                </motion.span>

                {/* =================================================
                    GLOW
                    ================================================= */}

                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-[80px] transition-all duration-700 group-hover:scale-125 ${
                    isGold
                      ? "bg-ncs-gold/20"
                      : "bg-ncs-blue/25"
                  } opacity-0 group-hover:opacity-100`}
                />

                {/* =================================================
                    ICON
                    ================================================= */}

                <motion.div
                  whileHover={{
                    rotate: isGold ? -6 : 6,
                    scale: 1.08,
                  }}
                  className={`relative z-10 flex h-12 w-12 items-center justify-center border transition-all duration-500 ${
                    isGold
                      ? "border-ncs-gold/30 text-ncs-gold group-hover:border-ncs-gold group-hover:bg-ncs-gold group-hover:text-black"
                      : "border-ncs-blue/40 text-ncs-blueLight group-hover:border-ncs-blueLight group-hover:bg-ncs-blueLight group-hover:text-white"
                  }`}
                >
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                  />
                </motion.div>

                {/* =================================================
                    SPORT CONTENT
                    ================================================= */}

                <div className="relative z-10 mt-12">
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`text-[8px] font-black uppercase tracking-[0.22em] ${
                        isGold
                          ? "text-ncs-gold"
                          : "text-ncs-blueLight"
                      }`}
                    >
                      {sport.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-ncs-gold-light sm:text-5xl">
                    {sport.name}
                  </h3>

                  <p className="mt-3 max-w-[235px] text-xs leading-5 text-white/40">
                    {sport.description}
                  </p>
                </div>

                {/* =================================================
                    ARROW
                    ================================================= */}

                <motion.div
                  whileHover={{
                    rotate: 45,
                  }}
                  className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center border border-white/10 text-white/35 transition-all duration-500 group-hover:border-ncs-gold group-hover:bg-ncs-gold group-hover:text-black"
                >
                  <MoveUpRight size={18} />
                </motion.div>

                {/* =================================================
                    CLICK LABEL
                    ================================================= */}

                <div className="absolute bottom-8 left-8 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.22em] text-white/60">
                      View gear
                    </span>

                    <ArrowUpRight
                      size={11}
                      className="text-ncs-gold"
                    />
                  </div>
                </div>

                {/* =================================================
                    BOTTOM GOLD LINE
                    ================================================= */}

                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-ncs-gold via-ncs-goldLight to-transparent"
                />

                {/* =================================================
                    CORNER MARKS
                    ================================================= */}

                <span className="absolute left-0 top-0 h-5 w-px bg-ncs-gold/0 transition-all duration-500 group-hover:bg-ncs-gold" />

                <span className="absolute left-0 top-0 h-px w-5 bg-ncs-gold/0 transition-all duration-500 group-hover:bg-ncs-gold" />

                <span className="absolute bottom-0 right-0 h-5 w-px bg-ncs-gold/0 transition-all duration-500 group-hover:bg-ncs-gold" />

                <span className="absolute bottom-0 right-0 h-px w-5 bg-ncs-gold/0 transition-all duration-500 group-hover:bg-ncs-gold" />
              </motion.button>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM SPORTS STRIP
            ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-4 border border-white/[0.07] bg-[#080809]"
        >
          <div className="flex min-h-[58px] items-center overflow-hidden">
            <div className="flex min-w-max animate-[marquee_25s_linear_infinite] items-center gap-8 px-6">
              {[
                "CRICKET",
                "FOOTBALL",
                "KABADDI",
                "BADMINTON",
                "BASKETBALL",
                "FITNESS",
                "ATHLETIC",
                "VOLLEYBALL",
                "CRICKET",
                "FOOTBALL",
                "KABADDI",
                "BADMINTON",
              ].map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-8"
                >
                  <span className="font-display text-sm font-bold tracking-[0.22em] text-white/25">
                    {item}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-ncs-gold" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            FOOT NOTE
            ===================================================== */}

        <div className="mt-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/20">
            Tap any sport to explore available gear
          </p>

          <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.22em] text-ncs-gold/60">
            <span className="h-1.5 w-1.5 rounded-full bg-ncs-gold" />
            NCS PMV
          </div>
        </div>
      </div>

      {/* =======================================================
          MARQUEE ANIMATION
          ======================================================= */}

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}