export const CardChooseALocation = ({ items = [] }) =>
  items.map((item) => (
    <div
      key={item.value}
      className={`w-full md:w-[257px] h-[112px] bg-white dark:bg-dark flex justify-center items-center flex-col gap-3`}
    >
      <h2 className="text-2xl font-semibold text-dark dark:text-light-gray">
        {item.title}
      </h2>
      <p className="text-primary text-xl">{item.value}</p>
    </div>
  ));
