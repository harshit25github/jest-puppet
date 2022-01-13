import BasePage from "./basePages";

export default class HomePage extends BasePage {
  async visit() {
    await page.goto("https://www.cheapoair.com/");
    await page.waitForSelector("#app");
    await page.waitForTimeout(3000);
  }

  async oneWayTrip() {
    await page.waitForSelector("#onewayTrip");
    await page.click("#onewayTrip");
    //SFO - San Francisco All Airports, California, United States
    //LAS - Las Vegas All Airports, Nevada, United States
    await page.waitForSelector("#from0");
    await page.type(
      "#from0",
      "SFO - San Francisco All Airports, California, United States"
    );
    await page.waitForSelector("#to0");
    await page.type(
      "#to0",
      "LAS - Las Vegas All Airports, Nevada, United States"
    );
    await page.waitForSelector("#cal0");
    await page.click("#cal0");
    // await page.type("#cal0", "Apr 06");
    // await page.keyboard.press("Enter");
    // await page.waitForSelector(
    //   "#widgetcalendar > div.calendar__wrapper.clearfix > div:nth-child(1) > div:nth-child(3) > div:nth-child(18) > "
    // );
    // await page.click(
    //   "#widgetcalendar > div.calendar__wrapper.clearfix > div:nth-child(1) > div:nth-child(3) > div:nth-child(18) "
    // );
    // await page.focus("#cal0");
    // await page.keyboard.type("2022-01-15");
    // let dateString = await page.evaluate(
    //   (d) =>
    //     new Date(d).toLocaleDateString(navigator.language, {
    //       day: "22",
    //       month: "2",
    //       year: "2022",
    //     }),
    //   date.toISOString()
    // );
    // await page.type("#cal0", dateString);
    await page.waitForTimeout(2000);
    const frame = await page.waitForSelector(
      "#widgetcalendar > div.calendar__wrapper.clearfix > div:nth-child(1) > div:nth-child(3) > div:nth-child(26)"
    );
    const rect = await page.evaluate((el) => {
      const { x, y } = el.getBoundingClientRect();
      return { x, y };
    }, frame);
    console.log(rect, "hii i m the console");
    const offset = { x: 787 + 5, y: 171 + 5 };

    await page.mouse.click(rect.x + offset.x, rect.y + offset.y);
    await page.click("#closeCalendar");
    await page.waitForSelector("#searchNow");
    await page.click("#searchNow");
    // await page.waitForSelector("#edit_widget");

    await page.waitForTimeout(3000);
  }
  async enterOnlineBanking() {
    await page.waitForSelector("#onlineBankingMenu");
    await page.click("#onlineBankingMenu");
  }
  async enterHome() {
    await page.waitForSelector("#feedback");
    await page.click("#feedback");
  }
}
// await page.click("#menu-item-12674");
// const element = await page.waitForSelector("#menu-item-12686", {
//   visible: true,
// });
// await element.click();
// await page.waitForSelector("#abou_secmap");
// await page.waitForTimeout(3000);
