import { CustomButton, TextArea, TextField, ThemeSwitch } from "../common";

export const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-[843px] text-center">
        <h1 className="font-semibold text-3xl md:text-4xl  text-dark dark:text-white">
          Lets Connect
        </h1>
        <h2 className="font-medium text-lg md:text-xl  text-dark dark:text-white mt-4 mb-20">
          Get in touch with the right people at Appin7. We’re here to help.
        </h2>

        <div>
          <div className="flex gap-4 mb-4 flex-wrap md:flex-nowrap">
            <TextField className="mb-0" placeholder={"Name:"} />
            <TextField className="mb-0" placeholder={"Email:"} />
          </div>
          <div className="flex gap-4 mb-4 flex-wrap md:flex-nowrap">
            <TextField className="mb-0" placeholder={"Website"} />
            <TextField className="mb-0" placeholder={"Phone:"} />
          </div>
          <div>
            <TextArea placeholder={"Leave a message:"} />
          </div>
          <div className="flex justify-start mt-14">
            <CustomButton>Lets Talk</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
