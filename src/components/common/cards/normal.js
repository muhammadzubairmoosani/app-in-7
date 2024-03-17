import Image from "next/image";

export const CardNormal = ({ items = [] }) =>
  items.map((item) => (
    <div
      key={item.title}
      className="w-full max-w-[430px] overflow-hidden shadow-sm p-6"
    >
      <div className="flex justify-center">
        <Image
          className="text-center"
          src={item.image}
          alt="Rocket launching from a computer screen"
          width={150}
          height={150}
        />
      </div>

      <h2 className="text-xl font-semibold text-dark my-4">{item.title}</h2>

      <p className="text-gray text-xl">{item.subTitle}</p>
    </div>
  ));
