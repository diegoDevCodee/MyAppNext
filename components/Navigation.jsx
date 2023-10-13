import Link from "next/link";

function Navigation() {
  return (
    <>
        <ul className="w-full h-20 flex justify-between items-center p-8 bg-color2">
          <li className="font-bold text-[#eeecec]"><Link href="/">Diego Dev Code</Link></li>
          <div className="flex gap-10">

          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          </div>
        </ul>
    </>
  )
}

export default Navigation
