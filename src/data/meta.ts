import { Metadata } from "next";

const meta: Metadata = {
  title: "File explorer",
  description: "A simple application to view dropbox files",
  icons: {
    icon: [
      {
        url: "/meta/favicon.ico",
      },
      {
        url: "/meta/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/meta/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/meta/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/meta/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: {
      url: "/meta/favicon.ico",
    },
    apple: {
      url: "/meta/apple-touch-icon.png",
    },

    other: {
      url: "/meta/apple-touch-icon.png",
    },
  },
};

export default meta;
