export type DropboxFile = {
  [".tag"]: string;
  id: string;
  name: string;
  path_display: string;
};

export type DropboxFiles = DropboxFile[];
