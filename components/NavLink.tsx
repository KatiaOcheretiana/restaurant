"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavLinkPropsType = {
  href: string;
  title: string;
};

export default function NavLink({ href, title }: NavLinkPropsType) {
  const path = usePathname();
  return (
    <Link href={href} className={path === href ? "active" : undefined}>
      {title}
    </Link>
  );
}
