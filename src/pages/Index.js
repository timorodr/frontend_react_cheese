import {Link, useLoaderData, Form} from "react-router-dom"

const Landing = () => {
    const cheesers = useLoaderData()
    console.log(cheesers)

    return(
        <div>

            <h3>Create Cheese</h3>

            <Form action='/create' method="post">
                <input type="input" name="name" placeholder="cheese's name"/>
                <input type="input" name="image" placeholder="cheese's image" />
                <input type="input" name="countryOfOrigin" placeholder="cheese's country of origin" />
                <input type="submit" value={`create cheese`}/>
            </Form>

            <h3>Landing Page</h3>
            {cheesers.map(cheese => {
                return (
                    <div key={cheese._id} className="cheese">
                        <Link to={`/${cheese._id}`}>
                            <h1>{cheese.name}</h1>
                        </Link>
                        <h2>{cheese.countryOfOrigin}</h2>
                        <img src={cheese.image} alt={cheese.name}/>
                    </div>
                )
            })}

        </div>
    )
}

export default Landing