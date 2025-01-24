import InputSearch from "./_components/input";
import { ApolloWrapper } from "@/lib/ApolloWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto my-20 max-w-[1200px] space-y-10 lg:space-y-8">
      <InputSearch />
      <ApolloWrapper>{children}</ApolloWrapper>
    </main>
  );
}
