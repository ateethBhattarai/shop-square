import CartDrawer from "@/components/manual/CartDrawer";
import SignUpInDialog from "@/components/manual/SignUpInDialog";
import { Button } from "@/components/ui/button";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

const authButtons = ["Login", "Register"];
const isLoggedIn = true;

const Navbar = () => {
  return (
    <div className="p-2 px-4 mb-2 bg-gray-100">
      <div className="flex">
        <p>LOGO</p>

        <div className="ml-auto flex gap-3">
          {!isLoggedIn ? (
            authButtons.map((btn, index) => (
              <SignUpInDialog
                key={index}
                title={btn}
                loginContent={<Login />}
                registerContent={<Register />}
              >
                <Button variant={btn == "Login" ? "default" : "ghost"}>
                  {btn}
                </Button>
              </SignUpInDialog>
            ))
          ) : (
            <CartDrawer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
