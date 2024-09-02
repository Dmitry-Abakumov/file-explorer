"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/utils";

import data from "@/data/layout.json";

const { navLinks } = data;

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              href={path}
              className={cn("text-2xl", {
                "text-yellow-500": pathname === path,
              })}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
