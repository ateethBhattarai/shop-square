import MaxWidthContainer from "@/components/manual/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { getcategories, getProduct } from "@/server/productApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductsHome from "./products/ProductsHome";
import PageNotFound from "./not-found/PageNotFound";

export interface ProductAPI {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

const Home = () => {
  const [products, setProducts] = useState<undefined | ProductAPI[]>(undefined);
  const [categories, setCategories] = useState<undefined | string[]>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProduct();
      setCategories(await getcategories());
      setProducts(data);
    };

    fetchData();
  }, []);

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

  if (!products) return <PageNotFound />;

  return (
    <>
      <MaxWidthContainer>
        {categories?.map((category) => (
          <div className=" p-2 mb-10 rounded-sm mx-4" key={category}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-xl">
                {category.toLocaleUpperCase()}
              </span>
              <Link
                to={`/all/${category}`}
                className="text-blue-600 cursor-pointer hover:underline font-semibold"
              >
                <Button variant={"ghost"} className="text-lg">
                  See all...
                </Button>
              </Link>
            </div>
            <Slider {...responsiveSettings}>
              {products
                ?.filter((product) => product.category == category)
                .map((product, index) => (
                  <ProductsHome
                    key={index}
                    id={product.id}
                    image={product.image}
                    name={product.title}
                    price={product.price}
                  />
                ))}
            </Slider>
          </div>
        ))}
      </MaxWidthContainer>
    </>
  );
};

export default Home;
