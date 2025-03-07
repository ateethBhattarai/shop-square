import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const cartItemCount = 0;

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex group cursor-pointer">
          <ShoppingCart
            className="h-6 w-6 my-auto flex-shrink-0 group-hover:text-gray-600"
            aria-hidden
          />
          <span className="group-hover:text-gray-700 text-gray-800 font-semibold text-xs">
            {cartItemCount > 99 ? "99+" : cartItemCount}
          </span>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <h1 className="mx-auto font-bold mb-2">CART({cartItemCount})</h1>
        </SheetHeader>
        {cartItemCount > 0 ? (
          <div>
            <p>Name</p>
            <p>Quantity</p>
            <p>Price</p>
            <Separator className="my-4" />
            <div className="flex w-full">
              <p className="flex-1">Total Quantity</p>
              <p>{cartItemCount}</p>
            </div>
            <div className="flex w-full">
              <p className="flex-1">Total Price</p>
              <p>£10.00</p>
            </div>
          </div>
        ) : (
          <div className="flex h-full text-center text-gray-600">
            <p className="my-auto">
              No item added in cart yet. Item added in cart shows here.
            </p>
          </div>
        )}

        <SheetFooter>
          <Button className="w-full my-4">Continue to checkout</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
