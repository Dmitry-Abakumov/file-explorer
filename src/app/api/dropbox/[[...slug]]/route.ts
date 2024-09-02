import { NextResponse, NextRequest } from "next/server";
import { Dropbox } from "dropbox";
import { DropboxResponse } from "dropbox";

import { DropboxFiles } from "@/types";

const { DROPBOX_ACCESS_TOKEN } = process.env;

export const GET = async (
  req: NextRequest,
  context: { params: { slug: string[] } }
) => {
  const {
    params: { slug },
  } = context;

  const finalPath = `/${slug?.join("/")}`;

  const dbx = new Dropbox({
    accessToken: DROPBOX_ACCESS_TOKEN,
    fetch,
  });

  try {
    const response = (await dbx.filesListFolder({
      path: slug ? finalPath : "",
    })) as DropboxResponse<{ entries: DropboxFiles }>;

    console.log("SERVER_RESPONSE ", response);

    return NextResponse.json(response.result.entries);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
