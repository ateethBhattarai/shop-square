import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-extrabold text-gray-800">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-700">
          Product Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          Sorry, the product you are looking for does not exist or has been
          moved.
        </p>

        <div className="mt-8">
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
