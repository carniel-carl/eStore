import React, { useEffect, useState } from "react";

import "../assets/styles/SingleProduct.scss";
import QuantityInput from "../components/UI/QuantityInput";
import { useParams } from "react-router-dom";
import apiClient from "../utils/api-client";
import LinkWithIcon from "../components/UI/LinkWithIcon";
import { BsArrowLeft } from "react-icons/bs";
import { productContext } from "../context/Context";

const SingleProduct = () => {
  const { id } = useParams();

  const [selectedImage, setSelectedImage] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/${id}`)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [id]);

  const {
    state: { cart },
    addToBasket,
  } = productContext();

  let imagePreview =
    product.images?.length > 1 ? product.images[selectedImage] : product.images;

  return (
    <section>
      {loading && <p>Loading...</p>}
      {error && <em>{error}</em>}
      <nav className="back">
        <LinkWithIcon
          title="Go Back"
          icon={<BsArrowLeft />}
          to={`/products?category=${product.category}`}
          sidebar={true}
        />
      </nav>
      <div className="single_product">
        <div className="image_container">
          <div className="single_product_thumbnails">
            {product.images?.map((image, index) => {
              return (
                <img
                  src={image}
                  key={index}
                  className={selectedImage === index ? "selected_image" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              );
            })}
          </div>
          <img
            src={imagePreview}
            alt={product.title}
            className="single_product_display"
          />
        </div>
        <div className="text_container">
          <h2 className="single_product_title">{product.title}</h2>
          <p className="single_product_description">{product.description}</p>
          <p className="single_product_price">${product.price}</p>
          <h2 className="quantity_title">Quantity:</h2>
          <div className="quantity_input">
            <QuantityInput
              quantity={quantity}
              setQuantity={setQuantity}
              stock={product.stock}
            />
          </div>
          <button
            className="add_to_cart"
            onClick={() => addToBasket(product, quantity)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
