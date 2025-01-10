import { Link } from "react-router-dom";

interface ProductHomeProps {
  image: string;
  name: string;
  price: string | number;
  id: number | string;
}

const ProductsHome: React.FC<ProductHomeProps> = ({
  id,
  image,
  name,
  price,
}) => {
  return (
    <div className="mx-2">
      <Link
        to={`/product/${id}`}
        className="w-1/6 cursor-pointer group hover:bg-white rounded-lg p-3 mb-2"
      >
        <div className="object-contain border-2 rounded-md place-items-center">
          <img
            src={image}
            alt="product-image"
            className="opacity-90 group-hover:opacity-100 w-1/2"
          />
        </div>
        <div className="mx-2 text-gray-600 group-hover:text-gray-900">
          <span className="line-clamp-3 tracking-tighter text-md">{name}</span>
          <span className="text-xl font-semibold">£{price}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductsHome;
