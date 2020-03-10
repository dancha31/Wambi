const mapsPage = require("../pages/maps.page")
const mapsUtil = require("../utils/directions.util")
const loginPage = require("../pages/login.page")

describe.only("Send directions to phone",() =>{

    it("navigates to the login page when clicked on phone link",() => {
        loginPage.getDirectionstoPhone()
        loginPage.setEmail()
        loginPage.clickEmailNextButton()
        loginPage.setPassword()
        loginPage.clickPasswordNextButton()
        loginPage.headingText.waitForDisplayed()
       assert.include(loginPage.headingText.getText(),"Couldn\'t sign you in")
    })
})