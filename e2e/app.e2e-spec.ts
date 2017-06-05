import { TechnophiliaPage } from './app.po';

describe('technophilia App', () => {
  let page: TechnophiliaPage;

  beforeEach(() => {
    page = new TechnophiliaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
