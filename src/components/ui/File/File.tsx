import Link from "next/link";

import { FcFile, FcFolder } from "react-icons/fc";

import { DropboxFile as FileProps } from "@/types";

export const File: React.FC<FileProps> = (file) => {
  const { name, path_display } = file;

  const isFolder = file[".tag"] === "folder";

  return (
    <li>
      <Link
        href={isFolder ? `/file-explorer/${path_display}` : "#"}
        className="flex items-center gap-2"
      >
        {isFolder ? <FcFolder size="30px" /> : <FcFile size="30px" />}
        {name}
      </Link>
    </li>
  );
};
