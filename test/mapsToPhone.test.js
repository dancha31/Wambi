const mapsPage = require("../pages/maps.page")
const mapsUtil = require("../utils/directions.util")
const loginPage = require("../pages/login.page")

describe("Send directions to phone",() =>{

    it("navigates to the login page when clicked on phone link",() => {
        loginPage.getDirectionstoPhone()
        loginPage.setEmail()
        loginPage.clickEmailNextButton()
        loginPage.setPassword()
        loginPage.clickPasswordNextButton()
        loginPage.headingText.waitForDisplayed()
        browser.pause(2000) 
        /* let errorDisplayed = loginPage.errorMessage.isDisplayed()
        let signInError = assert.include(loginPage.headingText.getText(),"Couldn\'t sign you in")
        assert.equal(loginPage.errorMessage.isDisplayed(),true)*/
        assert.include(loginPage.headingText.getText(),"Couldn\'t sign you in")
    })
})