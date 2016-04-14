describe('angularjs homepage', function() {

    beforeEach(function() {
        browser.get('#/home');
    });

    it('should have a page title', function() {
        expect(browser.getTitle()).toContain('HealthCreek');
    });


});
