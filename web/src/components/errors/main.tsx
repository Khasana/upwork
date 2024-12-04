import { Button } from "@/components/ui/button";

export const MainErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2
        className="text-lg font-semibold"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Ooops, something went wrong :(
      </h2>
      <Button>Refresh</Button>
    </div>
  );
};
