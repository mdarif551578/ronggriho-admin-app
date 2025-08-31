make an attractive bangla product details with English titles and descriptions bangla of the product. make sure it is human like. long and reviews are also human like and standard length. Make sure the long descriptions and reviews are formatted and long with realstic humanlike tone.


# blueprint `products` Collection

Stores all products available in the store.

|Field|Type|Description|Example|
|---|---|---|---|
|`name`|`string`|Product name|`"Classic Cotton T-Shirt"`|
|`slug`|`string`|URL-friendly identifier|`"classic-cotton-tshirt"`|
|`description`|`string`|Short summary|`"Soft and breathable cotton t-shirt"`|
|`longDescription`|`string`|Detailed description (HTML supported)|`"<p>Crafted from 100% cotton...</p>"`|
|`price`|`number`|Original price|`24.99`|
|`discountPrice`|`number`|Discounted price (optional)|`19.99`|
|`stock`|`number`|Inventory count|`150`|
|`category`|`string`|Product category|`"Men > T-Shirts"`|
|`tags`|`array`|Keywords for filtering|`["casual", "summer"]`|
|`images`|`array`|Product image URLs|`["https://.../img1.png"]`|
|`sizes`|`array`|Available sizes|`["S", "M", "L", "XL"]`|
|`colors`|`array`|Available colors with hex codes|`["Black:#000000", "Gray:#808080"]`|
|`relatedProductIds`|`array`|Related product IDs|`["prod_123", "prod_456"]`|
|`shippingFee`|`number`|Shipping fee for this product|`50`|
|`isFeatured`|`boolean`|Whether shown on homepage|`true`|
|`isFlashSale`|`boolean`|Whether part of flash sale|`false`|
|`createdAt`|`Timestamp`|When the product was added|`Timestamp(...)`|
|`reviews`|`array`|List of reviews with user and text keys|`[{"user":"John","text":"Great!"},{"user":"Anika","text":"Loved it!"}]`|


# the html to extract from:


