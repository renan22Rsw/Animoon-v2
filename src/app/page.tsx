import { auth } from "@/services/auth";

const Home = async () => {
  const session = await auth();

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">{session?.user?.name}</h1>
    </div>
  );
};

export default Home;
