import Link from 'next/link'
import { useRouter } from 'next/router';

function CategoryList(props) {
    const categories = props.categories;
    const router = useRouter()
    console.log(router.asPath);

    return (
        <ul>
            {categories.map(category =>
                <li key={category.id}>
                    {category.id} <br />
                    {category.attributes.title} <br />
                    {category.attributes.description} <br />
                    <Link href={[router.asPath, category.attributes.slug].join('/')}>
                        <a>Go to</a>
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default CategoryList