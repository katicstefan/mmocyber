function ProductList(props) {
    const products = props.products;

    return (
        <ul>
            {products.map(product =>
                <li key={product.id}>
                    {product.id} <br />
                    {product.attributes.title} <br />
                    {product.attributes.description} <br />
                </li>
            )}
        </ul>
    )
}

export default ProductList