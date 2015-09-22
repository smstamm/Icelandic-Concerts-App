// TESTS FOR TITLE
describe('Icelandic Concert App', function() {
  it('should have a title', function() {
    browser.get('http://smstamm.github.io/Icelandic-Concerts-App/');

    expect(browser.getTitle()).toEqual('Icelandic Concerts');
  });
});



// TESTS TO RUN:
// Does styling load
// Does API populate correctly
//   Do pictures load
//   Do links load





// TESTS FOR IMAGE LOADING
// describe('Icelandic Concert App', function() {
//   it("should load images", function() {
//     browser.get("http://smstamm.github.io/Icelandic-Concerts-App/");

//     expect()
//   })
// })




// describe('Icelandic Concert App', function() {
//   var firstNumber = element(by.model('first'));
//   var secondNumber = element(by.model('second'));
//   var goButton = element(by.id('gobutton'));
//   var latestResult = element(by.binding('latest'));
//   var history = element.all(by.repeater('result in memory'));

//   function add(a, b) {
//     firstNumber.sendKeys(a);
//     secondNumber.sendKeys(b);
//     goButton.click();
//   }

//   beforeEach(function() {
//     browser.get('http://juliemr.github.io/protractor-demo/');
//   });

//   it('should have a history', function() {
//     add(1, 2);
//     add(3, 4);

//     expect(history.last().getText()).toContain('1 + 2');
//     expect(history.first().getText()).toContain('3 + 4'); // This is wrong!
//   });
// });