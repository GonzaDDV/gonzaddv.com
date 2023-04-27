import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

import clsxm from "@/utils/clsxm";

const WithLabel = ({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col flex-1">
      <label className="text-2xl" htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
};

interface InputProps {
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  options?: RegisterOptions<FieldValues, string>;
  errors: any;
  type?: React.HTMLInputTypeAttribute;
}
const ContactInput = ({
  label,
  id,
  register,
  options,
  errors,
  type = "text",
}: InputProps) => {
  return (
    <WithLabel label={label} htmlFor={id}>
      <input
        id={id}
        type={type}
        className={clsxm([
          "border-black border-2 rounded-sm p-2 text-xl pb-1 transition-colors",
          errors[id] && "border-red-500",
        ])}
        {...register(id, options)}
      />
    </WithLabel>
  );
};

export { ContactInput, WithLabel };
