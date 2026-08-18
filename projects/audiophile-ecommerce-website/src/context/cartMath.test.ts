import { cartCount, cartSubtotal, orderTotals } from './cartMath'

describe('cart calculations', () => {
  const items = [
    { productId: 4, quantity: 2 },
    { productId: 1, quantity: 1 },
  ]

  it('calculates item count and subtotal', () => {
    expect(cartCount(items)).toBe(3)
    expect(cartSubtotal(items)).toBe(6597)
  })

  it('calculates shipping, VAT, and grand total', () => {
    expect(orderTotals(items)).toEqual({
      subtotal: 6597,
      shipping: 50,
      vat: 1319,
      grandTotal: 6647,
    })
  })
})
