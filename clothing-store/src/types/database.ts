export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          phone: string | null
          role: 'customer' | 'admin' | 'super_admin'
          loyalty_points: number
          preferred_currency: 'USD' | 'EUR' | 'LTL'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          role?: 'customer' | 'admin' | 'super_admin'
          loyalty_points?: number
          preferred_currency?: 'USD' | 'EUR' | 'LTL'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          phone?: string | null
          role?: 'customer' | 'admin' | 'super_admin'
          loyalty_points?: number
          preferred_currency?: 'USD' | 'EUR' | 'LTL'
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          image_url: string | null
          parent_id: string | null
          sort_order: number
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          image_url?: string | null
          parent_id?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          image_url?: string | null
          parent_id?: string | null
          sort_order?: number
          is_active?: boolean
          created_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          short_description: string | null
          category_id: string | null
          base_price: number
          sale_price: number | null
          sku: string | null
          brand: string | null
          material: string | null
          care_instructions: string | null
          is_featured: boolean
          is_active: boolean
          meta_title: string | null
          meta_description: string | null
          average_rating: number
          review_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          short_description?: string | null
          category_id?: string | null
          base_price: number
          sale_price?: number | null
          sku?: string | null
          brand?: string | null
          material?: string | null
          care_instructions?: string | null
          is_featured?: boolean
          is_active?: boolean
          meta_title?: string | null
          meta_description?: string | null
          average_rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          short_description?: string | null
          category_id?: string | null
          base_price?: number
          sale_price?: number | null
          sku?: string | null
          brand?: string | null
          material?: string | null
          care_instructions?: string | null
          is_featured?: boolean
          is_active?: boolean
          meta_title?: string | null
          meta_description?: string | null
          average_rating?: number
          review_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      product_images: {
        Row: {
          id: string
          product_id: string
          image_url: string
          alt_text: string | null
          sort_order: number
          is_primary: boolean
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          image_url: string
          alt_text?: string | null
          sort_order?: number
          is_primary?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          image_url?: string
          alt_text?: string | null
          sort_order?: number
          is_primary?: boolean
          created_at?: string
        }
      }
      product_variants: {
        Row: {
          id: string
          product_id: string
          size: string
          color: string
          color_hex: string | null
          stock_quantity: number
          sku: string | null
          price_adjustment: number
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          product_id: string
          size: string
          color: string
          color_hex?: string | null
          stock_quantity?: number
          sku?: string | null
          price_adjustment?: number
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          size?: string
          color?: string
          color_hex?: string | null
          stock_quantity?: number
          sku?: string | null
          price_adjustment?: number
          is_active?: boolean
          created_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          user_id: string | null
          order_number: string
          status: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered' | 'cancelled'
          payment_method: 'stripe' | 'cash_on_delivery' | null
          payment_status: string
          stripe_payment_intent_id: string | null
          subtotal: number
          tax_amount: number
          shipping_amount: number
          discount_amount: number
          total_amount: number
          currency: 'USD' | 'EUR' | 'LTL'
          shipping_name: string
          shipping_email: string
          shipping_phone: string | null
          shipping_address_line1: string
          shipping_address_line2: string | null
          shipping_city: string
          shipping_state: string | null
          shipping_postal_code: string
          shipping_country: string
          billing_name: string | null
          billing_address_line1: string | null
          billing_address_line2: string | null
          billing_city: string | null
          billing_state: string | null
          billing_postal_code: string | null
          billing_country: string | null
          tracking_number: string | null
          tracking_url: string | null
          created_at: string
          updated_at: string
          shipped_at: string | null
          delivered_at: string | null
        }
        Insert: {
          id?: string
          user_id?: string | null
          order_number?: string
          status?: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered' | 'cancelled'
          payment_method?: 'stripe' | 'cash_on_delivery' | null
          payment_status?: string
          stripe_payment_intent_id?: string | null
          subtotal: number
          tax_amount?: number
          shipping_amount?: number
          discount_amount?: number
          total_amount: number
          currency?: 'USD' | 'EUR' | 'LTL'
          shipping_name: string
          shipping_email: string
          shipping_phone?: string | null
          shipping_address_line1: string
          shipping_address_line2?: string | null
          shipping_city: string
          shipping_state?: string | null
          shipping_postal_code: string
          shipping_country: string
          billing_name?: string | null
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_state?: string | null
          billing_postal_code?: string | null
          billing_country?: string | null
          tracking_number?: string | null
          tracking_url?: string | null
          created_at?: string
          updated_at?: string
          shipped_at?: string | null
          delivered_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string | null
          order_number?: string
          status?: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered' | 'cancelled'
          payment_method?: 'stripe' | 'cash_on_delivery' | null
          payment_status?: string
          stripe_payment_intent_id?: string | null
          subtotal?: number
          tax_amount?: number
          shipping_amount?: number
          discount_amount?: number
          total_amount?: number
          currency?: 'USD' | 'EUR' | 'LTL'
          shipping_name?: string
          shipping_email?: string
          shipping_phone?: string | null
          shipping_address_line1?: string
          shipping_address_line2?: string | null
          shipping_city?: string
          shipping_state?: string | null
          shipping_postal_code?: string
          shipping_country?: string
          billing_name?: string | null
          billing_address_line1?: string | null
          billing_address_line2?: string | null
          billing_city?: string | null
          billing_state?: string | null
          billing_postal_code?: string | null
          billing_country?: string | null
          tracking_number?: string | null
          tracking_url?: string | null
          created_at?: string
          updated_at?: string
          shipped_at?: string | null
          delivered_at?: string | null
        }
      }
      order_items: {
        Row: {
          id: string
          order_id: string
          product_id: string | null
          variant_id: string | null
          quantity: number
          unit_price: number
          total_price: number
          product_name: string
          product_image: string | null
          size: string | null
          color: string | null
          created_at: string
        }
        Insert: {
          id?: string
          order_id: string
          product_id?: string | null
          variant_id?: string | null
          quantity: number
          unit_price: number
          total_price: number
          product_name: string
          product_image?: string | null
          size?: string | null
          color?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          order_id?: string
          product_id?: string | null
          variant_id?: string | null
          quantity?: number
          unit_price?: number
          total_price?: number
          product_name?: string
          product_image?: string | null
          size?: string | null
          color?: string | null
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          product_id: string
          user_id: string
          order_id: string | null
          rating: number
          title: string | null
          comment: string | null
          images: string[] | null
          is_verified_purchase: boolean
          is_approved: boolean
          helpful_count: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          product_id: string
          user_id: string
          order_id?: string | null
          rating: number
          title?: string | null
          comment?: string | null
          images?: string[] | null
          is_verified_purchase?: boolean
          is_approved?: boolean
          helpful_count?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          product_id?: string
          user_id?: string
          order_id?: string | null
          rating?: number
          title?: string | null
          comment?: string | null
          images?: string[] | null
          is_verified_purchase?: boolean
          is_approved?: boolean
          helpful_count?: number
          created_at?: string
          updated_at?: string
        }
      }
      wishlist: {
        Row: {
          id: string
          user_id: string
          product_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          created_at?: string
        }
      }
      coupons: {
        Row: {
          id: string
          code: string
          name: string
          description: string | null
          discount_type: string
          discount_value: number
          minimum_amount: number
          maximum_discount: number | null
          usage_limit: number | null
          used_count: number
          is_active: boolean
          valid_from: string
          valid_until: string | null
          created_at: string
        }
        Insert: {
          id?: string
          code: string
          name: string
          description?: string | null
          discount_type: string
          discount_value: number
          minimum_amount?: number
          maximum_discount?: number | null
          usage_limit?: number | null
          used_count?: number
          is_active?: boolean
          valid_from?: string
          valid_until?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          code?: string
          name?: string
          description?: string | null
          discount_type?: string
          discount_value?: number
          minimum_amount?: number
          maximum_discount?: number | null
          usage_limit?: number | null
          used_count?: number
          is_active?: boolean
          valid_from?: string
          valid_until?: string | null
          created_at?: string
        }
      }
      gift_cards: {
        Row: {
          id: string
          code: string
          initial_amount: number
          current_balance: number
          currency: 'USD' | 'EUR' | 'LTL'
          purchaser_id: string | null
          recipient_email: string | null
          recipient_name: string | null
          message: string | null
          is_active: boolean
          expires_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          code: string
          initial_amount: number
          current_balance: number
          currency?: 'USD' | 'EUR' | 'LTL'
          purchaser_id?: string | null
          recipient_email?: string | null
          recipient_name?: string | null
          message?: string | null
          is_active?: boolean
          expires_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          code?: string
          initial_amount?: number
          current_balance?: number
          currency?: 'USD' | 'EUR' | 'LTL'
          purchaser_id?: string | null
          recipient_email?: string | null
          recipient_name?: string | null
          message?: string | null
          is_active?: boolean
          expires_at?: string | null
          created_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          featured_image: string | null
          author_id: string | null
          category: string | null
          tags: string[] | null
          is_published: boolean
          meta_title: string | null
          meta_description: string | null
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content: string
          featured_image?: string | null
          author_id?: string | null
          category?: string | null
          tags?: string[] | null
          is_published?: boolean
          meta_title?: string | null
          meta_description?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          featured_image?: string | null
          author_id?: string | null
          category?: string | null
          tags?: string[] | null
          is_published?: boolean
          meta_title?: string | null
          meta_description?: string | null
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          email: string
          subject: string | null
          message: string
          is_read: boolean
          replied_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          subject?: string | null
          message: string
          is_read?: boolean
          replied_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          subject?: string | null
          message?: string
          is_read?: boolean
          replied_at?: string | null
          created_at?: string
        }
      }
      flash_sales: {
        Row: {
          id: string
          name: string
          description: string | null
          discount_percentage: number
          start_time: string
          end_time: string
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          discount_percentage: number
          start_time: string
          end_time: string
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          discount_percentage?: number
          start_time?: string
          end_time?: string
          is_active?: boolean
          created_at?: string
        }
      }
      flash_sale_products: {
        Row: {
          id: string
          flash_sale_id: string
          product_id: string
          created_at: string
        }
        Insert: {
          id?: string
          flash_sale_id: string
          product_id: string
          created_at?: string
        }
        Update: {
          id?: string
          flash_sale_id?: string
          product_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      user_role: 'customer' | 'admin' | 'super_admin'
      order_status: 'pending' | 'confirmed' | 'packed' | 'shipped' | 'delivered' | 'cancelled'
      payment_method: 'stripe' | 'cash_on_delivery'
      currency_type: 'USD' | 'EUR' | 'LTL'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}