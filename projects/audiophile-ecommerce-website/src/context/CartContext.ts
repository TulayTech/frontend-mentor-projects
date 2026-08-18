import { createContext, useContext } from 'react'
import type { CartItem } from '../data/types'

export interface CartContextValue {
  items: CartItem[]
  addItem: (productId: number, quantity: number) => void
  setQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
