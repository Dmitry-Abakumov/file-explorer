import { File } from "@/components/ui";

import { FileListProps } from "./types";

export const FileList: React.FC<FileListProps> = ({ filesData }) => {
  return (
    <ul className="flex flex-col">
      {filesData?.map((f) => (
        <File key={f.id} {...f} />
      ))}
    </ul>
  );
};
