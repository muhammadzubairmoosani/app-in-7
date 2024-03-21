import Image from "next/image";

const items = {
  points: ["point one", "point two", "point three"],
};

export const CardHowItHelpsYourECommerceStore = ({ item }) => (
  <div
    key={item.title}
    className="w-full  max-w-[411px] rounded-xl py-[30px] px-[15px] border-[1px] border-gray"
  >
    <div className="flex items-center">
      <Image
        className="mr-6"
        src={item.image}
        alt="how it helps your e-commerce store"
        width={24}
        height={24}
      />
      <p className="text-black text-xl font-medium">{item.title}</p>
    </div>

    <p className="text-black border-b-[1px] border-light-gray mt-5 mb-5 pb-5">
      {item.subTitle}
    </p>

    <div>
      {items.points.map((item) => (
        <div key={item} className="flex items-center mb-4">
          <dev className="flex items-center mr-2">
            <Image
              className="mr-3"
              src="/check-solid.svg"
              alt="check"
              width={15}
              height={15}
              priority
            />
            <span className="text-gray-700 text-dark text-xl">{item}</span>
          </dev>
        </div>
      ))}
    </div>
  </div>
);
