import { useNavigate } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { Head } from "@/components/seo";
import { Button } from "@/components/ui/button";
import { paths } from "@/config/paths";

export const LandingRoute = () => {
  const navigate = useNavigate();

  return (
    <>
      <Head title="Home Page" description="Home Page" />
      <div className="flex h-screen items-center bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16 space-y-8">
          <div className="flex items-center justify-center gap-4">
            <img src={logo} alt="react" />

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Tasks App
            </h1>
          </div>

          <p>Showcasing Best Practices For Building React Applications</p>

          <div className="inline-flex rounded-md shadow">
            <Button onClick={() => navigate(paths.app.dashboard.getHref())}>
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
