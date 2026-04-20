const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    const data = await page.evaluate(() => {
      const getRect = (selector) => {
        const el = document.querySelector(selector);
        if (!el) return 'NOT FOUND';
        const rect = el.getBoundingClientRect();
        return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
      };

      const computedStyle = (selector, prop) => {
        const el = document.querySelector(selector);
        if (!el) return 'NOT FOUND';
        return window.getComputedStyle(el).getPropertyValue(prop);
      };

      return {
        header: getRect('header'),
        logo: getRect('header a[href="/"]'),
        navLinks: getRect('header nav'),
        bodyFont: computedStyle('body', 'font-family'),
        banner: getRect('section.bg-gray-300'),
        bodyOverflow: computedStyle('body', 'overflow-x')
      };
    });

    console.log(JSON.stringify(data, null, 2));
    await browser.close();
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
})();
