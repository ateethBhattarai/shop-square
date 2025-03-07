import { useEffect, useState } from "react";

interface Product {
  category: string;
  description: string;
  image: string;
}

const Test = () => {
  const [productData, setProductData] = useState<Product[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limmit=10");
        const data = await res.json(); // Fetch and parse data as an object
        setProductData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  if (productData) {
    console.log(productData[0]);

    return (
      <div>
        Category: <p>{productData[0].category}</p>
        <div>
          <img src={productData[0].image} />
        </div>
      </div>
    );
  }
};

export default Test;
