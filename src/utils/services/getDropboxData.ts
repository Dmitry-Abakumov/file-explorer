import { DropboxFiles } from "@/types/dropbox";

const BASE_URL = "https://aquamarine-nougat-af53aa.netlify.app/file-explorer";

export const getDropboxData = async (
  path: string
): Promise<DropboxFiles | null> => {
  try {
    const response = await fetch(`${BASE_URL}/api/dropbox${path}`);

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return data as DropboxFiles;
  } catch {
    return null;
  }
};
