"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";

const VerifyEmailPageContent = () => {
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const router = useRouter();
  const token = useSearchParams().get("token");

  const handleVerifyEmail = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("No token provided");
    }

    newVerification(token as string)
      .then((res) => {
        if (res.success) {
          setSuccess(res.success as string);
        }
        if (res.error) {
          setError(res.error as string);
        }
      })
      .catch((err) => {
        console.log(err);
        setError("An unexpected error has occurred");
      });
  }, [success, error, token]);

  useEffect(() => {
    handleVerifyEmail();
  }, [handleVerifyEmail]);

  return (
    <main className="flex h-screen items-center justify-center">
      <div>
        {success && (
          <div className="w-[700px] space-y-4 text-center">
            <h1 className="text-4xl font-bold">
              Congratulations for creating an account Welcome to Animoon!
            </h1>
            <Button variant={"outline"} onClick={() => router.push("/login")}>
              Get Started
            </Button>
          </div>
        )}

        {!token && (
          <div className="w-[700px] space-y-4 text-center">
            <h1 className="text-4xl font-bold">Invalid or expired token</h1>
            <Button variant={"outline"} onClick={() => router.push("/login")}>
              Get Started
            </Button>
          </div>
        )}

        {error && (
          <div className="w-[700px] space-y-4 text-center">
            <h1 className="text-4xl font-bold">{error}</h1>
            <Button variant={"outline"} onClick={() => router.push("/login")}>
              Get Started
            </Button>
          </div>
        )}
      </div>
    </main>
  );
};

export default VerifyEmailPageContent;
