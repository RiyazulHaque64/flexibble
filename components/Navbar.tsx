import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProvider from "./AuthProvider";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexible" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((navlink) => (
            <Link href={navlink.href} key={navlink.key}>
              {navlink.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <Link href="/create-project">Share Work</Link>
        ) : (
          <AuthProvider></AuthProvider>
        )}
      </div>
    </nav>
  );
};

export default Navbar;