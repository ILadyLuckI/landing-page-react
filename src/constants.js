import { restaurant } from './data/restaurant'

export const WHATSAPP_NUMBER = '5541987031431'

export const WHATSAPP_MESSAGE =
  `Olá! Gostaria de fazer um pedido no ${restaurant.name}.`

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`