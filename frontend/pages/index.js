import { getGames } from '../lib/games'

import GameList from '../components/GameList'

function HomePage({ games }) {
    return (
        <>
            <h1>Welcome to MMOCyber</h1>
            <GameList games={games} />
        </>
    );
}

export async function getStaticProps() {
    const games = await getGames();
    return {
        props: {
            games
        }
    };
}

export default HomePage;