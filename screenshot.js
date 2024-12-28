const { chromium } = require('playwright-chromium')

const URLS = [
  {
    url: 'http://localhost:3000/skills',
    outputPath: 'doc/skills-screenshot.jpeg',
    size: [1920, 666],
  },
  {
    url: 'http://localhost:3000/skills?hideYear',
    outputPath: 'doc/skills-screenshot-hideYear.jpeg',
    size: [1920, 230],
  },
]

async function generateScreenshots(urls) {
  const browser = await chromium.launch()

  for (const urlObj of urls) {
    const context = await browser.newContext({
      viewport: {
        width: urlObj.size[0],
        height: urlObj.size[1],
      },
      deviceScaleFactor: 2,
    })
    const page = await context.newPage()
    await page.goto(urlObj.url, { waitUntil: 'networkidle' })
    await page.screenshot({
      path: urlObj.outputPath,
      fullPage: true,
      quality: 80,
    })
    page.close()
  }

  await browser.close()
}

;(async function () {
  console.log('Start screenshots...')
  await generateScreenshots(URLS).catch(console.error)
  console.log('Completed!')
})()
