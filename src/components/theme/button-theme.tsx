"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";

interface ButttonThemeProps {
  theme: string;
  children: React.ReactNode;
}

const ButttonTheme = ({ theme, children }: ButttonThemeProps) => {
  const { setTheme } = useTheme();

  return (
    <Button variant={"ghost"} onClick={() => setTheme(theme)}>
      {children}
    </Button>
  );
};

export default ButttonTheme;
