const { products } = require('./data/index.js');
const https = require('https');

const checkUrl = (url) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', (e) => {
            resolve({ url, status: e.message });
        });
    });
};

const verifyImages = async () => {
    console.log('Verifying image URLs...');
    const promises = products.map((product) => checkUrl(product.img));
    const results = await Promise.all(promises);

    let invalidCount = 0;
    results.forEach(result => {
        if (result.status !== 200) {
            console.log(`[INVALID] ID: ${products.find(p => p.img === result.url)?.id} | Status: ${result.status} | URL: ${result.url}`);
            invalidCount++;
        }
    });

    if (invalidCount === 0) {
        console.log('All image URLs are valid!');
    } else {
        console.log(`Found ${invalidCount} invalid image URLs.`);
    }
};

verifyImages();
