import { getAllCategorySlugsWithGameSlugs, getCategoryWithGameAndProductsByGameSlugAndCategorySlug } from '../../../lib/categories'

import ProductList from '../../../components/ProductList'

function Category({ category, products }) {
    return (
        <>
            <h1>
                Welcome to
                {category.attributes.game.data.attributes.title}
                {category.attributes.title}
            </h1>
            <ProductList products={products} />
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getAllCategorySlugsWithGameSlugs();
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const category = await getCategoryWithGameAndProductsByGameSlugAndCategorySlug(params.gameSlug, params.categorySlug);
    const products = category.attributes.products.data;

    return {
        props: {
            category,
            products
        }
    }
}

export default Category