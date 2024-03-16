async function getProductTitle(page) {
    return await page.$eval('#productTitle', el => el.textContent.trim());
}

async function getProductPrice(page) {
    const price = await page.$eval('.a-price.priceToPay', el => el.textContent.trim());
    return price;
}

async function getProductRating(page) {
    return await page.$eval('.a-icon-alt', el => el.textContent.trim());
}

async function getProductReviewCount(page) {
    return await page.$eval('#acrCustomerReviewText', el => el.textContent.trim());
}

async function getProductViews(page) {
    return await page.$eval('.a-section.social-proofing-faceout-title', el => el.textContent.trim());
}

async function getProductDescription(page) {
    const descriptionElement = await page.$('.a-unordered-list.a-vertical.a-spacing-mini');
    const descriptionParagraphs = await page.evaluate(descriptionElement => {
        const paragraphs = descriptionElement.querySelectorAll('li');
        return Array.from(paragraphs, p => p.textContent.trim());
    }, descriptionElement);
    return descriptionParagraphs;
}

module.exports = {
    getProductTitle,
    getProductPrice,
    getProductRating,
    getProductReviewCount,
    getProductViews,
    getProductDescription
};
