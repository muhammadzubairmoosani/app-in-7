import Link from "next/link";

export const CardHorizontal = ({ link, bgColor = "bg-white" }) => {
  return (
    <div
      className={`w-full max-w-[630px] p-8 rounded-lg overflow-hidden  border-2 border-light-gray flex flex-col items-center justify-center bg-${bgColor}`}
    >
      <h2 className="w-full text-xl font-bold text-dark mb-5">
        How does Appin7 work?
      </h2>
      <h2 className="w-full text-xl font-medium text-dark">
        Appin7 by Nexovia Digital uses advanced technologies to extract the
        content and features from your website and transform them into a mobile
        app.
      </h2>

      {link && (
        <Link href={link} className="mt-6 bg-transparent w-full text-primary">
          Chat now
        </Link>
      )}
    </div>
  );
};
