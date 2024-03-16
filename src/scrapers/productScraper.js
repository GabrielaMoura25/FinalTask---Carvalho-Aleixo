const { getProductTitle, getProductPrice, getProductDescription, getProductRating, getProductReviewCount, getProductViews } = require('../utils/scraperUtils');

/*
 Extrai informações detalhadas de um produto na Amazon.
 */

async function getProductDetails(page) {
    const title = await getProductTitle(page);
    const price = await getProductPrice(page);
    const rating = await getProductRating(page);
    const reviewCount = await getProductReviewCount(page);
    const views = await getProductViews(page);
    const description = await getProductDescription(page);

    return {
        title,
        price,
        description,
        rating,
        reviewCount,
        views
    };
}

module.exports = {
    getProductDetails
}