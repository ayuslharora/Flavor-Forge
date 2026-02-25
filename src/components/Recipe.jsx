import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'


function Recipe({ id, random = true }) {

    let [apiData, setApiData] = useState(null)

    useEffect(() => {
        async function getData() {
            if (random) {
                console.log("getting random")
                setApiData(await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`))
            } else {
                console.log("getting specific")
                setApiData(await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`))
            }
        }
        getData()
        console.log(apiData)
        console.log("actual data")
        // console.log(apiData.data.meals[0])
    }, [])




    return (
        <div>
            <div>
                {/* <img src={data.meals[0].strMealThumb} alt="" /> */}
            </div>
            <div>
                {/* <h2>{data.meals[0].strMeal}</h2>
                <p>{data.meals[0].strInstructions}</p> */}
            </div>

        </div>
    )
}

export default Recipe