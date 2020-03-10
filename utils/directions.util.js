const mapsPage = require("../pages/maps.page")
class DirectionsUtil{

    getDirections(origin,destination){
        browser.url('/maps');
        mapsPage.directionsButton.click()
        mapsPage.setOriginText(origin)
        mapsPage.clickFirstResult()
        mapsPage.setDestinationText(destination)
        mapsPage.clickDestinationResult()
    }

}
module.exports = new DirectionsUtil()