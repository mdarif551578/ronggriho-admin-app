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



<div class="bodywrapper__inner">
                <div class="row align-items-center mb-30 justify-content-between">
    <div class="col-lg-6 col-sm-6">
        <h6 class="page-title">HOCO W35 Max Wireless Bluetooth Headphones (90h)</h6>
    </div>
    <div class="col-lg-6 col-sm-6 text-sm-right mt-sm-0 mt-3 right-part">
        <li><a href="https://dropupseller.com/market">Home</a></li>
    </div>
</div>
                <!-- Product Single Section Starts Here -->

<div class="category-section padding-bottom-half oh">
    <div class="container">
        <div class="row product-details-wrapper">
            <div class="col-lg-4 variant-images">
                <div class="sync1 owl-carousel owl-theme owl-loaded owl-drag">
                    
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                                        <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-828px, 0px, 0px); transition: all; width: 3105px;"><div class="owl-item cloned" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eb26cdc1754212075.jpg" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item cloned" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eb864281754212075.jpg" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item cloned" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eca19011754212076.webp" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item cloned" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f27723020e1754212210.jpg" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item active" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26ea2ec3f1754212074.webp" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26ea773d71754212074.webp" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eab76a71754212074.jpg" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eb26cdc1754212075.jpg" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eb864281754212075.jpg" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eca19011754212076.webp" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f27723020e1754212210.jpg" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item cloned" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26ea2ec3f1754212074.webp" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item cloned" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26ea773d71754212074.webp" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item cloned" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eab76a71754212074.jpg" alt="products-details" style="visibility: visible;">
                    </div></div><div class="owl-item cloned" style="width: 207px;"><div class="thumbs">
                        <img class="zoom_img" src="https://dropupseller.com/assets/images/product/688f26eb26cdc1754212075.jpg" alt="products-details" style="visibility: visible;">
                    </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev"><i class="las la-angle-left"></i></div><div class="owl-next"><i class="las la-angle-right"></i></div></div><div class="owl-dots disabled"></div><div class="owl-thumbs"></div></div>
                <div class="sync2 owl-carousel owl-theme mt-2 owl-loaded owl-drag">
                    
                                                            
                                        
                                        
                                        
                                        
                                        
                                                        <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all; width: 363px;"><div class="owl-item synced active" style="width: 51.75px;"><div class="thumbs mx-1">
                        <img src="https://dropupseller.com/assets/images/product/thumb_688f26ea2ec3f1754212074.webp" alt="products-details">
                        <a href="https://dropupseller.com/assets/images/product/688f26ea2ec3f1754212074.webp" onclick="javascript:downloadSingleImage('https://dropupseller.com/assets/images/product/688f26ea2ec3f1754212074.webp','688f26ea2ec3f1754212074.webp')" class="btn btn-sm btn--primary w-100"><i class="la la-download"></i></a>
                    </div></div><div class="owl-item active" style="width: 51.75px;"><div class="thumbs mx-1">
                        <img src="https://dropupseller.com/assets/images/product/thumb_688f26ea773d71754212074.webp" alt="products-details">
                        <a href="https://dropupseller.com/assets/images/product/688f26ea773d71754212074.webp" onclick="javascript:downloadSingleImage('https://dropupseller.com/assets/images/product/688f26ea773d71754212074.webp','688f26ea773d71754212074.webp')" class="btn btn-sm btn--primary w-100"><i class="la la-download"></i></a>
                    </div></div><div class="owl-item active" style="width: 51.75px;"><div class="thumbs mx-1">
                        <img src="https://dropupseller.com/assets/images/product/thumb_688f26eab76a71754212074.jpg" alt="products-details">
                        <a href="https://dropupseller.com/assets/images/product/688f26eab76a71754212074.jpg" onclick="javascript:downloadSingleImage('https://dropupseller.com/assets/images/product/688f26eab76a71754212074.jpg','688f26eab76a71754212074.jpg')" class="btn btn-sm btn--primary w-100"><i class="la la-download"></i></a>
                    </div></div><div class="owl-item active" style="width: 51.75px;"><div class="thumbs mx-1">
                        <img src="https://dropupseller.com/assets/images/product/thumb_688f26eb26cdc1754212075.jpg" alt="products-details">
                        <a href="https://dropupseller.com/assets/images/product/688f26eb26cdc1754212075.jpg" onclick="javascript:downloadSingleImage('https://dropupseller.com/assets/images/product/688f26eb26cdc1754212075.jpg','688f26eb26cdc1754212075.jpg')" class="btn btn-sm btn--primary w-100"><i class="la la-download"></i></a>
                    </div></div><div class="owl-item" style="width: 51.75px;"><div class="thumbs mx-1">
                        <img src="https://dropupseller.com/assets/images/product/thumb_688f26eb864281754212075.jpg" alt="products-details">
                        <a href="https://dropupseller.com/assets/images/product/688f26eb864281754212075.jpg" onclick="javascript:downloadSingleImage('https://dropupseller.com/assets/images/product/688f26eb864281754212075.jpg','688f26eb864281754212075.jpg')" class="btn btn-sm btn--primary w-100"><i class="la la-download"></i></a>
                    </div></div><div class="owl-item" style="width: 51.75px;"><div class="thumbs mx-1">
                        <img src="https://dropupseller.com/assets/images/product/thumb_688f26eca19011754212076.webp" alt="products-details">
                        <a href="https://dropupseller.com/assets/images/product/688f26eca19011754212076.webp" onclick="javascript:downloadSingleImage('https://dropupseller.com/assets/images/product/688f26eca19011754212076.webp','688f26eca19011754212076.webp')" class="btn btn-sm btn--primary w-100"><i class="la la-download"></i></a>
                    </div></div><div class="owl-item" style="width: 51.75px;"><div class="thumbs mx-1">
                        <img src="https://dropupseller.com/assets/images/product/thumb_688f27723020e1754212210.jpg" alt="products-details">
                        <a href="https://dropupseller.com/assets/images/product/688f27723020e1754212210.jpg" onclick="javascript:downloadSingleImage('https://dropupseller.com/assets/images/product/688f27723020e1754212210.jpg','688f27723020e1754212210.jpg')" class="btn btn-sm btn--primary w-100"><i class="la la-download"></i></a>
                    </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev"><i class="las la-angle-left"></i></div><div class="owl-next"><i class="las la-angle-right"></i></div></div><div class="owl-dots disabled"></div><div class="owl-thumbs"></div></div>
            </div>

            <div class="col-lg-5">
                                <div class="product-details-content product-details">
                    <h4 class="title">HOCO W35 Max Wireless Bluetooth Headphones (90h)</h4>

                    <div class="ratings-area justify-content-between">
                        <div class="ratings">
                            <i class="lar la-star"></i><i class="lar la-star"></i><i class="lar la-star"></i><i class="lar la-star"></i><i class="lar la-star"></i>                        </div>
                        <span class="ml-2 mr-auto">(0)</span>
                    </div>
                    

                    <div class="price" style="font-size: 18px!important;">
                        <span>Dropshopper Price:</span>
                                                <span style="font-size: 16px!important;" class="price-data">৳1045</span>
                                                
                                                                    </div>
                    <div class="price" style="font-size: 18px!important;" hidden="">
                        <span>Minimum Price:</span>
                                                <span style="font-size: 16px!important;" class="price-data">৳1149.5</span>
                                            </div>
                                        <div class="price" style="color:#2563eb;">
                        <span>Suggested Price: </span>
                        <span style="font-size: 16px!important;" class="price-data">৳1800</span>
                    </div>
                                        <div class="price flex items-center" style="color:#000000;">
                        <span>Selling Price: </span>
                        <input type="number" class="form-control border" name="selling_price" id="selling_price" placeholder="Selling Price" style="width: 15ch;">
                    </div>
                    <div class="price">
                        <span>Your Profit: ৳</span><span style="font-size: 16px!important;" class="price-data" id="profit">0</span>

                    </div>
                    <p>
                                            </p>

                    
                    <div class="cart-and-coupon mt-3">

                        <div class="attr-data">
                        </div>

                                                <div class="cart-plus-minus quantity">
                            <div class="cart-decrease qtybutton dec">
                                <i class="las la-minus"></i>
                            </div>
                            <input type="number" name="quantity" min="1" value="1" class="integer-validation">
                            <div class="cart-increase qtybutton inc">
                                <i class="las la-plus"></i>
                            </div>
                        </div>
                                                <div class="add-cart">
                            
                            <a href="#" id="buy_now_btn" class="btn btn-warning text-white" data-id="2647">Buy Now</a>
                                                    </div>
                    </div>

                    <div>
                        <p class="acc">
                            <b>
                                Categories:
                            </b>
                                                        <a href="https://dropupseller.com/market/category/20/electronics-gadgets">Electronics / Gadgets</a>
                                                        /
                                                                                    <a href="https://dropupseller.com/market/category/47/mobile-accessories">Mobile Accessories</a>
                                                                                </p>
                                                <p>
                            <b>Model:</b> W35Max
                        </p>
                                                <p>
                            <b>Brand:</b> Non-Brand
                        </p>
                        <p>
                            <b>SKU:</b> <span class="product-sku">87</span>
                        </p>

                        

                                            </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card" style="overflow:visible;">
                    <div class="card-body">
                        <div style="font-size: 12px;"><span>Delivery</span></div>
                                                
                        <hr>
                        <div style="font-size: 13px; padding:5px; line-height:15px;"><i class="las la-box"></i>
                            <strong>Standard Delivery</strong>
                        </div>
                        <div style="font-size: 12px; padding:5px; line-height:15px;">3-10 days</div>

                        <hr>

                        <div class="mt-2" style="font-size: 13px;  padding:5px; line-height:15px;">Services </div>
                        <div style="font-size: 13px;  padding:5px; line-height:15px; font-weight:500;"><i class="las la-undo-alt"></i> 3 Days Easy Return <a href="https://dropupseller.com/market/pages/88/return-policy" style="float:right;"><i class="las la-info-circle"></i></a></div>

                        
                    </div>
                </div>
                <div class="card mt-2">
                    <div class="card-body">
                                                <div style="font-size: 14px; padding:5px; line-height:15px;">
                            Sold by:
                        </div>
                        <div><a style="font-size: 18px;" href="https://dropupseller.com/market/seller/46-sobpabo" target="_blank" rel="noopener noreferrer">
                                sobpabo
                            </a>
                                                        <a href="#" data-toggle="modal" data-target="#chat_modal" class=" ml-3" style="float:right;"><i class="las la-comments"></i> Chat</a>
                                                    </div>
                                            </div>
                </div>
                                <div class="card mt-2">
                    <div class="card-body">
                                                <div style="font-size: 14px; padding:5px; line-height:15px;">
                            Dropshopper Tools:
                        </div>
                        
                                                <div>
                            <a href="javascript:copyElementText('description')" class="btn btn-success m-2" id="desCopyBtn">Copy Description</a>
                        </div>
                                            </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Product Single Section Ends Here -->

<!-- Product Single Section Starts Here -->
<div class="products-description padding-bottom padding-top-half">
    <div class="container">

        <ul class="nav nav-tabs">
            <li>
                <a href="#description" class="active" data-toggle="tab">Description</a>
            </li>

            <li>
                <a href="#specification" data-toggle="tab">Specification</a>
            </li>

            <li>
                <a href="#video" data-toggle="tab">Video</a>
            </li>

            <li>
                <a href="#reviews" data-toggle="tab">Reviews(0)</a>
            </li>

            <li>
                <a href="#delivary" data-toggle="tab">Delivary</a>
            </li>

        </ul>
        <div class="tab-content">
            <div class="tab-pane fade show active" id="description">
                <div class="description-item">
                                        <p id="description_text">
                        Product Description:Speaker unit: 40MM diameterImpedance: 32Ω±15%Sensitivity: 98dB±3dBFrequency response: 20HZ~20000HzBluetooth specifications: Bluetooth V5.3 Jerry JL7006F4Supported protocols: A2DP, AVRCP, HSP, HFPTransmission range: 10 meters Transmission frequency: 2.4GHzCharging voltage: DC 5VTalk time: about 90 hours Music time: 90 hours/ 45h (80% volume)Standby time: more than 200 hoursBattery capacity: 800mAh; charging time: about 2 hoursProduct net weight: 262gProduct size: 204*174*82mmSupports Chinese and English prompt sounds: double-click the M key when not paired                    </p>
                                    </div>

                            </div>
            <div class="tab-pane fade" id="specification">
                <div class="specification-wrapper">
                                        <div class="alert cl-title alert--base" role="alert">
                        No Specification For This Product                    </div>
                                    </div>
            </div>

            <div class="tab-pane fade" id="video">
                                <div class="alert cl-title alert--base" role="alert">
                    No Video For This Product                </div>
                            </div>

            <div class="tab-pane fade" id="reviews">
                <div class="review-area">
                                        <div class="alert cl-title alert--base" role="alert">
                        No Reviews For This Product.                    </div>
                                    <div class="alert cl-title alert--base" role="alert">
        <strong>No reviews yet for this product</strong>
    </div>

</div>
            </div>

            <div class="tab-pane fade" id="delivary">
                <div class="delivary-area">
                                    </div>
            </div>
        </div>
        

    </div>
</div>
            </div>



