import React, { useState } from "react";

import "../assets/styles/SingleProduct.scss";
import QuantityInput from "../components/UI/QuantityInput";

const product = {
  id: 1,
  title: "Product Title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
  price: 9.9,
  images: [
    "https://via.placeholder.com/500x500?text=Product+Image+1",
    "https://via.placeholder.com/500x500?text=Product+Image+2",
    "https://via.placeholder.com/500x500?text=Product+Image+3",
    "https://via.placeholder.com/500x500?text=Product+Image+4",
  ],
  stock: 10,
};

const SingleProduct = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="single_product">
      <div className="image_container">
        <div className="single_product_thumbnails">
          {product.images.map((image, index) => {
            return (
              <img
                src={image}
                key={index}
                className={selectedImage === index && "selected_image"}
                onClick={() => setSelectedImage(index)}
              />
            );
          })}
        </div>

        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="single_product_display"
        />
      </div>
      <div className="text_container">
        <h2 className="single_product_title">{product.title}</h2>
        <p className="single_product_description">{product.description}</p>
        <p className="single_product_price">${product.price.toFixed(2)}</p>
        <h2 className="quantity_title">Quantity:</h2>
        <div className="quantity_input">
          <QuantityInput />
        </div>

        <button className="add_to_cart">Add to cart</button>
      </div>
    </section>
  );
};

export default SingleProduct;
