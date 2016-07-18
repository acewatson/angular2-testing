
describe('Produce Tracker E2E Tests', function () {

  let expectedMsg = 'Produce Tracker';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
