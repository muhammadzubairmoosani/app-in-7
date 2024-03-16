import Image from "next/image";

export const Logo = ({ width = 150, height = 150 }) => (
  <Image src="/logo.svg" alt="AppIn7" width={width} height={height} />
);
