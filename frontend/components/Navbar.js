import Link from 'next/link'

function Navbar() {
    return (
        <>
            <style jsx>
                {`
                    a {
                        color: cyan;
                    }
                `}
            </style>
            <nav>
                <span>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </span>

                <span>
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