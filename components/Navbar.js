import Link from "next/link"

export default function Navbar() {
    return (
        <div className="bg-red-600 text-white flex px-10">
            <Link className="p-2.5 hover:bg-red-600" href="/">Home</Link>
            <Link className="p-2.5 hover:bg-red-600 mr-auto" href="/accounts">Accounts</Link>
            <Link className="p-2.5 hover:bg-red-600" href="/login">Login</Link>
            <Link className="p-2.5 hover:bg-red-600" href="/signup">Sign up</Link>
        </div>
    )
  }