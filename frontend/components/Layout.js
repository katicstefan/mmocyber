import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div>{props.children}</div>
        </div>
    );
}