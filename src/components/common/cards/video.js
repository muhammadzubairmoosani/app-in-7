import Image from "next/image";

export const CardVideo = () => {
  return (
    <div className="relative w-full rounded-lg">
      <Image
        className="absolute object-cover w-[307px] rounded-lg"
        src="/video.svg"
        alt="video"
        width={100}
        height={100}
      />
    </div>
  );
};
