import { ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface SignUpInDialogProps {
  children: ReactNode;
  title: string;
  loginContent: ReactNode;
  registerContent: ReactNode;
}

const SignUpInDialog = ({
  title,
  loginContent,
  registerContent,
  children,
}: SignUpInDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent aria-describedby="register_or_login_dialog">
        <DialogTitle>Login or Register</DialogTitle>
        <Tabs defaultValue={title.toLowerCase()}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">{loginContent}</TabsContent>
          <TabsContent value="register">{registerContent}</TabsContent>
        </Tabs>
        <DialogClose>Cancel</DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpInDialog;
