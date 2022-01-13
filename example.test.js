import jestConfig from "./jest.config";
import HomePage from "./pages/HomePage";

describe("test fareportal", () => {
  let hp;
  beforeAll(async () => {
    hp = new HomePage();
  });
  it("open web ", async () => {
    await hp.visit();
  });
  it("clicking on oneWayTrip  ", async () => {
    await hp.oneWayTrip();
  });
  // it("clicking on online banking  ", async () => {
  //   await hp.enterOnlineBanking();
  // });
  // it("clicking on feedback ", async () => {
  //   await hp.enterFeedback();
  // });
});
