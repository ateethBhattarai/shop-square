import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button className="w-full">Login</Button>
    </div>
  );
};

export default Login;
