import Link from 'next/link'

function Navbar() {
    return (
        <>
            <style jsx>
                {`
                    a {
                        color: yellow;
                    }
                `}
            </style>
            <nav className="navbar navbar-dark bg-dark">
                <span>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </span>

                <span className="ml-auto">
                    <Link href="/login">
                        <a>Sign In</a>
                    </Link>
                </span>

                <span>
                    <Link href="/register">
                        <a> Sign Up</a>
                    </Link>
                </span>
            </nav>
        </>
    )
}

export default Navbar