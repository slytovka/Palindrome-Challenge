var palindromeFactorial = require("../app").palindromeFactorial;

describe("palindromeFactorial", function() {
  it("should return 24 for the array ['mom', 'dad', 'race car', 'florence healthcare', 'noon']", function(){
    var result = palindromeFactorial(['mom', 'dad', 'race car', 'florence healthcare', 'noon']);
    expect(result).toBe(24);
  });
   it("shoud return 6 for the array ['noon', 'mom', 'florence','dad']", function(){
    var result = palindromeFactorial(['noon', 'mom', 'florence','dad']);
    expect(result).toBe(6);
  });
    it("should return 1 for the array ['chromemorhc']", function(){
    var result = palindromeFactorial(['chromemorhc']);
    expect(result).toBe(1);
  });

})
