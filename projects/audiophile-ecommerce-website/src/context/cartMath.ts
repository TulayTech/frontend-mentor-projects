import { products } from '../data/catalog'
import type { CartItem } from '../data/types'

export const cartCount = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.quantity, 0)

export const cartSubtotal = (items: CartItem[]) =>
  items.reduce((sum, item) => {
    const product = products.find((candidate) => candidate.id === item.productId)
    return sum + (product?.price ?? 0) * item.quantity
  }, 0)

export const orderTotals = (items: CartItem[]) => {
  const subtotal = cartSubtotal(items)
  const shipping = items.length ? 50 : 0
  const vat = Math.round(subtotal * 0.2)

  return { subtotal, shipping, vat, grandTotal: subtotal + shipping }
}

export const formatPrice = (amount: number) => `$ ${amount.toLocaleString('en-US')}`
