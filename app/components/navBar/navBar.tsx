import Link from "next/link";

export default function NavBar(){
  return(
    <div>
    <nav className="navbar navbar-expand-lg bg-gray-800 text-slate-100 font-serif p-5">
      <ul className="flex justify-around text-2xl">
        <li className="font-serif  hover:cursor-pointer" >
          <Link href="/">Home</Link>
        </li>
        <li className="font-serif  hover:cursor-pointer">
          <Link href="/">About Us</Link>
        </li>
        <li className="font-serif  hover:cursor-pointer">
          <Link href="/">Blogs</Link>
        </li>
        <li className="font-serif  hover:cursor-pointer">
          <Link href="/display">Display</Link>
        </li>
        <li className="font-serif  hover:cursor-pointer">
          <Link href="/form">Contact Us</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}