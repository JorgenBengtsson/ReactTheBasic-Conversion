import React from "react";
import HeaderItem from "./headerItem/headerItem";

import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <HeaderItem text="Home" url="" />
          <HeaderItem text="Products" utl="" />
          <HeaderItem text="About" url="" />
        </ul>
      </nav>
    </header>
  );
}
