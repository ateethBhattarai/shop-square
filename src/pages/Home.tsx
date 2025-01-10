import MaxWidthContainer from "@/components/manual/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { products } from "@/constant/product_data";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductsHome from "./products/ProductsHome";

const Home = () => {
  const responsiveSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <MaxWidthContainer>
        <div className="border-2 p-2 rounded-sm mx-4">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xl">Electronics</span>
            <Link
              to={"/test"}
              className="text-blue-600 cursor-pointer hover:underline font-semibold"
            >
              <Button variant={"ghost"} className="text-lg">
                See all...
              </Button>
            </Link>
          </div>
          <Slider {...responsiveSettings}>
            {products.map((product, index) => (
              <ProductsHome
                key={index}
                id={product.id}
                image={product.product_image}
                name={product.product_name}
                price={product.price}
              />
            ))}
          </Slider>
        </div>
      </MaxWidthContainer>
    </>
  );
};

export default Home;
