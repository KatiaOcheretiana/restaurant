"use client";

import { FormEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./Search.module.css";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={styles.box}>
      <form onSubmit={handleSearch}>
        <label htmlFor="search" className={styles["form-label"]}>
          <input
            className={styles.input}
            type="text"
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className={styles.button}>Search</button>
        </label>
      </form>
    </div>
  );
}
