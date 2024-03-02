"use client";

import Link from "next/link";
import React from "react";
import style from "./activeLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink: React.FC<Props> = ({ path, text }) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`${style.link} ${pathName === path && style["active-link"]}`}
    >
      {text}
    </Link>
  );
};
