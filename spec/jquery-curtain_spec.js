Screw.Unit(function() {
  describe("jquery-curtain", function() {
    //Clean up the curtain after each run.
    after(function() { $("#container").curtain("remove"); });

    describe('when curtain is applied with the default options', function() {
      before(function() { $("#container").curtain(); });

      it("should have the curtain div placed over it", function() {
        expect($("#container").curtain('get').length).to(equal, 1);
      });
    });

    describe('when the curtain is removed', function() {
      before(function() { $("#container").curtain().curtain("remove"); });

      it("should no longer exist", function() {
        expect($("#container").curtain('get').length).to(equal, 0);
      });
    });
    
    describe('when the curtain is invoked without an image', function() {
      before(function() { $("#container").curtain({ loader_image: '' }); });
      
      it("should not have an image inside the curtain", function() {
        expect($("#container").curtain('get').find("img").length).to(equal, 0);
      });
    });
    
    describe("when the curtain is placed over an absolutely positioned element", function() {
      before(function() { $("#test_abs_pos").curtain(); });
      
      it("should display in the correct location", function() {
        expect($("#test_abs_pos").curtain('get').offset()).to(equal, $("#test_abs_pos").offset());
      });
    });
    
    describe("when requesting the curtain for an element that doesn't exist", function() {
      it("should return an empty jQuery object", function() {
        expect($("#princess_leia").curtain('get').length).to(equal, 0);
      });
    });
  });
});
