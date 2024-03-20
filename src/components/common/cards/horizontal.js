import Link from "next/link";

export const CardHorizontal = ({
  item,
  link,
  linkText = "Chat now",
  bgColor = "bg-white",
}) => (
  <div
    className={`w-full max-w-[630px] p-8 rounded-lg overflow-hidden  border-2 border-gray dark:bg-dark flex flex-col items-center justify-center ${bgColor}`}
  >
    <h2 className="w-full text-xl font-bold text-dark dark:text-light-gray mb-5">
      {item.title}
    </h2>
    <h2 className="w-full text-xl font-medium text-dark dark:text-light-gray">
      {item.subTitle}
    </h2>

    {link && (
      <Link
        href={link}
        className={`mt-6 bg-transparent w-full text-primary ${linkClassName}`}
      >
        {linkText}
      </Link>
    )}
  </div>
);
