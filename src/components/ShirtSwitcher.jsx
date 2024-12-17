import { useState } from "react";
import shirt from "../assets/tshirts/alien-tshirt.webp";
import ColorPicker from "./ColorPicker";
import styles from "../styles/ImageOptions.module.css";
export default function ShirtSwitcher() {
  const [selectedColor, setSelectedColor] = useState("blue");
  console.log("Available classes:", styles);
  return (
    <>
      <img
        src={shirt}
        alt="T-shirt"
        width={100}
        height={100}
        className={styles[selectedColor]}
      />
      <ColorPicker
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
      />
    </>
  );
}
