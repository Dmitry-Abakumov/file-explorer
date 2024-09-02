import { FileBrowser } from "@/sections";

import { getDropboxData } from "@/utils";

import { DropboxFiles } from "@/types";

export default async function FileExplorerPage({
  params: { slug },
}: {
  params: { slug: string[] };
}) {
  const path = slug ? `/${slug.join("/")}` : "";

  const filesData = (await getDropboxData(path)) as DropboxFiles;

  return <FileBrowser filesData={filesData} />;
}
