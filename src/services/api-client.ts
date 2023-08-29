import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'c6769d46d08e43d08008d52fee194368',
  },
})
