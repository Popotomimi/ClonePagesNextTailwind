"use client";

import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    console.log("Navbar foi montada");
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/amazon">Amazon</Link>
        </li>
        <li>
          <Link href="/facebook">Facebook</Link>
        </li>
        <li>
          <Link href="/spotify">Spotify</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
