import { SetStateAction, Dispatch } from "react";

export type ToolbarProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};
