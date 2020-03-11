 const mapsPage = require("../pages/maps.page")
 const searchData = require("../data/searchData")
 const mapsUtil = require("../utils/directions.util")

describe("google maps navigation",function(){

    it("search returns results", () => {
        browser.url('/maps');
        mapsPage.setSearchBox(searchData.origin)
        mapsPage.firstResult.waitForDisplayed()
        let numberOfResults = mapsPage.searchResultCount.length;
        assert.isAbove(numberOfResults,0,"results are returned")
    })

    it("maps navigates to searched place",()=>{
        browser.url('/maps');
        mapsPage.setSearchBox(searchData.origin)
        mapsPage.clickFirstResult()
        let searchTerm = searchData.origin.split(" ")
        mapsPage.headerTitle.waitForDisplayed()
        assert.include(browser.getUrl(),searchTerm[0],"contains search result")
        assert.equal(mapsPage.resultNotFoundText.isDisplayed(),false)
    })

    it("search returns directions and details",()=>{
        mapsUtil.getDirections(searchData.origin,searchData.destination)
        mapsPage.directionElements.waitForDisplayed()
        assert.isAbove(mapsPage.directions,0,"directions are returned")
        mapsPage.directionElements.click()
        mapsPage.directionDetails.waitForDisplayed()
        let directionsDisplayed = mapsPage.directionDetails.isDisplayed()
        assert.equal(directionsDisplayed,true,"Directions are displayed")
    })

    it("reverse the origin and destination",()=>{
        mapsUtil.getDirections(searchData.origin,searchData.destination)
        initialDestination = mapsPage.destinationText.getText()
        assert.include(initialDestination,"Explore San Francisco")
        mapsPage.reverseIcon.click()
        mapsPage.loadingSpinner.waitForDisplayed({ reverse: true });
        mapsPage.destinationText.waitForDisplayed()
        reverseDestination = mapsPage.destinationText.getText()
        assert.equal(reverseDestination,"Explore Philadelphia")
    })

    it("closes directions",()=>{
        mapsUtil.getDirections(searchData.origin,searchData.destination)
        mapsPage.loadingSpinner.waitForDisplayed({ reverse: true });
        mapsPage.directionElements.waitForDisplayed()
        mapsPage.tripTime.waitForDisplayed()
        assert.isAbove(parseInt(mapsPage.tripTime.getText()),40,"results are returned")
        mapsPage.closeDirections.click()
        assert.equal(mapsPage.initialSearchBox.isDisplayed(),true)        
    })

    it("asserts distance units change with selection under Options ",()=>{
        mapsUtil.getDirections(searchData.origin,searchData.destination)
        mapsPage.optionsButton.waitForDisplayed()
        mapsPage.optionsButton.click()
        mapsPage.directionElements.waitForDisplayed()
        mapsPage.distanceUnitsKmButton.click()
        mapsPage.loadingSpinner.waitForDisplayed({ reverse: true });
        assert.include(mapsPage.tripDistance.getText(),"km","contains selected distance unit")
    })

})