export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};
