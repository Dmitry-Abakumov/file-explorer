"use client";

import { ChangeEvent } from "react";

import { TextField } from "@/components/ui/TextField";

import { fields } from "./fields";

import { FileFilterProps } from "./types";

export const FileFilter: React.FC<FileFilterProps> = ({
  setFilter,
  filter,
}) => {
  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFilter(value);
  };

  return (
    <div>
      <TextField {...fields.filter} onChange={handleChange} value={filter} />
    </div>
  );
};
