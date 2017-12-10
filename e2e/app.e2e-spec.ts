import { Angular2PhotoGalleryPage } from './app.po';

describe('angular2-photo-gallery App', () => {
  let page: Angular2PhotoGalleryPage;

  beforeEach(() => {
    page = new Angular2PhotoGalleryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
