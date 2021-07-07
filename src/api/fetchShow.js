import axios from 'axios'

const baseUrl = "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"

export const fetchShow = () => {
    return axios
    .get(baseUrl)
    .then(res => {
        console.log(res.data._embedded)
        return res
    })
    .catch(err => {
        console.log("API fetch Error: ", err)
        return err
    })
}

