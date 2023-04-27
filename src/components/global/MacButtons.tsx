import Image from "next/image";
import { useState } from "react";

const Button = ({
  color,
  isHovered,
}: {
  color: string;
  isHovered: boolean;
}) => (
  <div className={`rounded-full w-8 h-8 ${color}`}>
    {isHovered && (
      <Image src={`/icons/mac/${color.split("-")[2]}.svg`} alt="" />
    )}
  </div>
);

const MacButtons = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex gap-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button isHovered={isHovered} color="bg-mac-red" />
      <Button isHovered={isHovered} color="bg-mac-yellow" />
      <Button isHovered={isHovered} color="bg-mac-green" />
    </div>
  );
};

export default MacButtons;
