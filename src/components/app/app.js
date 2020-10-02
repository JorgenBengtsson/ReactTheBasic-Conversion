import React from "react";
import Header from "./../header/header";
import Viewer from "./viewer/viewer";

import "./app.css";

function App() {
  return (
    <>
      <Header />
      <Viewer toDisplay="home" />
      <aside>
        <section>
          <p className="sideNote Header">Side Note</p>
          <p className="sideNote Body">
            Donec placerat erat ac felis fringilla, vitae vestibulum lacus
            dapibus. Suspendisse potenti. Vivamus sit amet cursus ligula, nec
            ornare dolor. Phasellus ante mauris, tempus ut libero ac, feugiat
            interdum lectus. Quisque ac tortor ipsum. Duis non mollis urna.
            Etiam facilisis est eget sapien varius varius.
          </p>
        </section>
        <section>
          <p className="sideNote Header">Side Note</p>
          <p className="sideNote Body">
            Donec placerat erat ac felis fringilla, vitae vestibulum lacus
            dapibus. Suspendisse potenti. Vivamus sit amet cursus ligula, nec
            ornare dolor. Phasellus ante mauris, tempus ut libero ac, feugiat
            interdum lectus. Quisque ac tortor ipsum. Duis non mollis urna.
            Etiam facilisis est eget sapien varius varius.
          </p>
        </section>
        <div id="signUpForm">
          <h1>Newsletter</h1>
          <input id="epost" />
          <button id="signUpButton">Sign up</button>
        </div>
      </aside>
    </>
  );
}

export default App;
