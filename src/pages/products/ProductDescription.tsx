import MaxWidthContainer from "@/components/manual/MaxWidthContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { getProductByID } from "@/server/productApi";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductAPI } from "../Home";
import ProductNotFound from "../not-found/ProductNotFound";

const ProductDescription = () => {
  // State to control the currently open accordion item(s)
  const [openItem, setOpenItem] = useState<string[]>(["item-1"]);
  const [product, setProduct] = useState<ProductAPI | undefined>(undefined);

  const { id } = useParams();

  useEffect(() => {
    const fetchProductData = async () => {
      setProduct(await getProductByID(Number(id)));
    };

    fetchProductData();
  }, [id]);

  // Find the product based on 'id' from the URL
  // const product = products.find((item) => item.id === id);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <MaxWidthContainer>
      <div className="md:flex gap-6">
        {/* Image Container */}
        <div className="md:w-1/3 mb-4">
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
        <div className="mx-2">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">{product.title}</span>
            <span className="font-bold text-gray-700">£{product.price}</span>
          </div>
          <div className="flex flex-col mt-3">
            <span className="text-lg font-semibold">Brand Name</span>
            <span>{product.category}</span>
          </div>

          {/* Controlled Accordion with React State */}
          <Accordion
            type="multiple"
            className="w-full"
            value={openItem}
            onValueChange={setOpenItem}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Specification
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 text-lg">
                  {Object.entries(product.price).map(([key, value]) => (
                    <li key={key}>
                      <span className="font-semibold">
                        {key
                          .replace(/_/g, " ")
                          .replace(/\b\w/g, (char) => char.toUpperCase())}
                      </span>
                      : {Array.isArray(value) ? value.join(", ") : value}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Description
              </AccordionTrigger>
              <AccordionContent>
                <span>{product.description}</span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default ProductDescription;
