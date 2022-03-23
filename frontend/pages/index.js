import { gql } from "@apollo/client";
import client from "../apollo-client";

import GameList from '../components/GameList'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'

export async function getStaticProps() {
    const { data: gamesData } = await client.query({
        query: gql`
            query getGames {
                games {
                    data {
                        id
                        attributes {
                            title
                            description
                        }
                    }
                }
            }
        `
    })

    const { data: categoriesData } = await client.query({
        query: gql`
            query getCategories {
                categories {
                    data {
                        id
                        attributes {
                            title
                            description
                        }
                    }
                }
            }
        `
    })

    const { data: productsData } = await client.query({
        query: gql`
            query getProducts {
                products {
                    data {
                        id
                        attributes {
                            title
                            description
                        }
                    }
                }
            }
        `
    });

    return {
        props: {
            games: gamesData.games.data,
            categories: categoriesData.categories.data,
            products: productsData.products.data
        },
    };
}

function HomePage({ games, categories, products }) {
    return (
        <>
            <h1>Welcome to MMOCyber</h1>
            <GameList games={games} />
            <CategoryList categories={categories} />
            <ProductList products={products} />
        </>
    );
}

export default HomePage;