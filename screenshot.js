require('dotenv').config({ path: '.env.local' })

const { chromium } = require('playwright-chromium')
const HOST = 'https://code.roger.ink/proxy/3000'

const PAGES = [
  {
    url: `${HOST}/skills`,
    outputPath: 'doc/skills-screenshot.jpeg',
  },
  {
    url: `${HOST}/skills?hideYear`,
    outputPath: 'doc/skills-screenshot-hideYear.jpeg',
  },
]

async function generateScreenshots() {
  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: {
      width: 1000,
      height: 300,
    },
    deviceScaleFactor: 2,
  })
  context.addCookies([
    {
      name: 'code-server-session',
      value: process.env.CODE_SERVER_SESSION,
      domain: 'code.roger.ink',
      path: '/',
    },
  ])

  for (const pageObj of PAGES) {
    const page = await context.newPage()
    await page.goto(pageObj.url, { waitUntil: 'networkidle' })
    await page.screenshot({
      path: pageObj.outputPath,
      fullPage: true,
      quality: 80,
    })
    page.close()
  }

  await browser.close()
}

;(async function () {
  console.log('Start screenshots...')
  try {
    await generateScreenshots()
    console.log('Completed!')
  } catch (e) {
    console.error('Failed!')
    console.error(e)
  }
})()
