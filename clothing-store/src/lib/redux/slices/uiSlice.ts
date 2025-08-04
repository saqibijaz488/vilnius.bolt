import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UiState {
  theme: 'light' | 'dark'
  language: 'en' | 'lt'
  currency: 'USD' | 'EUR' | 'LTL'
  mobileMenuOpen: boolean
  searchOpen: boolean
  quickViewProduct: string | null
}

const initialState: UiState = {
  theme: 'light',
  language: 'en',
  currency: 'USD',
  mobileMenuOpen: false,
  searchOpen: false,
  quickViewProduct: null,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
    setLanguage: (state, action: PayloadAction<'en' | 'lt'>) => {
      state.language = action.payload
    },
    setCurrency: (state, action: PayloadAction<'USD' | 'EUR' | 'LTL'>) => {
      state.currency = action.payload
    },
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    setSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.searchOpen = action.payload
    },
    toggleSearch: (state) => {
      state.searchOpen = !state.searchOpen
    },
    setQuickViewProduct: (state, action: PayloadAction<string | null>) => {
      state.quickViewProduct = action.payload
    },
  },
})

export const {
  setTheme,
  toggleTheme,
  setLanguage,
  setCurrency,
  setMobileMenuOpen,
  toggleMobileMenu,
  setSearchOpen,
  toggleSearch,
  setQuickViewProduct,
} = uiSlice.actions

export default uiSlice.reducer