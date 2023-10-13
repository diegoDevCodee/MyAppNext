import Link from "next/link";

function Navigation() {
  return (
    <>
      <nav className="w-full h-20 flex justify-between items-center p-8 bg-color2">
        <span className="font-semibold text-colorText">
          <Link href="/">Diego Dev Code</Link>
        </span>

        <ul className="flex gap-10 text-colorText">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
