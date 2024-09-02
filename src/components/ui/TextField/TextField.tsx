import { IoIosSearch } from "react-icons/io";

import { cn } from "@/utils";

import { TextFieldProps } from "./types";

export const TextField: React.FC<TextFieldProps> = ({
  label,
  labelClassName = "",
  inputClassName = "",
  ...otherProps
}) => {
  return (
    <label
      className={cn(
        "relative flex flex-col gap-[5px] w-[350px]",
        labelClassName
      )}
    >
      <span className="text-[14px] ml-[30px] text-yellow-400">{label}</span>
      <input
        {...otherProps}
        className={cn(
          "h-[48px] border-[1px] border-solid border-black rounded-[8px] pl-[30px] placeholder:text-gray-400",
          inputClassName
        )}
      />

      <IoIosSearch
        size="25"
        className="absolute left-[6px] top-[50%] text-yellow-400"
      />
    </label>
  );
};
