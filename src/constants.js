import { restaurant } from './data/restaurant'

export const WHATSAPP_NUMBER = '041999999999' // Substitua pelo número de telefone do restaurante, incluindo o código do país e da cidade, sem espaços ou caracteres especiais.

export const WHATSAPP_MESSAGE =
  `Olá! Gostaria de fazer um pedido no ${restaurant.name}.`

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`