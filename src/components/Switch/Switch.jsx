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
      className="switch w-40 h-[100px] bg-[rgba(255,255,255,0.4)] flex justify-start cursor-pointer p-2.5 rounded-[50px]"
      data-isOn={isOn}
      onClick={toggleSwitch}
    >
      <motion.div
        className="w-20 h-20 bg-[white] rounded-[40px]"
        layout
        transition={spring}
      />
    </div>
  );
}
