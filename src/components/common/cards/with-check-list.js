import Image from "next/image";

const items = {
  points: ["point one", "point two", "point three"],
};

export const CardHowItHelpsYourECommerceStore = () => {
  return (
    <div className="w-full max-w-[420px] rounded-xl py-[50px] px-[20px] border-[1px] border-gray">
      <div className="flex items-center">
        <Image
          className="mr-6"
          src="/how_it_helps_1.svg"
          alt="how it helps your e-commerce store"
          width={24}
          height={24}
        />
        <p className="text-black text-xl font-medium">
          Stay ahead of the competitors
        </p>
      </div>

      <p className="text-black border-b-[1px] border-light-gray mt-5 mb-5 pb-5">
        Lorem ipsum dolor sit amet consectetur. Egestas nullam nunc faucibus
        purus scelerisque venenatis volutpat augue. Eu vel in nec egestas
        bibendum.
      </p>

      <div>
        {items.points.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
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
};
