"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import { Toolbar, FileList } from "../../components/base";

import data from "@/data/file-explorer-page.json";

const { emptyFolderMessage } = data;

import { FileBrowserProps } from "./types";

import "react-toastify/dist/ReactToastify.css";

export const FileBrowser: React.FC<FileBrowserProps> = ({ filesData }) => {
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    if (!filesData)
      toast.error(
        "Ooops, something went wrong. Please, try to reload the page."
      );
  }, [filesData]);

  const filteredFilesData = filesData?.filter(({ name }) =>
    name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  const isFolderEmpty = filesData?.length === 0;

  return (
    <section className="flex flex-col items-center justify-center gap-2">
      {filesData && (
        <>
          <Toolbar setFilter={setFilter} filter={filter} />
          <FileList filesData={filteredFilesData} />
        </>
      )}

      {isFolderEmpty && (
        <p className="text-yellow-500 text-2xl">{emptyFolderMessage}</p>
      )}
    </section>
  );
};
