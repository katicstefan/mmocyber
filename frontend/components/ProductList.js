import Link from 'next/link'
import { useRouter } from 'next/router';

function ProductList(props) {
    const products = props.products;
    const router = useRouter()
    console.log(router.asPath);

    return (
        <ul>
            {products.map(product =>
                <li key={product.id}>
                    {product.id} <br />
                    {product.attributes.title} <br />
                    {product.attributes.description} <br />
                    <Link href={[router.asPath, product.id].join('/')}>
                        <a>Go to</a>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default ProductList