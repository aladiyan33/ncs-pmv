import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/919791351110?text=" +
  encodeURIComponent(
    "Hi NCS PMV 👋 I would like to know more about your sports products."
  );

const phoneUrl = "tel:+919791351110";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030303]">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#0759B8]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#D6A52C]/10 blur-[120px]" />

      <div className="ncs-container relative py-16 sm:py-20">
        {/* Main footer */}
        <div className="grid gap-12 md:grid-cols-[1.4fr_0.8fr_0.9fr_1.1fr]">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollTo("home")}
              className="group text-left"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center border border-ncs-gold/50 bg-black">
                  <span className="font-display text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#fff1a8] via-[#d6a52c] to-[#8b5f0b]">
                    NCS
                  </span>
                </div>

                <div>
                  <p className="font-display text-2xl font-black tracking-tight text-white">
                    NEW CHAMPION
                  </p>
                  <p className="text-[9px] font-bold tracking-[0.28em] text-ncs-gold">
                    SPORTS & WEARS
                  </p>
                </div>
              </div>
            </button>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Sportswear, equipment and training essentials for athletes,
              teams and everyday performers in Ponnamaravathy.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/70">
              <ShieldCheck size={15} className="text-ncs-gold" />
              Built for the game
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-ncs-gold">
              Explore
            </p>

            <div className="space-y-3">
              {[
                ["Home", "home"],
                ["Sports", "sports"],
                ["Shop", "shop"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                >
                  <span>{label}</span>
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-ncs-gold">
              Sports
            </p>

            <div className="grid grid-cols-2 gap-y-3 text-sm text-white/55">
              <span>Cricket</span>
              <span>Football</span>
              <span>Kabaddi</span>
              <span>Badminton</span>
              <span>Basketball</span>
              <span>Fitness</span>
              <span>Athletic</span>
              <span>Accessories</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-[10px] font-black uppercase tracking-[0.25em] text-ncs-gold">
              Contact
            </p>

            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-ncs-gold"
                />

                <div>
                  <p className="text-sm font-bold text-white">
                    Ponnamaravathy, Pudukottai
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Near Amala Annai Higher Secondary School
                    <br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <a
                href={phoneUrl}
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Phone size={17} className="text-ncs-gold" />
                +91 97913 58110
              </a>

              <a
                href="tel:+917639514826"
                className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
              >
                <Phone size={17} className="text-ncs-gold" />
                +91 76395 14826
              </a>
            </div>

            <div className="mt-7 flex gap-3">
              <motion.a
                whileHover={{ y: -3 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 items-center gap-2 border border-ncs-gold/40 bg-ncs-gold px-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-ncs-gold-light"
              >
                <MessageCircle size={16} />
                WhatsApp
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href={phoneUrl}
                className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.03] text-white transition hover:border-ncs-gold hover:text-ncs-gold"
                aria-label="Call NCS PMV"
              >
                <Phone size={17} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-ncs-gold/40 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} New Champion Sports & Wears. All
            rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span>PONNAMARAVATHI</span>
            <span className="text-ncs-gold">•</span>
            <span>TAMIL NADU</span>
          </div>

          <div className="flex items-center gap-2">
            <span>PLAY.</span>
            <span className="text-ncs-gold">TRAIN.</span>
            <span>PERFORM.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}