import { useState } from "react";
import { motion } from "framer-motion";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function Switch() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div
      className="switch w-12 h-6 bg-gray-900 dark:bg-white flex cursor-pointer p-1  rounded-3xl"
      data-isOn={isOn}
      onClick={toggleSwitch}
    >
      <motion.div
        className="handle w-4 h-4 bg-white rounded-[40px] p-2"
        layout
        transition={spring}
      />
    </div>
  );
}
