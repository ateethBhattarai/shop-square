import { ReactNode } from "react";

const MaxWidthContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-screen-2xl my-auto mx-auto bg-gray-50 p-2">
      {children}
    </div>
  );
};

export default MaxWidthContainer;
