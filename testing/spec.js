// TESTS FOR TITLE
describe('Icelandic Concert App', function() {
  it('should have a title', function() {
    browser.get('http://smstamm.github.io/Icelandic-Concerts-App/');

    expect(browser.getTitle()).toEqual('Icelandic Concerts');
  });
});