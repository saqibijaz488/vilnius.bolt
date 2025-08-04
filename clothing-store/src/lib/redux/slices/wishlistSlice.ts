import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface WishlistItem {
  id: string
  productId: string
  name: string
  price: number
  salePrice?: number
  image: string
  slug: string
}

interface WishlistState {
  items: WishlistItem[]
  itemCount: number
}

const initialState: WishlistState = {
  items: [],
  itemCount: 0,
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const existingItem = state.items.find(item => item.productId === action.payload.productId)
      if (!existingItem) {
        state.items.push(action.payload)
        state.itemCount = state.items.length
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.productId !== action.payload)
      state.itemCount = state.items.length
    },
    clearWishlist: (state) => {
      state.items = []
      state.itemCount = 0
    },
    setWishlist: (state, action: PayloadAction<WishlistItem[]>) => {
      state.items = action.payload
      state.itemCount = action.payload.length
    },
  },
})

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  setWishlist,
} = wishlistSlice.actions

export default wishlistSlice.reducer