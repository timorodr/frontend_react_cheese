const URL = process.env.REACT_APP_URL

export const cheesersLoader = async () => {
    const response = await fetch(`${URL}/cheese`) // ALWAYS MAKE SURE THIS ROUTE MATCHES HOW DEFINED IN BE
    const cheesers = await response.json()
    return cheesers
}

export const cheeseLoader = async ({params}) => {
    const response = await fetch(`${URL}/cheese/${params.id}`) // ALWAYS MAKE SURE THIS ROUTE MATCHES HOW DEFINED IN BE
    const cheese = await response.json()
    return cheese
}