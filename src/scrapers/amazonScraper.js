const { getProductDetails } = require('./productScraper');

async function scrapeAmazonProduct(page) {
    // Configurar o cabeçalho user-agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36');

    // Navega para o site da Amazon
    await page.goto('https://www.amazon.com/');

    await page.setViewport({width: 1080, height: 1024});

    // Muda o endereço para 11001
    await page.evaluate(() => {
        document.querySelector('#nav-global-location-slot .a-declarative').click();
    });
    await page.waitForSelector('#GLUXZipUpdateInput');
    await page.type('#GLUXZipUpdateInput', '11001');
    await page.click('#GLUXZipUpdate > span > input');
    await page.click('.a-button-inner > button');

    // Espera 1 segundo após digitar antes de clicar
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    // // Pesquisar por "garlic press"
    await page.waitForSelector('#twotabsearchtextbox');
    await page.type('#twotabsearchtextbox', 'garlic press', { delay: 100 });
    await new Promise(resolve => setTimeout(resolve, 1000));
    await Promise.all([
        page.waitForNavigation(), // Esperar até que a navegação seja concluída após o clique
        page.click('#nav-search-submit-button')
    ]);

    await new Promise(resolve => setTimeout(resolve, 2000)); 
  
    // Espera que os produtos sejam carregados
    await page.waitForSelector('[data-cy="title-recipe"]');

    // Encontra todos os elementos com o atributo data-cy="title-recipe"
    const titleRecipeElements = await page.$$('[data-cy="title-recipe"]');

    // Itera sobre os elementos encontrados
    for (const titleRecipeElement of titleRecipeElements) {
        // Verifica se o elemento tem um filho <div>
        const hasChildDiv = await titleRecipeElement.$('div') !== null;

        // Se tiver filho <div>, vá para o próximo elemento
        if (hasChildDiv) {
            continue;
        }

        // Se não tiver filho <div>, clique no link dentro do elemento
        const link = await titleRecipeElement.$('a');
        if (link) {
            await link.click();
            break; // Interrompe o loop, já que clicamos no link desejado
        }
    }

    await page.waitForSelector('#productTitle');

    const productDetails = await getProductDetails(page);
    console.log(productDetails);
    
    return productDetails;
}

module.exports = {
    scrapeAmazonProduct
};
