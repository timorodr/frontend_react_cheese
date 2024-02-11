import {redirect} from 'react-router-dom'

const URL = process.env.REACT_APP_URL

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const updatedCheese = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('countryOfOrigin')
    }
    console.log(updatedCheese)

    await fetch(`${URL}/cheese/${params.id}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedCheese)
    })

    return redirect("/")
}

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const createdCheese = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('countryOfOrigin')
    }

    await fetch(`${URL}/cheese`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(createdCheese)
    })

    return redirect("/")
}

export const deleteAction = async ({params}) => {
    await fetch(`${URL}/cheese/${params.id}`, {
        method: "delete"
    })

    return redirect("/")
}