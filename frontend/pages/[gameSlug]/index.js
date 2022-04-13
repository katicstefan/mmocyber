import { getAllGameSlugs, getGameWithCategoriesByGameSlug } from '../../lib/games';

import CategoryList from '../../components/CategoryList';

function Game({ game, categories }) {
    return (
        <>
            <h1>Welcome to {game.attributes.title}</h1>
            <CategoryList categories={categories} />
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getAllGameSlugs();
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const game = await getGameWithCategoriesByGameSlug(params.gameSlug);
    const categories = game.attributes.categories.data;

    return {
        props: {
            game,
            categories
        }
    }
}

export default Game