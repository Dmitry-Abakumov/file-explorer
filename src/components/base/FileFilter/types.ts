import { Dispatch, SetStateAction } from "react";

export type FileFilterProps = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
};
