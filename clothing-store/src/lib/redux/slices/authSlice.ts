import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Database } from '@/types/database'

type Profile = Database['public']['Tables']['profiles']['Row']

interface AuthState {
  user: Profile | null
  isLoading: boolean
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Profile | null>) => {
      state.user = action.payload
      state.isAuthenticated = !!action.payload
      state.isLoading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
      state.isLoading = false
    },
    updateProfile: (state, action: PayloadAction<Partial<Profile>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload }
      }
    },
  },
})

export const { setUser, setLoading, logout, updateProfile } = authSlice.actions
export default authSlice.reducer