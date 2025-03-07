import MaxWidthContainer from "@/components/manual/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { getProductByID } from "@/server/productApi";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductAPI } from "../Home";
import ProductNotFound from "../not-found/ProductNotFound";

const ProductDescription = () => {
  const [product, setProduct] = useState<ProductAPI | undefined>(undefined);

  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      setProduct(await getProductByID(Number(id)));
    };

    fetchProductData();
  }, [id]);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <MaxWidthContainer>
      <div className="grid lg:grid-cols-2 lg:px-10">
        {/* Image Container */}
        <div className="max-w-96 mb-4">
          <div className="overflow-hidden border-2 rounded-md place-items-center p-3">
            <img
              src={product.image}
              alt="product-image"
              className="rounded-md"
            />
          </div>
          <div className="px-4">
            <Button className="w-full mt-4 flex items-center justify-center gap-2">
              <ShoppingCart size={18} /> Add to Cart
            </Button>
          </div>
        </div>
        {/* Item Details Container */}
        <div className="mx-2 max-lg:my-8">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">{product.title}</span>
            <span className="font-bold text-gray-700 mt-3 text-lg">
              £{product.price}
            </span>
          </div>
          <div className="flex flex-col my-3">
            <span className="text-lg font-semibold">Category</span>
            <span>
              {product.category.charAt(0).toUpperCase() +
                product.category.slice(1)}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-semibold">Description</span>
            <span className="text-lg">{product.description}</span>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default ProductDescription;
