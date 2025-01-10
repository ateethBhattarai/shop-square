import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Register = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button className="w-full">Register</Button>
    </div>
  );
};

export default Register;
