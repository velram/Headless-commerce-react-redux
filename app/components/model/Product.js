class Product{
    constructor(product_id, displayName, salePrice, listPrice, productImageURL, thumbnailImages, reviewStars, totalReviews, discountPercent,availableQuantity,swatches,colors,storage, category, brand){
        this.product_id = product_id;
        this.displayName = displayName;
        this.salePrice = salePrice;
        this.listPrice = listPrice;
        this.availableQuantity = availableQuantity;
        this.productImageURL = productImageURL;
        this.thumbnailImages = thumbnailImages;
        this.reviewStars = reviewStars;
        this.totalReviews = totalReviews;
        this.discountPercent = discountPercent;
        this.swatches = swatches;
        this.colors = colors;
        this.storage = storage;
        this.category = category;
        this.brand = brand;
    }
}

export default Product;