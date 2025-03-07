import { ReactNode } from "react";

const MaxWidthContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main className="max-w-screen-2xl my-auto mx-auto bg-gray-50 p-4">
      {children}
    </main>
  );
};

export default MaxWidthContainer;
