describe("nameFun", function(){
  it("should return 'Hello Makho' when checked 'English'", function(){
    var EnglishGreeting = "Hello, Makho";
    assert.equal(nameFun("Makho", "English"), EnglishGreeting);
})
it("should return 'Molo Yanga' when checked 'IsiXhosa'",function(){
 var IsiXhosaGreeting = "Molo, Yanga";
  assert.equal(nameFun("Yanga", "IsiXhosa"), IsiXhosaGreeting);
})
it("should return 'Hallo Thabs' when checked 'Afrikaans'", function(){
var AfrikaansGreeting = "Hallo weer, Thabs";
  assert.equal(nameFun("Thabs", "Afrikaans"), AfrikaansGreeting);
})
})
