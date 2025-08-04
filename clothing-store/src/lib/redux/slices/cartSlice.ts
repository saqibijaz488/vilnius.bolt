import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  productId: string
  variantId?: string
  name: string
  price: number
  salePrice?: number
  image: string
  size?: string
  color?: string
  quantity: number
  maxQuantity: number
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        item => 
          item.productId === action.payload.productId &&
          item.variantId === action.payload.variantId
      )

      if (existingItem) {
        const newQuantity = existingItem.quantity + action.payload.quantity
        existingItem.quantity = Math.min(newQuantity, existingItem.maxQuantity)
      } else {
        state.items.push(action.payload)
      }

      cartSlice.caseReducers.calculateTotals(state)
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
      cartSlice.caseReducers.calculateTotals(state)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id)
      if (item) {
        item.quantity = Math.min(Math.max(action.payload.quantity, 1), item.maxQuantity)
      }
      cartSlice.caseReducers.calculateTotals(state)
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
      state.itemCount = 0
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
    setCartOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
    calculateTotals: (state) => {
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0)
      state.total = state.items.reduce((total, item) => {
        const price = item.salePrice || item.price
        return total + (price * item.quantity)
      }, 0)
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
  setCartOpen,
  calculateTotals,
} = cartSlice.actions

export default cartSlice.reducer