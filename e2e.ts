// Import the necessary modules
import playwright from 'playwright'
import { promisify } from 'util'
import { exec as execCb } from 'child_process'
const exec = promisify(execCb)

const chromiumPath = (await exec("which chromium")).stdout.trim()
console.log(chromiumPath)
const browser = await playwright.chromium.launch({
  executablePath: chromiumPath,
  chromiumSandbox: false
})
const context = await browser.newContext({ viewport: { width: 1024, height: 768 }, deviceScaleFactor: 4 })
const page = await context.newPage()
await page.goto(`https://example.com`)
await page.screenshot({ path: 'example.png' })
browser.close()
