import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// const hollowBLokcs = () => {
//   const response = httpClient.get('/products/allProducts')
//   console.log(response)

//   return {
//     hollowBLokcs,
//   }
// }

export default httpClient
