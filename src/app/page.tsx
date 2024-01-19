import { unstable_noStore as noStore } from "next/cache";
import { api } from "@/trpc/server";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  noStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
