import { motion } from "framer-motion";

const MouseAnimation = () => {
  return (
    <svg
      width="53"
      height="80"
      viewBox="0 0 53 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hidden md:block"
    >
      <rect
        x="2.85715"
        y="77.1428"
        width="74.2857"
        height="46.4599"
        rx="23.2299"
        transform="rotate(-90 2.85715 77.1428)"
        stroke="#AEAEAE"
        strokeWidth="5.7143"
      />
      <motion.rect
        x="25.4004"
        y="27.8"
        width="12.8"
        height="8.00005"
        rx="4.00003"
        fill="#AEAEAE"
        initial={{ x: -5, y: 0, rotate: -90, opacity: 1 }}
        animate={{ x: -5, y: 15, opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 2,
          repeat: Infinity,
        }}
      />
    </svg>
  );
};

export default MouseAnimation;
