import { ShippingLabelPage } from './app.po';

describe('shipping-label App', function() {
  let page: ShippingLabelPage;

  beforeEach(() => {
    page = new ShippingLabelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
