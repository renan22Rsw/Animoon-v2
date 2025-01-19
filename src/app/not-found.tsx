import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="text-s4 max-w-[500px] text-center">
          The page you are attempting to access does not exist. Please check the
          URL or return to the homepage.
        </p>
        <Link href={"/"}>
          {" "}
          <Button
            variant={"link"}
            className="bg-foreground font-semibold text-primary-foreground"
          >
            Go back
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
