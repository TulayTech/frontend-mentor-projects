export type CategoryId = 'preference' | 'bean' | 'quantity' | 'grind' | 'frequency'
export type Quantity = '250g' | '500g' | '1000g'
export type Frequency = 'Every week' | 'Every 2 weeks' | 'Every month'

export interface PlanSelections {
  preference?: string
  bean?: string
  quantity?: Quantity
  grind?: string
  frequency?: Frequency
}

export const categories = [
  { id: 'preference', number: '01', title: 'How do you drink your coffee?', label: 'Preferences', options: [
    ['Capsule', 'Compatible with Nespresso systems and similar brewers'],
    ['Filter', 'For pour over or drip methods like Aeropress, Chemex, and V60'],
    ['Espresso', 'Dense and finely ground beans for an intense, flavorful experience'],
  ] },
  { id: 'bean', number: '02', title: 'What type of coffee?', label: 'Bean type', options: [
    ['Single origin', 'Distinct, high quality coffee from a specific family-owned farm'],
    ['Decaf', 'Just like regular coffee, except the caffeine has been removed'],
    ['Blended', 'Combination of two or three dark roasted beans of organic coffees'],
  ] },
  { id: 'quantity', number: '03', title: 'How much would you like?', label: 'Quantity', options: [
    ['250g', 'Perfect for the solo drinker. Yields about 12 delicious cups.'],
    ['500g', 'Perfect option for a couple. Yields about 40 delectable cups.'],
    ['1000g', 'Perfect for offices and events. Yields about 90 delightful cups.'],
  ] },
  { id: 'grind', number: '04', title: 'Want us to grind them?', label: 'Grind option', options: [
    ['Wholebean', 'Best choice if you cherish the full sensory experience'],
    ['Filter', 'For drip or pour-over coffee methods such as V60 or Aeropress'],
    ['Cafetiére', 'Coarse ground beans specially suited for French press coffee'],
  ] },
  { id: 'frequency', number: '05', title: 'How often should we deliver?', label: 'Deliveries', options: [
    ['Every week', 'per shipment. Includes free first-class shipping.'],
    ['Every 2 weeks', 'per shipment. Includes free priority shipping.'],
    ['Every month', 'per shipment. Includes free priority shipping.'],
  ] },
] as const

export const prices: Record<Quantity, Record<Frequency, number>> = {
  '250g': { 'Every week': 7.2, 'Every 2 weeks': 9.6, 'Every month': 12 },
  '500g': { 'Every week': 13, 'Every 2 weeks': 17.5, 'Every month': 22 },
  '1000g': { 'Every week': 22, 'Every 2 weeks': 32, 'Every month': 42 },
}

export function monthlyCost(quantity: Quantity, frequency: Frequency) {
  const multiplier = frequency === 'Every week' ? 4 : frequency === 'Every 2 weeks' ? 2 : 1
  return prices[quantity][frequency] * multiplier
}
