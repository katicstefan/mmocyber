function CategoryList(props) {
    const categories = props.categories;

    return (
        <ul>
            {categories.map(category =>
                <li key={category.id}>
                    {category.id} <br />
                    {category.attributes.title} <br />
                    {category.attributes.description} <br />
                </li>
            )}
        </ul>
    )
}

export default CategoryList