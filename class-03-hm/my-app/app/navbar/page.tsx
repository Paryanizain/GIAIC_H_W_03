import Link from "next/link";

export default function Navbar(){
    return(
        <div className="w-full h-12 bg-white text-black flex justify-between px-4 items-center">
            <nav className="text-2xl font-bold">Wellcome</nav>
            <ul className="flex font-semibold">
                <Link href="/" className="px-4">Home</Link>
                <Link href="/about" className="px-4">About</Link>
                <Link href="/contact" className="px-4">Contact</Link>
            </ul>
        </div>
    )
}