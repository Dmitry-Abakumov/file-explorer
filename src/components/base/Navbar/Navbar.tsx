"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/utils";

import data from "@/data/layout.json";

const { navLinks } = data;

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        {navLinks.map(({ path, label }) => {
          const isActive =
            path === "/" ? pathname === path : pathname.startsWith(path);

          return (
            <li key={path}>
              <Link
                href={path}
                className={cn("text-2xl", {
                  "text-yellow-500": isActive,
                })}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
