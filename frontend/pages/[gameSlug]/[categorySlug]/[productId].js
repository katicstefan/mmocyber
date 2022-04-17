import { gql } from "@apollo/client";
import client from "../../../apollo-client";

import Image from 'next/Image';

function urlBuilder(append) {
    return `${process.env.NEXT_PUBLIC_API_URL + append}`;
}

function Product({ product }) {
    return (
        <>
            <h2>{product.attributes.category.data.attributes.game.data.attributes.title + ' - ' + product.attributes.category.data.attributes.title}</h2>
            <h1>{product.attributes.title}</h1>
            <p>{product.attributes.description}</p>
            <p>{product.attributes.price}</p>
            {product.attributes.image.data && product.attributes.image.data.attributes.url ?
                <Image src={urlBuilder(product.attributes.image.data.attributes.url)} width={250} height={200} /> : null
            }
            {product.attributes.image.data && product.attributes.bg.data.attributes.url ?
                <Image src={urlBuilder(product.attributes.bg.data.attributes.url)} width={250} height={200} /> : null
            }
        </>
    )
}

export async function getStaticPaths() {
    const { data: categoryData } = await client.query({
        query: gql`
            query getCategorySlugWithGameSlugAndProductId {
                categories {
                    data {
                        id
                        attributes {
                            slug
                            game {
                                data {
                                    attributes {
                                        slug
                                    }
                                }
                            }
                            products {
                                data {
                                    id
                                }
                            }
                        }
                    }
                }
            }
        `
    })
    const categories = categoryData.categories.data
    const paths = [];

    categories.map(category => {
        category.attributes.products.data.map(product => {
            paths.push({
                params: {
                    gameSlug: category.attributes.game.data.attributes.slug,
                    categorySlug: category.attributes.slug,
                    productId: product.id
                }
            })
        })
    })
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const { data: productData } = await client.query({
        query: gql`
            query getProductById($productId: ID) {
                product(id: $productId) {
                    data {
                        id
                        attributes {
                            title
                            description
                            price
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            bg {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            category {
                                data {
                                    attributes {
                                        title
                                        game {
                                            data {
                                                attributes {
                                                    title
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `,
        variables: {
            "productId": params.productId
        }
    })

    return {
        props: {
            product: productData.product.data
        }
    }
}

export default Product