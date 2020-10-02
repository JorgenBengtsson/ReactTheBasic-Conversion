import React from "react";
import Home from "./../../views/home/home";
import Products from "./../../views/products/products";

export default function Viewer(props) {
  switch (props.toDisplay) {
    case "home":
      return (
        <main>
          <Home />
        </main>
      );
    case "products":
      return (
        <main>
          <Products />
        </main>
      );
    default:
      break;
  }
}
