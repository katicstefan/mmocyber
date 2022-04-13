import Link from 'next/link'

function GameList(props) {
    const games = props.games;
    return (
        <ul>
            {games.map(game =>
                <li key={game.id}>
                    {game.id} <br />
                    {game.attributes.title} <br />
                    {game.attributes.description}
                    <Link href={'/' + game.attributes.slug} >
                        <a>Go to</a>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default GameList