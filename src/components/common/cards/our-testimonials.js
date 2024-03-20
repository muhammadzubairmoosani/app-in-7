import Image from "next/image";

export const CardOurTestimonials = ({ item }) => (
  <div
    className={`w-full max-w-[443px] p-10 px-6 rounded-lg overflow-hidden bg-light-gray`}
  >
    <Image
      className="ml-8 mb-10"
      src={item.image}
      alt="Our Testimonials"
      width={70}
      height={70}
    />

    <Image src="/quotes.svg" alt="Our Testimonials" width={25} height={25} />

    <h2 className="text-[20px] mt-4 mb-6 text-gray">{item.title}</h2>

    <div className="w-full flex items-center ">
      <Image
        className="mr-4"
        src={item.avatar}
        alt="Avatar"
        width={70}
        height={70}
      />
      <div>
        <p className="text-2xl text-black font-semibold">{item.username}</p>
        <p className="text-xl text-gray font-medium">{item.userTitle}</p>
      </div>
    </div>
  </div>
);
