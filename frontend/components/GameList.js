function GameList(props) {
    const games = props.games;

    return (
        <ul>
            {games.map(game =>
                <li key={game.id}>
                    {game.id} <br />
                    {game.attributes.title} <br />
                    {game.attributes.description}
                </li>
            )}
        </ul>
    )
}

export default GameList