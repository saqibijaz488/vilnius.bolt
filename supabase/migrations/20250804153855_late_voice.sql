/*
  # Seed Data for Clothing E-commerce Store

  This script populates the database with sample data for testing and demonstration purposes.
  Run this after creating the main schema.

  Categories:
  - Men's Fashion
  - Women's Fashion  
  - Kids & Baby
  - Accessories

  Products:
  - Various clothing items with multiple variants
  - Realistic pricing and descriptions
  - Sample images from Pexels
*/

-- Insert Categories
INSERT INTO categories (name, slug, description, image_url, sort_order, is_active) VALUES
('Men''s Fashion', 'mens-fashion', 'Sophisticated styles for the contemporary gentleman', 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 1, true),
('Women''s Fashion', 'womens-fashion', 'Elegant and trendy pieces for the modern woman', 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 2, true),
('Kids & Baby', 'kids-baby', 'Comfortable and playful clothing for little ones', 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 3, true),
('Accessories', 'accessories', 'Complete your look with our premium accessories', 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 4, true);

-- Get category IDs for reference
DO $$
DECLARE
    mens_id uuid;
    womens_id uuid;
    kids_id uuid;
    accessories_id uuid;
BEGIN
    SELECT id INTO mens_id FROM categories WHERE slug = 'mens-fashion';
    SELECT id INTO womens_id FROM categories WHERE slug = 'womens-fashion';
    SELECT id INTO kids_id FROM categories WHERE slug = 'kids-baby';
    SELECT id INTO accessories_id FROM categories WHERE slug = 'accessories';

    -- Insert Men's Products
    INSERT INTO products (name, slug, description, short_description, category_id, base_price, sale_price, sku, brand, material, care_instructions, is_featured, is_active, meta_title, meta_description) VALUES
    ('Premium Cotton T-Shirt', 'premium-cotton-t-shirt', 'Experience ultimate comfort with our premium cotton t-shirt. Made from 100% organic cotton, this versatile piece is perfect for casual wear or layering. The classic fit and soft texture make it a wardrobe essential.', 'Comfortable premium cotton t-shirt for everyday wear', mens_id, 49.99, 39.99, 'MEN-TSH-001', 'Luxe Threads', '100% Organic Cotton', 'Machine wash cold, tumble dry low', true, true, 'Premium Cotton T-Shirt - Luxe Threads', 'Shop our premium cotton t-shirt made from 100% organic cotton. Comfortable, stylish, and perfect for everyday wear.'),
    
    ('Classic Denim Jacket', 'classic-denim-jacket', 'A timeless denim jacket that never goes out of style. Crafted from premium denim with a comfortable fit, this jacket features classic styling with modern touches. Perfect for layering in any season.', 'Timeless denim jacket with classic styling', mens_id, 89.99, 69.99, 'MEN-JAC-001', 'Luxe Threads', '100% Cotton Denim', 'Machine wash cold, hang dry', true, true, 'Classic Denim Jacket - Luxe Threads', 'Shop our classic denim jacket made from premium cotton denim. Timeless style meets modern comfort.'),
    
    ('Luxury Cashmere Sweater', 'luxury-cashmere-sweater', 'Indulge in luxury with our premium cashmere sweater. Incredibly soft and warm, this sweater is perfect for cooler weather. The elegant design and superior quality make it a sophisticated addition to any wardrobe.', 'Luxurious cashmere sweater for sophisticated style', mens_id, 199.99, NULL, 'MEN-SWE-001', 'Luxe Threads', '100% Cashmere', 'Dry clean only', true, true, 'Luxury Cashmere Sweater - Luxe Threads', 'Shop our luxury cashmere sweater made from 100% premium cashmere. Soft, warm, and elegantly designed.'),
    
    ('Comfortable Joggers', 'comfortable-joggers', 'Stay comfortable and stylish with our premium joggers. Made from a soft cotton blend, these joggers feature a modern fit and are perfect for lounging or casual outings.', 'Comfortable joggers for casual wear', mens_id, 59.99, 44.99, 'MEN-JOG-001', 'Luxe Threads', '80% Cotton, 20% Polyester', 'Machine wash warm, tumble dry medium', false, true, 'Comfortable Joggers - Luxe Threads', 'Shop our comfortable joggers made from soft cotton blend. Perfect for casual wear and lounging.'),
    
    ('Stylish Blazer', 'stylish-blazer', 'Elevate your professional wardrobe with our stylish blazer. Tailored to perfection with a modern fit, this blazer is perfect for business meetings or formal occasions.', 'Modern blazer for professional occasions', mens_id, 149.99, NULL, 'MEN-BLA-001', 'Luxe Threads', '70% Wool, 30% Polyester', 'Dry clean only', true, true, 'Stylish Blazer - Luxe Threads', 'Shop our stylish blazer with modern tailoring. Perfect for professional and formal occasions.');

    -- Insert Women's Products
    INSERT INTO products (name, slug, description, short_description, category_id, base_price, sale_price, sku, brand, material, care_instructions, is_featured, is_active, meta_title, meta_description) VALUES
    ('Elegant Summer Dress', 'elegant-summer-dress', 'Look effortlessly elegant in our beautiful summer dress. Featuring a flattering silhouette and breathable fabric, this dress is perfect for warm weather occasions. The timeless design ensures you''ll look stunning at any event.', 'Elegant summer dress with flattering silhouette', womens_id, 129.99, NULL, 'WOM-DRE-001', 'Luxe Threads', '95% Viscose, 5% Elastane', 'Hand wash cold, hang dry', true, true, 'Elegant Summer Dress - Luxe Threads', 'Shop our elegant summer dress with flattering silhouette. Perfect for warm weather occasions.'),
    
    ('Chic Blouse', 'chic-blouse', 'Add sophistication to your wardrobe with our chic blouse. Made from premium silk, this blouse features elegant details and a comfortable fit. Perfect for both professional and casual settings.', 'Sophisticated silk blouse for versatile styling', womens_id, 79.99, 59.99, 'WOM-BLO-001', 'Luxe Threads', '100% Silk', 'Dry clean only', false, true, 'Chic Silk Blouse - Luxe Threads', 'Shop our chic silk blouse made from premium silk. Sophisticated and versatile for any occasion.'),
    
    ('Designer Jeans', 'designer-jeans', 'Experience the perfect fit with our designer jeans. Crafted from premium denim with stretch for comfort, these jeans feature a flattering cut that enhances your silhouette.', 'Premium designer jeans with perfect fit', womens_id, 119.99, 89.99, 'WOM-JEA-001', 'Luxe Threads', '92% Cotton, 6% Polyester, 2% Elastane', 'Machine wash cold, hang dry', true, true, 'Designer Jeans - Luxe Threads', 'Shop our designer jeans with premium denim and perfect fit. Comfortable and flattering for everyday wear.'),
    
    ('Cozy Cardigan', 'cozy-cardigan', 'Stay warm and stylish with our cozy cardigan. Made from soft wool blend, this cardigan is perfect for layering and adds a touch of elegance to any outfit.', 'Soft wool blend cardigan for layering', womens_id, 89.99, NULL, 'WOM-CAR-001', 'Luxe Threads', '60% Wool, 40% Acrylic', 'Hand wash cold, lay flat to dry', false, true, 'Cozy Cardigan - Luxe Threads', 'Shop our cozy cardigan made from soft wool blend. Perfect for layering and staying warm in style.');

    -- Insert Kids Products
    INSERT INTO products (name, slug, description, short_description, category_id, base_price, sale_price, sku, brand, material, care_instructions, is_featured, is_active, meta_title, meta_description) VALUES
    ('Kids Fun T-Shirt', 'kids-fun-t-shirt', 'Let your little ones express their personality with our fun kids t-shirt. Made from soft, breathable cotton, this t-shirt is comfortable for all-day play and features playful designs kids love.', 'Fun and comfortable t-shirt for kids', kids_id, 24.99, 19.99, 'KID-TSH-001', 'Luxe Threads', '100% Cotton', 'Machine wash warm, tumble dry low', false, true, 'Kids Fun T-Shirt - Luxe Threads', 'Shop our fun kids t-shirt made from soft cotton. Comfortable and playful designs for active children.'),
    
    ('Adorable Baby Onesie', 'adorable-baby-onesie', 'Keep your baby comfortable and cute with our adorable onesie. Made from ultra-soft organic cotton, this onesie is gentle on sensitive skin and features easy snap closures for quick changes.', 'Soft organic cotton onesie for babies', kids_id, 19.99, NULL, 'BAB-ONE-001', 'Luxe Threads', '100% Organic Cotton', 'Machine wash warm, tumble dry low', true, true, 'Adorable Baby Onesie - Luxe Threads', 'Shop our adorable baby onesie made from ultra-soft organic cotton. Gentle and comfortable for your little one.');

    -- Insert Accessories
    INSERT INTO products (name, slug, description, short_description, category_id, base_price, sale_price, sku, brand, material, care_instructions, is_featured, is_active, meta_title, meta_description) VALUES
    ('Leather Handbag', 'leather-handbag', 'Complete your look with our premium leather handbag. Crafted from genuine leather with attention to detail, this handbag combines style and functionality. Perfect for everyday use or special occasions.', 'Premium leather handbag with timeless style', accessories_id, 159.99, 129.99, 'ACC-BAG-001', 'Luxe Threads', '100% Genuine Leather', 'Clean with leather conditioner', true, true, 'Leather Handbag - Luxe Threads', 'Shop our premium leather handbag made from genuine leather. Stylish and functional for any occasion.'),
    
    ('Silk Scarf', 'silk-scarf', 'Add elegance to any outfit with our luxurious silk scarf. Made from premium silk with beautiful patterns, this scarf is a versatile accessory that can be worn in multiple ways.', 'Luxurious silk scarf with beautiful patterns', accessories_id, 49.99, NULL, 'ACC-SCA-001', 'Luxe Threads', '100% Silk', 'Dry clean only', false, true, 'Silk Scarf - Luxe Threads', 'Shop our luxurious silk scarf made from premium silk. Elegant and versatile accessory for any outfit.');

END $$;

-- Insert Product Images
INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Main Image', 0, true
FROM products p WHERE p.slug = 'premium-cotton-t-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Alternative View', 1, false
FROM products p WHERE p.slug = 'premium-cotton-t-shirt';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Main Image', 0, true
FROM products p WHERE p.slug = 'classic-denim-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Alternative View', 1, false
FROM products p WHERE p.slug = 'classic-denim-jacket';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Main Image', 0, true
FROM products p WHERE p.slug = 'luxury-cashmere-sweater';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Alternative View', 1, false
FROM products p WHERE p.slug = 'luxury-cashmere-sweater';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Main Image', 0, true
FROM products p WHERE p.slug = 'comfortable-joggers';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Alternative View', 1, false
FROM products p WHERE p.slug = 'comfortable-joggers';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Main Image', 0, true
FROM products p WHERE p.slug = 'stylish-blazer';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Alternative View', 1, false
FROM products p WHERE p.slug = 'stylish-blazer';

-- Women's product images
INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Main Image', 0, true
FROM products p WHERE p.slug = 'elegant-summer-dress';

INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Alternative View', 1, false
FROM products p WHERE p.slug = 'elegant-summer-dress';

-- Continue with other products...
INSERT INTO product_images (product_id, image_url, alt_text, sort_order, is_primary) 
SELECT p.id, 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', p.name || ' - Main Image', 0, true
FROM products p WHERE p.slug IN ('chic-blouse', 'designer-jeans', 'cozy-cardigan', 'kids-fun-t-shirt', 'adorable-baby-onesie', 'leather-handbag', 'silk-scarf');

-- Insert Product Variants
DO $$
DECLARE
    product_record RECORD;
BEGIN
    -- Add variants for each product
    FOR product_record IN SELECT id, slug FROM products LOOP
        -- T-shirts and casual wear
        IF product_record.slug IN ('premium-cotton-t-shirt', 'kids-fun-t-shirt') THEN
            INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
            (product_record.id, 'S', 'Black', '#000000', 25, product_record.slug || '-S-BLK'),
            (product_record.id, 'M', 'Black', '#000000', 30, product_record.slug || '-M-BLK'),
            (product_record.id, 'L', 'Black', '#000000', 20, product_record.slug || '-L-BLK'),
            (product_record.id, 'XL', 'Black', '#000000', 15, product_record.slug || '-XL-BLK'),
            (product_record.id, 'S', 'White', '#FFFFFF', 25, product_record.slug || '-S-WHT'),
            (product_record.id, 'M', 'White', '#FFFFFF', 30, product_record.slug || '-M-WHT'),
            (product_record.id, 'L', 'White', '#FFFFFF', 20, product_record.slug || '-L-WHT'),
            (product_record.id, 'XL', 'White', '#FFFFFF', 15, product_record.slug || '-XL-WHT'),
            (product_record.id, 'S', 'Navy', '#000080', 20, product_record.slug || '-S-NVY'),
            (product_record.id, 'M', 'Navy', '#000080', 25, product_record.slug || '-M-NVY'),
            (product_record.id, 'L', 'Navy', '#000080', 15, product_record.slug || '-L-NVY'),
            (product_record.id, 'XL', 'Navy', '#000080', 10, product_record.slug || '-XL-NVY');
        
        -- Jackets and blazers
        ELSIF product_record.slug IN ('classic-denim-jacket', 'stylish-blazer') THEN
            INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
            (product_record.id, 'S', 'Blue', '#0066CC', 15, product_record.slug || '-S-BLU'),
            (product_record.id, 'M', 'Blue', '#0066CC', 20, product_record.slug || '-M-BLU'),
            (product_record.id, 'L', 'Blue', '#0066CC', 18, product_record.slug || '-L-BLU'),
            (product_record.id, 'XL', 'Blue', '#0066CC', 12, product_record.slug || '-XL-BLU'),
            (product_record.id, 'S', 'Black', '#000000', 12, product_record.slug || '-S-BLK'),
            (product_record.id, 'M', 'Black', '#000000', 15, product_record.slug || '-M-BLK'),
            (product_record.id, 'L', 'Black', '#000000', 13, product_record.slug || '-L-BLK'),
            (product_record.id, 'XL', 'Black', '#000000', 8, product_record.slug || '-XL-BLK');
        
        -- Sweaters and cardigans
        ELSIF product_record.slug IN ('luxury-cashmere-sweater', 'cozy-cardigan') THEN
            INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
            (product_record.id, 'S', 'Cream', '#F5F5DC', 10, product_record.slug || '-S-CRM'),
            (product_record.id, 'M', 'Cream', '#F5F5DC', 15, product_record.slug || '-M-CRM'),
            (product_record.id, 'L', 'Cream', '#F5F5DC', 12, product_record.slug || '-L-CRM'),
            (product_record.id, 'XL', 'Cream', '#F5F5DC', 8, product_record.slug || '-XL-CRM'),
            (product_record.id, 'S', 'Gray', '#808080', 8, product_record.slug || '-S-GRY'),
            (product_record.id, 'M', 'Gray', '#808080', 12, product_record.slug || '-M-GRY'),
            (product_record.id, 'L', 'Gray', '#808080', 10, product_record.slug || '-L-GRY'),
            (product_record.id, 'XL', 'Gray', '#808080', 6, product_record.slug || '-XL-GRY'),
            (product_record.id, 'S', 'Navy', '#000080', 8, product_record.slug || '-S-NVY'),
            (product_record.id, 'M', 'Navy', '#000080', 12, product_record.slug || '-M-NVY'),
            (product_record.id, 'L', 'Navy', '#000080', 10, product_record.slug || '-L-NVY'),
            (product_record.id, 'XL', 'Navy', '#000080', 6, product_record.slug || '-XL-NVY');
        
        -- Joggers and pants
        ELSIF product_record.slug = 'comfortable-joggers' THEN
            INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
            (product_record.id, 'S', 'Black', '#000000', 20, product_record.slug || '-S-BLK'),
            (product_record.id, 'M', 'Black', '#000000', 25, product_record.slug || '-M-BLK'),
            (product_record.id, 'L', 'Black', '#000000', 22, product_record.slug || '-L-BLK'),
            (product_record.id, 'XL', 'Black', '#000000', 18, product_record.slug || '-XL-BLK'),
            (product_record.id, 'XXL', 'Black', '#000000', 15, product_record.slug || '-XXL-BLK'),
            (product_record.id, 'S', 'Gray', '#808080', 18, product_record.slug || '-S-GRY'),
            (product_record.id, 'M', 'Gray', '#808080', 22, product_record.slug || '-M-GRY'),
            (product_record.id, 'L', 'Gray', '#808080', 20, product_record.slug || '-L-GRY'),
            (product_record.id, 'XL', 'Gray', '#808080', 16, product_record.slug || '-XL-GRY'),
            (product_record.id, 'XXL', 'Gray', '#808080', 12, product_record.slug || '-XXL-GRY'),
            (product_record.id, 'S', 'Navy', '#000080', 15, product_record.slug || '-S-NVY'),
            (product_record.id, 'M', 'Navy', '#000080', 18, product_record.slug || '-M-NVY'),
            (product_record.id, 'L', 'Navy', '#000080', 16, product_record.slug || '-L-NVY'),
            (product_record.id, 'XL', 'Navy', '#000080', 12, product_record.slug || '-XL-NVY'),
            (product_record.id, 'XXL', 'Navy', '#000080', 10, product_record.slug || '-XXL-NVY');
        
        -- Dresses
        ELSIF product_record.slug = 'elegant-summer-dress' THEN
            INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
            (product_record.id, 'XS', 'Floral', '#FF69B4', 12, product_record.slug || '-XS-FLR'),
            (product_record.id, 'S', 'Floral', '#FF69B4', 15, product_record.slug || '-S-FLR'),
            (product_record.id, 'M', 'Floral', '#FF69B4', 18, product_record.slug || '-M-FLR'),
            (product_record.id, 'L', 'Floral', '#FF69B4', 15, product_record.slug || '-L-FLR'),
            (product_record.id, 'XS', 'Blue', '#0066CC', 10, product_record.slug || '-XS-BLU'),
            (product_record.id, 'S', 'Blue', '#0066CC', 12, product_record.slug || '-S-BLU'),
            (product_record.id, 'M', 'Blue', '#0066CC', 15, product_record.slug || '-M-BLU'),
            (product_record.id, 'L', 'Blue', '#0066CC', 12, product_record.slug || '-L-BLU'),
            (product_record.id, 'XS', 'Black', '#000000', 8, product_record.slug || '-XS-BLK'),
            (product_record.id, 'S', 'Black', '#000000', 10, product_record.slug || '-S-BLK'),
            (product_record.id, 'M', 'Black', '#000000', 12, product_record.slug || '-M-BLK'),
            (product_record.id, 'L', 'Black', '#000000', 10, product_record.slug || '-L-BLK');
        
        -- Blouses and jeans
        ELSIF product_record.slug IN ('chic-blouse', 'designer-jeans') THEN
            INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
            (product_record.id, 'XS', 'White', '#FFFFFF', 12, product_record.slug || '-XS-WHT'),
            (product_record.id, 'S', 'White', '#FFFFFF', 15, product_record.slug || '-S-WHT'),
            (product_record.id, 'M', 'White', '#FFFFFF', 18, product_record.slug || '-M-WHT'),
            (product_record.id, 'L', 'White', '#FFFFFF', 15, product_record.slug || '-L-WHT'),
            (product_record.id, 'XS', 'Black', '#000000', 10, product_record.slug || '-XS-BLK'),
            (product_record.id, 'S', 'Black', '#000000', 12, product_record.slug || '-S-BLK'),
            (product_record.id, 'M', 'Black', '#000000', 15, product_record.slug || '-M-BLK'),
            (product_record.id, 'L', 'Black', '#000000', 12, product_record.slug || '-L-BLK');
        
        -- Baby onesies
        ELSIF product_record.slug = 'adorable-baby-onesie' THEN
            INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
            (product_record.id, '0-3M', 'Pink', '#FFC0CB', 20, product_record.slug || '-0-3M-PNK'),
            (product_record.id, '3-6M', 'Pink', '#FFC0CB', 25, product_record.slug || '-3-6M-PNK'),
            (product_record.id, '6-9M', 'Pink', '#FFC0CB', 22, product_record.slug || '-6-9M-PNK'),
            (product_record.id, '9-12M', 'Pink', '#FFC0CB', 18, product_record.slug || '-9-12M-PNK'),
            (product_record.id, '0-3M', 'Blue', '#87CEEB', 20, product_record.slug || '-0-3M-BLU'),
            (product_record.id, '3-6M', 'Blue', '#87CEEB', 25, product_record.slug || '-3-6M-BLU'),
            (product_record.id, '6-9M', 'Blue', '#87CEEB', 22, product_record.slug || '-6-9M-BLU'),
            (product_record.id, '9-12M', 'Blue', '#87CEEB', 18, product_record.slug || '-9-12M-BLU'),
            (product_record.id, '0-3M', 'White', '#FFFFFF', 25, product_record.slug || '-0-3M-WHT'),
            (product_record.id, '3-6M', 'White', '#FFFFFF', 30, product_record.slug || '-3-6M-WHT'),
            (product_record.id, '6-9M', 'White', '#FFFFFF', 28, product_record.slug || '-6-9M-WHT'),
            (product_record.id, '9-12M', 'White', '#FFFFFF', 22, product_record.slug || '-9-12M-WHT');
        
        -- Accessories (one size fits all)
        ELSIF product_record.slug IN ('leather-handbag', 'silk-scarf') THEN
            INSERT INTO product_variants (product_id, size, color, color_hex, stock_quantity, sku) VALUES
            (product_record.id, 'One Size', 'Brown', '#8B4513', 15, product_record.slug || '-OS-BRN'),
            (product_record.id, 'One Size', 'Black', '#000000', 20, product_record.slug || '-OS-BLK'),
            (product_record.id, 'One Size', 'Tan', '#D2B48C', 12, product_record.slug || '-OS-TAN');
        END IF;
    END LOOP;
END $$;

-- Insert Sample Coupons
INSERT INTO coupons (code, name, description, discount_type, discount_value, minimum_amount, usage_limit, is_active, valid_from, valid_until) VALUES
('WELCOME10', 'Welcome Discount', 'Get 10% off your first order', 'percentage', 10.00, 50.00, 1000, true, NOW(), NOW() + INTERVAL '30 days'),
('SUMMER20', 'Summer Sale', 'Save 20% on summer collection', 'percentage', 20.00, 100.00, 500, true, NOW(), NOW() + INTERVAL '60 days'),
('FREESHIP', 'Free Shipping', 'Free shipping on orders over $75', 'fixed', 10.00, 75.00, NULL, true, NOW(), NOW() + INTERVAL '90 days'),
('FLASH50', 'Flash Sale', 'Limited time 50% off selected items', 'percentage', 50.00, 0.00, 100, true, NOW(), NOW() + INTERVAL '7 days');

-- Insert Flash Sale
INSERT INTO flash_sales (name, description, discount_percentage, start_time, end_time, is_active) VALUES
('Summer Flash Sale', 'Limited time offer on summer collection', 30, NOW(), NOW() + INTERVAL '24 hours', true);

-- Add products to flash sale
INSERT INTO flash_sale_products (flash_sale_id, product_id)
SELECT fs.id, p.id 
FROM flash_sales fs, products p 
WHERE fs.name = 'Summer Flash Sale' 
AND p.slug IN ('premium-cotton-t-shirt', 'comfortable-joggers', 'chic-blouse', 'kids-fun-t-shirt');

-- Insert Sample Blog Posts
INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, category, tags, is_published, meta_title, meta_description, published_at) VALUES
('Summer Fashion Trends 2024', 'summer-fashion-trends-2024', 'Discover the hottest fashion trends for summer 2024', 'Summer is here and it''s time to refresh your wardrobe with the latest trends. This season is all about comfort meets style, with flowing fabrics, bold colors, and sustainable fashion taking center stage...', 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800', 'Fashion Trends', ARRAY['summer', 'fashion', 'trends', '2024'], true, 'Summer Fashion Trends 2024 - Luxe Threads Blog', 'Discover the hottest summer fashion trends for 2024. From flowing fabrics to bold colors, stay stylish this season.', NOW()),

('How to Build a Capsule Wardrobe', 'how-to-build-capsule-wardrobe', 'Learn how to create a versatile capsule wardrobe with essential pieces', 'A capsule wardrobe is a curated collection of essential clothing items that can be mixed and matched to create multiple outfits. Here''s how to build one that works for your lifestyle...', 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800', 'Style Guide', ARRAY['capsule wardrobe', 'minimalism', 'style guide'], true, 'How to Build a Capsule Wardrobe - Luxe Threads', 'Learn how to create a versatile capsule wardrobe with essential pieces that work for any occasion.', NOW() - INTERVAL '7 days'),

('Sustainable Fashion: Why It Matters', 'sustainable-fashion-why-it-matters', 'Understanding the importance of sustainable fashion choices', 'Sustainable fashion is more than just a trend – it''s a movement towards more responsible consumption and production. Learn why choosing sustainable fashion matters for our planet and future generations...', 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800', 'Sustainability', ARRAY['sustainable fashion', 'environment', 'ethical fashion'], true, 'Sustainable Fashion: Why It Matters - Luxe Threads', 'Discover the importance of sustainable fashion and how your choices can make a positive impact on the environment.', NOW() - INTERVAL '14 days');

-- Update product ratings with sample reviews (this would normally be calculated by the trigger)
UPDATE products SET average_rating = 4.8, review_count = 124 WHERE slug = 'premium-cotton-t-shirt';
UPDATE products SET average_rating = 4.9, review_count = 89 WHERE slug = 'elegant-summer-dress';
UPDATE products SET average_rating = 4.7, review_count = 156 WHERE slug = 'classic-denim-jacket';
UPDATE products SET average_rating = 5.0, review_count = 67 WHERE slug = 'luxury-cashmere-sweater';
UPDATE products SET average_rating = 4.6, review_count = 203 WHERE slug = 'comfortable-joggers';
UPDATE products SET average_rating = 4.8, review_count = 91 WHERE slug = 'stylish-blazer';
UPDATE products SET average_rating = 4.9, review_count = 78 WHERE slug = 'chic-blouse';
UPDATE products SET average_rating = 4.7, review_count = 145 WHERE slug = 'designer-jeans';
UPDATE products SET average_rating = 4.8, review_count = 56 WHERE slug = 'cozy-cardigan';
UPDATE products SET average_rating = 4.9, review_count = 234 WHERE slug = 'kids-fun-t-shirt';
UPDATE products SET average_rating = 5.0, review_count = 189 WHERE slug = 'adorable-baby-onesie';
UPDATE products SET average_rating = 4.6, review_count = 98 WHERE slug = 'leather-handbag';
UPDATE products SET average_rating = 4.8, review_count = 45 WHERE slug = 'silk-scarf';