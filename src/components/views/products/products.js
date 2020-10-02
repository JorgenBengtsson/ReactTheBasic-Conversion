import React from "react";

export default function Products() {
  return (
    <>
      <h1>Products</h1>
      <section>
        <div className="product">
          <h2>Product 1</h2>
          <p className="description">
            Phasellus ante mauris, tempus ut libero ac, feugiat interdum lectus.
            Quisque ac tortor ipsum. Duis non mollis urna. Etiam facilisis est
            eget sapien varius varius.
          </p>
          <p className="order">
            <button>Beställ</button>
          </p>
        </div>
        <div className="product">
          <h2>Product 2</h2>
          <p className="description">
            Etiam facilisis est eget sapien varius varius. Duis non mollis urna.
            Etiam facilisis est eget sapien varius varius. Phasellus ante
            mauris, tempus ut libero ac, feugiat interdum lectus. Quisque ac
            tortor ipsum.
          </p>
          <p className="order">
            <button>Beställ</button>
          </p>
        </div>
        <div className="product">
          <h2>Product 3</h2>
          <p className="description">
            Suspendisse potenti. Vivamus sit amet cursus ligula, nec ornare
            dolor. Phasellus ante mauris, tempus ut libero ac, feugiat interdum
            lectus.
          </p>
          <p className="order">
            <button>Beställ</button>
          </p>
        </div>
        <div className="product">
          <h2>Product 4</h2>
          <p className="description">
            Donec placerat erat ac felis fringilla, vitae vestibulum lacus
            dapibus. Suspendisse potenti. Vivamus sit amet cursus ligula, nec
            ornare dolor.
          </p>
          <p className="order">
            <button>Beställ</button>
          </p>
        </div>
      </section>
    </>
  );
}
