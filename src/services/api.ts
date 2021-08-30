import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://dt-money-nine.vercel.app/api'
})