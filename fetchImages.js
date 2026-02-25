import https from 'https';

https.get('https://www.whiskailabs.com/', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const regex = /<img[^>]+src="([^">]+)"/g;
        let match;
        const urls = new Set();
        while ((match = regex.exec(data)) !== null) {
            if (match[1].startsWith('http') || match[1].startsWith('/')) {
                urls.add(match[1]);
            }
        }
        console.log(Array.from(urls).join('\n'));
    });
});
