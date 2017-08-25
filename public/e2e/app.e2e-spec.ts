import { BeltExamFinalPage } from './app.po';

describe('belt-exam-final App', () => {
  let page: BeltExamFinalPage;

  beforeEach(() => {
    page = new BeltExamFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
