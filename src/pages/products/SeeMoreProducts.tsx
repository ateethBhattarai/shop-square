import MaxWidthContainer from "@/components/manual/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { getProductsByCategory } from "@/server/productApi";
import { ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductAPI } from "../Home";

const SeeMoreProducts = () => {
  const [product, setProduct] = useState<ProductAPI[]>([]);

  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      return;
    }

    const fetchProductData = async () => {
      try {
        const fetchedProducts = await getProductsByCategory(category);
        setProduct(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProductData();
  }, [category]);

  return (
    <MaxWidthContainer>
      <span className="font-bold text-xl">{category?.toLocaleUpperCase()}</span>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2">
        {product.map((item) => (
          <Link to={`/product/${item.id}`}>
            <div className="mt-4 flex flex-col items-center border-2 rounded-md">
              <img
                src={item.image}
                alt="product-img"
                className="w-64 h-60 object-fill p-1"
              />
              <div className="px-10 font-bold">
                <span className="text-lg line-clamp-2">{item.title}</span>
                <div className=" my-4 w-full flex items-center justify-between">
                  <span className="text-base font-semibold text-gray-800">
                    £{item.price}
                  </span>
                  <Button>
                    <ShoppingCartIcon />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MaxWidthContainer>
  );
};

export default SeeMoreProducts;
