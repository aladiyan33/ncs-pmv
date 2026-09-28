import { motion } from "framer-motion";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export default function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/919791358110?text=" +
    encodeURIComponent(
      "Hi NCS PMV 👋 I would like to know more about your sports products."
    );

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.5,
        duration: 0.7,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        fixed
        bottom-6
        right-6
        z-40
        hidden
        sm:flex
        items-center
        gap-3
        border
        border-ncs-gold/30
        bg-black/80
        px-4
        py-3
        shadow-[0_15px_50px_rgba(0,0,0,0.4)]
        backdrop-blur-xl
        transition-colors
        hover:border-ncs-gold
      "
      aria-label="Contact NCS PMV on WhatsApp"
    >

      {/* ICON */}

      <span
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-ncs-gold
          text-black
        "
      >
        <MessageCircle size={17} />
      </span>


      {/* TEXT */}

      <span className="flex flex-col">

        <span
          className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-white/35
          "
        >
          Talk to us
        </span>

        <span
          className="
            mt-0.5
            font-display
            text-lg
            font-bold
            uppercase
            leading-none
          "
        >
          WhatsApp
        </span>

      </span>


      <ArrowUpRight
        size={14}
        className="ml-2 text-ncs-gold-light"
      />

    </motion.a>
  );
}