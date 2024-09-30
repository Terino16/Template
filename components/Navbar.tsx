import Link from "next/link";
import React from "react";

 import { ThemeToggle } from "./ThemeToggle";
import SignInButton from "./SignInButton";
import { getServerSession } from "next-auth";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
  const session = await getServerSession();
  return (
    <div className="fixed inset-x-0 top-1 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-3 ">
      <div className="flex items-center justify-between h-full gap-2 px-8 py-3 md:py-1  mx-auto max-w-7xl">
    
        <Link href={"/"} className="flex items-center gap-2 ">
          <p className="rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
            Quizzy
          </p>
        </Link>
        <div className="flex items-center">
          <ThemeToggle className="mr-4" />
          {session?.user ? (
             <UserAccountNav user={session.user} />
          ) : (
            <SignInButton text={"Sign In"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;