import { Outlet } from "react-router-dom";

export const Wrapper = () => {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-6 md:px-12">
      <Outlet />
    </main>
  );
};
