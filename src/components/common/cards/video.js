import Image from "next/image";

export const CardVideo = () => {
  return (
    <div className="w-[307] h-[170] rounded-lg">
      <Image
        className="object-cover rounded-lg w-full"
        src="/video.svg"
        alt="video"
        width={100}
        height={100}
      />
    </div>
  );
};
