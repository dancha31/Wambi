class Maps {

    get searchBox(){
        return $('#searchboxinput')
    }

    setSearchBox(startpoint) {
        this.searchBox.setValue(startpoint)
        browser.pause(2000)
    }
    
    /* get results(){
        return $("#suggestions li")
    } */

    get results(){
        return $(".suggestions-grid div")
    }

    get firstResult(){
        return $(".suggest-query span")
    }

    get headerTitle(){
        return $(".section-hero-header-title")
    }

    get directionsBtn(){
        return $("//button[@data-value='Directions']")
    }

    get destinationResult(){
        return $("#omnibox-directions #suggestions-grid .suggest-query span")
    }

    get searchResultCount(){
        return $$("#omnibox-singlebox #suggestions-grid div")
    }

    get directions(){
        return $$(".section-directions-trip-description").length
    }

    get directionList(){
        return $("//div[@class='section-layout']")
    }

    get directionElements(){
        return this.directionList.$('div');
    }

    get loadingSpinner(){
        return $(".section-loading-spinner")
    }

    get detailsButton(){
        return $(".section-directions-trip-details-link")
    }

    get directionDetails(){
        return $(".directions-mode-nontransit-groups")
    }

    get closeDirections(){
        return $("//div[@guidedhelpid='close_directions']")
    }

    get reverseIcon(){
        return $(".widget-directions-reverse")
    }

    get initialSearchBox(){
        return $("#searchbox")
    }

    get tripTime(){
        return $(".section-directions-trip-numbers span")
    }

    get tripDistance(){
        return $(".section-directions-trip-distance div")
    }

    get optionsButton(){
        return $(".section-directions-options-link")
    }

    get distanceUnitsKmButton(){
        return $("//label[@for='pane.directions-options-units-km']")
    }
    get directionsToPhoneButton(){
        return $(".section-directions-action-button")
    }
    get signInButton(){
        return $(".widget-signin-promo-button")
    }

    get resultNotFoundText(){
        return $(".section-bad-query")
    }

    clickDirectionsToPhoneButton(){
        this.directionsToPhoneButton.waitForDisplayed()
        console.log("Button is clicked")
        this.directionsToPhoneButton.click()
    }

    clickSignInButton(){
        console.log("Sign In is clciked")
        this.signInButton.click()
    }

    clickFirstResult(){
        this.firstResult.waitForDisplayed()
        this.firstResult.click();
    }

    clickDirectionsButton(){
        this.directionsBtn.waitForDisplayed()
        this.directionsBtn.click()
    }

    clickDestinationResult(){
        this.destinationResult.waitForDisplayed()
        this.destinationResult.click()
    }

    clickDetailsButton(){
        this.detailsButton.click()
    }

    get directionsButton(){
        return $("#searchbox-directions")
    }

    get originInput(){
       return $("#directions-searchbox-0 input")
    }

    get destinationInput(){
       return $("#directions-searchbox-1 input")
    }

    setOriginText(origin){
        this.originInput.waitForEnabled()
        this.originInput.setValue(origin)
    }

   setDestinationText(destination){
        this.destinationInput.waitForEnabled()
        this.destinationInput.setValue(destination)
    }

    get destinationText(){
        return $(".section-subheader-header")
    }

    sendDirectionsToPhone(){
        this.directionsToPhoneButton.waitForDisplayed()
        this.clickDirectionsToPhoneButton()
        this.clickSignInButton()
    }

}

module.exports = new Maps()