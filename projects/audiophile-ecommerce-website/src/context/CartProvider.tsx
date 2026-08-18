import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { CartItem } from '../data/types'
import { CartContext } from './CartContext'

const storageKey = 'audiophile-cart'

function getInitialItems(): CartItem[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = window.localStorage.getItem(storageKey)
    return stored ? (JSON.parse(stored) as CartItem[]) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(getInitialItems)

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items])

  const value = useMemo(
    () => ({
      items,
      addItem(productId: number, quantity: number) {
        setItems((current) => {
          const existing = current.find((item) => item.productId === productId)
          if (!existing) return [...current, { productId, quantity }]
          return current.map((item) =>
            item.productId === productId
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        })
      },
      setQuantity(productId: number, quantity: number) {
        setItems((current) =>
          quantity <= 0
            ? current.filter((item) => item.productId !== productId)
            : current.map((item) =>
                item.productId === productId ? { ...item, quantity } : item,
              ),
        )
      },
      clearCart() {
        setItems([])
      },
    }),
    [items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
