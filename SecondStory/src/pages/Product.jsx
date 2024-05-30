import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles.css/Product.css"; // Assuming you have a CSS file for Product component
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Rating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      color={index < rating ? "#ffc107" : "#e4e5e9"}
    />
  ));

  return <>{stars}</>;
};

const Product = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="bg-container">
        <div className="card-outside">
          <h1 className="card-heading">Our Best Deal:</h1>
          <div className="card-inside">
            <div className="card-inside-padding">
              <div className="individual-product-details">
                <img
                  src="https://m.media-amazon.com/images/I/813aV273-rL._SL1500_.jpg"
                  className="individual-product-details-img"
                  alt="Product"
                />
              </div>
              <div className="individual-product-text-details">
                <div>
                  <div className="individual-product-details-heading-rating">
                    <h1 className="individual-product-details-heading">
                      It Ends With Us
                    </h1>
                    <div className="individual-product-details-rating">
                      <Rating rating={3} />
                    </div>
                  </div>
                  <p>
                    Author: Colleen Hoover{" "}
                    <span className="individual-product-Auther-span">||</span>{" "}
                    SKU: 9781501110368
                  </p>
                  <hr className="hr-line" />
                  <p>
                    It Ends with Us” by Colleen Hoover is a deeply moving novel
                    about the complexities of love faced with the harsh
                    realities of domestic violence. Following Lily Bloom’s
                    journey, the story reveals the resilience needed to confront
                    painful truths and make empowering choices. Hoover’s
                    narrative is raw, compelling, and ultimately a testament to
                    the strength of the human spirit in the pursuit of happiness
                    and self-respect.
                  </p>
                  <div className="individual-product-details-Price-Section">
                    <div>
                      <p className="individual-product-details-Price">
                        $20.00{" "}
                        <span className="individual-product-details-Price-small individual-product-details-text-decoration">
                          {" "}
                          $20.00
                        </span>
                      </p>
                      <button className="individual-product-details-button">
                        BUY NOW
                      </button>
                    </div>
                    <hr className="hr-line" />
                    <div>
                      <p className="individual-product-details-discount">
                        $10.00
                        <span className="individual-product-details-Price-small">
                          {" "}
                          /Month{" "}
                          <span className="individual-product-details-text-decoration">
                            {" "}
                            $15.00
                          </span>
                        </span>
                      </p>
                      <button className="individual-product-details-button">
                        BORROW
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={() => navigate("/listed-product")}>
          <ProductCard />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Product;
