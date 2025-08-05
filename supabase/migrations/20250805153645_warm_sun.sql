-- Seed data for Luxe Threads E-commerce

-- Insert sample categories
INSERT INTO categories (name, slug, description, image_url, sort_order, is_active) VALUES
('Women''s Fashion', 'women', 'Elegant and trendy pieces for the modern woman', 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 1, true),
('Men''s Collection', 'men', 'Sophisticated styles for the contemporary gentleman', 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 2, true),
('Kids & Baby', 'kids', 'Comfortable and playful clothing for little ones', 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 3, true),
('Accessories', 'accessories', 'Complete your look with our premium accessories', 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 4, true);

-- Insert sample products
INSERT INTO products (name, slug, description, short_description, category_id, base_price, sale_price, sku, brand, material, care_instructions, is_featured, is_active, meta_title, meta_description) VALUES
('Premium Cotton T-Shirt', 'premium-cotton-t-shirt', 'Experience ultimate comfort with our premium cotton t-shirt. Made from 100% organic cotton, this versatile piece is perfect for any casual occasion. The soft fabric feels great against your skin while maintaining its shape wash after wash.', 'Comfortable premium cotton t-shirt perfect for everyday wear', (SELECT id FROM categories WHERE slug = 'men'), 49.99, 39.99, 'LT-TCT-001', 'Luxe Threads', '100% Organic Cotton', 'Machine wash cold, tumble dry low', true, true, 'Premium Cotton T-Shirt - Luxe Threads', 'Comfortable premium cotton t-shirt made from organic materials'),

('Elegant Summer Dress', 'elegant-summer-dress', 'Step into summer with confidence wearing our elegant summer dress. This flowing piece features a flattering silhouette that works for both casual outings and special occasions. The breathable fabric keeps you cool while looking effortlessly chic.', 'Flowing summer dress perfect for any occasion', (SELECT id FROM categories WHERE slug = 'women'), 129.99, NULL, 'LT-ESD-002', 'Luxe Threads', 'Cotton Blend', 'Dry clean recommended', true, true, 'Elegant Summer Dress - Luxe Threads', 'Beautiful summer dress with flowing silhouette'),

('Classic Denim Jacket', 'classic-denim-jacket', 'A timeless wardrobe essential, our classic denim jacket never goes out of style. Crafted from premium denim with careful attention to detail, this jacket adds the perfect finishing touch to any outfit. Features include classic button closure and multiple pockets.', 'Timeless denim jacket that never goes out of style', (SELECT id FROM categories WHERE slug = 'women'), 89.99, 69.99, 'LT-CDJ-003', 'Luxe Threads', 'Premium Denim', 'Machine wash cold, hang dry', true, true, 'Classic Denim Jacket - Luxe Threads', 'Timeless denim jacket crafted from premium materials'),

('Luxury Cashmere Sweater', 'luxury-cashmere-sweater', 'Indulge in luxury with our premium cashmere sweater. This incredibly soft and warm piece is perfect for cooler weather while maintaining an elegant appearance. The classic design makes it a versatile addition to any wardrobe.', 'Incredibly soft luxury cashmere sweater', (SELECT id FROM categories WHERE slug = 'women'), 199.99, NULL, 'LT-LCS-004', 'Luxe Threads', '100% Cashmere', 'Dry clean only', true, true, 'Luxury Cashmere Sweater - Luxe Threads', 'Premium cashmere sweater for ultimate comfort and style'),

('Comfortable Joggers', 'comfortable-joggers', 'Stay comfortable and stylish with our premium joggers. Perfect for workouts, lounging, or casual outings, these joggers feature a modern fit and soft fabric that moves with you. The elastic waistband and cuffs provide a secure, comfortable fit.', 'Premium joggers perfect for active lifestyle', (SELECT id FROM categories WHERE slug = 'men'), 59.99, 44.99, 'LT-CJ-005', 'Luxe Threads', 'Cotton Blend', 'Machine wash cold, tumble dry low', false, true, 'Comfortable Joggers - Luxe Threads', 'Premium joggers for comfort and style'),

('Stylish Blazer', 'stylish-blazer', 'Elevate your professional wardrobe with our stylish blazer. This tailored piece features a modern cut that flatters any figure while maintaining a professional appearance. Perfect for the office, meetings, or special events.', 'Modern tailored blazer for professional occasions', (SELECT id FROM categories WHERE slug = 'women'), 149.99, NULL, 'LT-SB-006', 'Luxe Threads', 'Wool Blend', 'Dry clean recommended', false, true, 'Stylish Blazer - Luxe Threads', 'Modern tailored blazer for professional style'),

('Kids Rainbow T-Shirt', 'kids-rainbow-t-shirt', 'Brighten up your little one''s day with our colorful rainbow t-shirt. Made from soft, child-friendly materials, this fun design is perfect for play time and everyday adventures. The durable construction withstands active play.', 'Fun rainbow t-shirt perfect for kids', (SELECT id FROM categories WHERE slug = 'kids'), 24.99, 19.99, 'LT-KRT-007', 'Luxe Threads', 'Organic Cotton', 'Machine wash warm, tumble dry low', false, true, 'Kids Rainbow T-Shirt - Luxe Threads', 'Colorful rainbow t-shirt made for active kids'),

('Leather Crossbody Bag', 'leather-crossbody-bag', 'Complete your look with our premium leather crossbody bag. This versatile accessory features multiple compartments to keep your essentials organized while maintaining a sleek, sophisticated appearance. The adjustable strap ensures a perfect fit.', 'Premium leather crossbody bag with multiple compartments', (SELECT id FROM categories WHERE slug = 'accessories'), 79.99, NULL, 'LT-LCB-008', 'Luxe Threads', 'Genuine Leather', 'Clean with leather conditioner', false, true, 'Leather Crossbody Bag - Luxe Threads', 'Premium leather crossbody bag for everyday elegance');

-- Insert product images
INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) VALUES
-- Premium Cotton T-Shirt
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 'Premium Cotton T-Shirt - Front View', 1, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 'Premium Cotton T-Shirt - Side View', 2, false),

-- Elegant Summer Dress
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 'Elegant Summer Dress - Front View', 1, true),
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 'Elegant Summer Dress - Back View', 2, false),

-- Classic Denim Jacket
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 'Classic Denim Jacket - Front View', 1, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 'Classic Denim Jacket - Detail View', 2, false),

-- Luxury Cashmere Sweater
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 'Luxury Cashmere Sweater - Front View', 1, true),
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 'Luxury Cashmere Sweater - Texture Detail', 2, false),

-- Comfortable Joggers
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 'Comfortable Joggers - Front View', 1, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 'Comfortable Joggers - Side View', 2, false),

-- Stylish Blazer
((SELECT id FROM products WHERE slug = 'stylish-blazer'), 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 'Stylish Blazer - Front View', 1, true),
((SELECT id FROM products WHERE slug = 'stylish-blazer'), 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 'Stylish Blazer - Professional Look', 2, false),

-- Kids Rainbow T-Shirt
((SELECT id FROM products WHERE slug = 'kids-rainbow-t-shirt'), 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 'Kids Rainbow T-Shirt - Front View', 1, true),
((SELECT id FROM products WHERE slug = 'kids-rainbow-t-shirt'), 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 'Kids Rainbow T-Shirt - Back View', 2, false),

-- Leather Crossbody Bag
((SELECT id FROM products WHERE slug = 'leather-crossbody-bag'), 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 'Leather Crossbody Bag - Main View', 1, true),
((SELECT id FROM products WHERE slug = 'leather-crossbody-bag'), 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 'Leather Crossbody Bag - Detail View', 2, false);

-- Insert product variants
INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku, price_adjustment, is_active) VALUES
-- Premium Cotton T-Shirt variants
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'S', 'Black', '#000000', 25, 'LT-TCT-001-S-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'M', 'Black', '#000000', 30, 'LT-TCT-001-M-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'L', 'Black', '#000000', 20, 'LT-TCT-001-L-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'XL', 'Black', '#000000', 15, 'LT-TCT-001-XL-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'S', 'White', '#FFFFFF', 20, 'LT-TCT-001-S-WHT', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'M', 'White', '#FFFFFF', 25, 'LT-TCT-001-M-WHT', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'L', 'White', '#FFFFFF', 18, 'LT-TCT-001-L-WHT', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'XL', 'White', '#FFFFFF', 12, 'LT-TCT-001-XL-WHT', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'S', 'Navy', '#000080', 15, 'LT-TCT-001-S-NVY', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'M', 'Navy', '#000080', 20, 'LT-TCT-001-M-NVY', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'L', 'Navy', '#000080', 15, 'LT-TCT-001-L-NVY', 0, true),
((SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt'), 'XL', 'Navy', '#000080', 10, 'LT-TCT-001-XL-NVY', 0, true),

-- Elegant Summer Dress variants
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'XS', 'Floral', '#FF69B4', 12, 'LT-ESD-002-XS-FLR', 0, true),
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'S', 'Floral', '#FF69B4', 15, 'LT-ESD-002-S-FLR', 0, true),
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'M', 'Floral', '#FF69B4', 18, 'LT-ESD-002-M-FLR', 0, true),
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'L', 'Floral', '#FF69B4', 12, 'LT-ESD-002-L-FLR', 0, true),
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'XS', 'Blue', '#0000FF', 10, 'LT-ESD-002-XS-BLU', 0, true),
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'S', 'Blue', '#0000FF', 12, 'LT-ESD-002-S-BLU', 0, true),
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'M', 'Blue', '#0000FF', 15, 'LT-ESD-002-M-BLU', 0, true),
((SELECT id FROM products WHERE slug = 'elegant-summer-dress'), 'L', 'Blue', '#0000FF', 8, 'LT-ESD-002-L-BLU', 0, true),

-- Classic Denim Jacket variants
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'S', 'Light Blue', '#ADD8E6', 20, 'LT-CDJ-003-S-LBL', 0, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'M', 'Light Blue', '#ADD8E6', 25, 'LT-CDJ-003-M-LBL', 0, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'L', 'Light Blue', '#ADD8E6', 22, 'LT-CDJ-003-L-LBL', 0, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'XL', 'Light Blue', '#ADD8E6', 18, 'LT-CDJ-003-XL-LBL', 0, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'XXL', 'Light Blue', '#ADD8E6', 10, 'LT-CDJ-003-XXL-LBL', 0, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'S', 'Dark Blue', '#00008B', 15, 'LT-CDJ-003-S-DBL', 0, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'M', 'Dark Blue', '#00008B', 20, 'LT-CDJ-003-M-DBL', 0, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'L', 'Dark Blue', '#00008B', 18, 'LT-CDJ-003-L-DBL', 0, true),
((SELECT id FROM products WHERE slug = 'classic-denim-jacket'), 'XL', 'Dark Blue', '#00008B', 12, 'LT-CDJ-003-XL-DBL', 0, true),

-- Luxury Cashmere Sweater variants
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'S', 'Cream', '#F5F5DC', 8, 'LT-LCS-004-S-CRM', 0, true),
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'M', 'Cream', '#F5F5DC', 10, 'LT-LCS-004-M-CRM', 0, true),
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'L', 'Cream', '#F5F5DC', 8, 'LT-LCS-004-L-CRM', 0, true),
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'XL', 'Cream', '#F5F5DC', 5, 'LT-LCS-004-XL-CRM', 0, true),
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'S', 'Gray', '#808080', 6, 'LT-LCS-004-S-GRY', 0, true),
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'M', 'Gray', '#808080', 8, 'LT-LCS-004-M-GRY', 0, true),
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'L', 'Gray', '#808080', 6, 'LT-LCS-004-L-GRY', 0, true),
((SELECT id FROM products WHERE slug = 'luxury-cashmere-sweater'), 'XL', 'Gray', '#808080', 4, 'LT-LCS-004-XL-GRY', 0, true),

-- Comfortable Joggers variants
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'S', 'Black', '#000000', 30, 'LT-CJ-005-S-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'M', 'Black', '#000000', 35, 'LT-CJ-005-M-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'L', 'Black', '#000000', 32, 'LT-CJ-005-L-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'XL', 'Black', '#000000', 25, 'LT-CJ-005-XL-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'XXL', 'Black', '#000000', 15, 'LT-CJ-005-XXL-BLK', 0, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'S', 'Gray', '#808080', 25, 'LT-CJ-005-S-GRY', 0, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'M', 'Gray', '#808080', 30, 'LT-CJ-005-M-GRY', 0, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'L', 'Gray', '#808080', 28, 'LT-CJ-005-L-GRY', 0, true),
((SELECT id FROM products WHERE slug = 'comfortable-joggers'), 'XL', 'Gray', '#808080', 20, 'LT-CJ-005-XL-GRY', 0, true),

-- Kids Rainbow T-Shirt variants
((SELECT id FROM products WHERE slug = 'kids-rainbow-t-shirt'), '2T', 'Rainbow', '#FF0000', 15, 'LT-KRT-007-2T-RBW', 0, true),
((SELECT id FROM products WHERE slug = 'kids-rainbow-t-shirt'), '3T', 'Rainbow', '#FF0000', 18, 'LT-KRT-007-3T-RBW', 0, true),
((SELECT id FROM products WHERE slug = 'kids-rainbow-t-shirt'), '4T', 'Rainbow', '#FF0000', 20, 'LT-KRT-007-4T-RBW', 0, true),
((SELECT id FROM products WHERE slug = 'kids-rainbow-t-shirt'), '5T', 'Rainbow', '#FF0000', 15, 'LT-KRT-007-5T-RBW', 0, true),
((SELECT id FROM products WHERE slug = 'kids-rainbow-t-shirt'), '6T', 'Rainbow', '#FF0000', 12, 'LT-KRT-007-6T-RBW', 0, true);

-- Insert sample coupons
INSERT INTO coupons (code, name, description, discount_type, discount_value, minimum_amount, maximum_discount, usage_limit, is_active, valid_from, valid_until) VALUES
('WELCOME10', 'Welcome Discount', 'Get 10% off your first order', 'percentage', 10.00, 50.00, 50.00, 1000, true, NOW(), NOW() + INTERVAL '30 days'),
('SUMMER25', 'Summer Sale', 'Save 25% on summer collection', 'percentage', 25.00, 100.00, 100.00, 500, true, NOW(), NOW() + INTERVAL '60 days'),
('FREESHIP', 'Free Shipping', 'Free shipping on orders over $75', 'fixed', 10.00, 75.00, 10.00, NULL, true, NOW(), NOW() + INTERVAL '90 days'),
('LUXURY50', 'Luxury Items Discount', '$50 off luxury items over $200', 'fixed', 50.00, 200.00, 50.00, 100, true, NOW(), NOW() + INTERVAL '45 days');

-- Insert sample gift cards
INSERT INTO gift_cards (code, initial_amount, current_balance, currency, recipient_email, recipient_name, message, is_active, expires_at) VALUES
('GC-SAMPLE-001', 100.00, 100.00, 'USD', 'customer@example.com', 'John Doe', 'Happy Birthday! Enjoy shopping at Luxe Threads.', true, NOW() + INTERVAL '1 year'),
('GC-SAMPLE-002', 50.00, 50.00, 'USD', 'gift@example.com', 'Jane Smith', 'Thank you for being an amazing friend!', true, NOW() + INTERVAL '1 year'),
('GC-SAMPLE-003', 25.00, 25.00, 'USD', 'holiday@example.com', 'Holiday Shopper', 'Season''s Greetings from Luxe Threads!', true, NOW() + INTERVAL '6 months');

-- Insert sample flash sale
INSERT INTO flash_sales (name, description, discount_percentage, start_time, end_time, is_active) VALUES
('Summer Flash Sale', 'Limited time offer on selected summer items', 30, NOW() - INTERVAL '1 hour', NOW() + INTERVAL '23 hours', true);

-- Link some products to the flash sale
INSERT INTO flash_sale_products (flash_sale_id, product_id) VALUES
((SELECT id FROM flash_sales WHERE name = 'Summer Flash Sale'), (SELECT id FROM products WHERE slug = 'elegant-summer-dress')),
((SELECT id FROM flash_sales WHERE name = 'Summer Flash Sale'), (SELECT id FROM products WHERE slug = 'premium-cotton-t-shirt')),
((SELECT id FROM flash_sales WHERE name = 'Summer Flash Sale'), (SELECT id FROM products WHERE slug = 'comfortable-joggers'));

-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, category, tags, is_published, meta_title, meta_description, published_at) VALUES
('Summer Fashion Trends 2024', 'summer-fashion-trends-2024', 'Discover the hottest fashion trends for summer 2024 and how to incorporate them into your wardrobe.', 'Summer 2024 brings exciting new trends that blend comfort with style. From flowing fabrics to bold colors, this season is all about expressing your personality through fashion. Here are the top trends to watch...', 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 'Fashion Trends', ARRAY['summer', 'fashion', 'trends', '2024'], true, 'Summer Fashion Trends 2024 - Luxe Threads Blog', 'Discover the hottest summer fashion trends for 2024', NOW() - INTERVAL '7 days'),

('Sustainable Fashion: Why It Matters', 'sustainable-fashion-why-it-matters', 'Learn about the importance of sustainable fashion and how you can make more eco-friendly clothing choices.', 'Sustainable fashion is more than just a trend – it''s a movement towards a more responsible and ethical fashion industry. In this post, we explore why sustainable fashion matters and how you can make a difference...', 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 'Sustainability', ARRAY['sustainable', 'eco-friendly', 'ethical', 'fashion'], true, 'Sustainable Fashion: Why It Matters - Luxe Threads', 'Learn about sustainable fashion and eco-friendly clothing choices', NOW() - INTERVAL '14 days'),

('How to Build a Capsule Wardrobe', 'how-to-build-capsule-wardrobe', 'Create a versatile and minimalist wardrobe with our comprehensive guide to building a capsule wardrobe.', 'A capsule wardrobe is a curated collection of essential clothing items that can be mixed and matched to create numerous outfits. Here''s how to build one that works for your lifestyle...', 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 'Style Guide', ARRAY['capsule', 'wardrobe', 'minimalist', 'style'], true, 'How to Build a Capsule Wardrobe - Luxe Threads', 'Complete guide to creating a versatile capsule wardrobe', NOW() - INTERVAL '21 days');

-- Note: To create a test user and add sample data, you would need to:
-- 1. Create a user account through the Supabase Auth system
-- 2. The profile will be automatically created via the trigger
-- 3. Then you can add sample orders, reviews, and wishlist items using the user's ID

COMMIT;