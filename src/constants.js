import { restaurant } from './data/restaurant'

export const WHATSAPP_NUMBER = '041999999999'

export const WHATSAPP_MESSAGE =
  `Olá! Gostaria de fazer um pedido no ${restaurant.name}.`

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// MEUS DADOS DE CONTATO PARA CRIAÇÃO DE SITE

export const MY_WHATSAPP_NUMBER = '041995448468'

export const MY_WHATSAPP_MESSAGE =
  `Olá! Vi o site do ${restaurant.name} e gostaria de saber mais sobre a criação de um site para o meu negócio.`

export const MY_WHATSAPP_URL =
  `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${encodeURIComponent(MY_WHATSAPP_MESSAGE)}`