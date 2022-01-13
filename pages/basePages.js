const puppeteer = require("puppeteer");
export default class Basepage {
  async wait(time) {
    await page.waitForTimeout(time);
  }
  async getTitle() {
    return await page.Title();
  }

  async getUrl() {
    return await page.url();
  }
}
