"use client";

import { useRouter, usePathname } from "next/navigation";
import { LuFolderUp } from "react-icons/lu";
import { IoMdCloudUpload } from "react-icons/io";
import { toast } from "react-toastify";

import { FileFilter } from "../FileFilter";

import { Button } from "@/components/ui";

import data from "@/data/file-explorer-page.json";

import { ToolbarProps } from "./types";

import "react-toastify/dist/ReactToastify.css";

const { lvlUpBtnName, uploadFileBtnName } = data;

export const Toolbar: React.FC<ToolbarProps> = ({ setFilter, filter }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isFolderFirst = pathname === "/file-explorer";

  const handleClick = () => {
    if (isFolderFirst) return;

    router.back();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <FileFilter setFilter={setFilter} filter={filter} />

      <div className="flex items-center gap-2">
        <Button
          onClick={handleClick}
          className="flex items-center gap-2"
          disabled={isFolderFirst}
        >
          {lvlUpBtnName.toUpperCase()}
          <LuFolderUp size="30" />
        </Button>

        <Button
          className="flex items-center gap-2"
          onClick={() => toast.warn("This feature is not implemented yet.")}
        >
          {uploadFileBtnName.toUpperCase()}
          <IoMdCloudUpload size="30" />
        </Button>
      </div>
    </div>
  );
};
