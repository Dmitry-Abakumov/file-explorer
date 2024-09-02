import { cn } from "@/utils";

import { ButtonProps } from "./types";

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  className = "",
  disabled = false,
  ...otherProps
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      {...otherProps}
      className={cn(
        "border-[1px] border-solid border-black px-[10px] py-[5px] rounded-[5px] bg-yellow-400",
        className,
        { "bg-yellow-100 text-gray-400": disabled }
      )}
    >
      {children}
    </button>
  );
};
