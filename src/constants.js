import { restaurant } from './data/restaurant'

const restaurantNumber = import.meta.env.VITE_RESTAURANT_WHATSAPP
const myNumber = import.meta.env.VITE_MY_WHATSAPP

export const WHATSAPP_MESSAGE =
  `Olá! Gostaria de fazer um pedido no ${restaurant.name}.`

export const WHATSAPP_URL =
  `https://wa.me/${restaurantNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const MY_WHATSAPP_MESSAGE =
  `Olá! Vi o site do ${restaurant.name} e gostaria de saber mais sobre a criação de um site para o meu negócio.`

export const MY_WHATSAPP_URL =
  `https://wa.me/${myNumber}?text=${encodeURIComponent(MY_WHATSAPP_MESSAGE)}`