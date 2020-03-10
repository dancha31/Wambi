const mapsPage = require("../pages/maps.page")
const mapsUtil = require("../utils/directions.util")

class Login{
    get emailInput(){
        return $("//input[@type='email']")
    }

    get passwordInput(){
        return $("//input[@type='password']")
    }

    get emailNextButton(){
        return $("#identifierNext")
    }

    get passwordNextButton(){
        return $("#passwordNext")
    }

    get assertiveText(){
        return $("//div[@aria-live='assertive']/span")
    }

    setEmail(){
        this.emailInput.setValue("abc@xyz.com")
    }

    setPassword(){
        this.passwordInput.waitForDisplayed()
        this.passwordInput.setValue("123456")
    }

    clickEmailNextButton(){
        this.emailNextButton.click()
    }

    clickPasswordNextButton(){
        this.passwordNextButton.click()
    }

    getDirectionstoPhone(){
        mapsUtil.getDirections("Philadelphia PA","San")
        mapsPage.sendDirectionsToPhone()
    }

    get headingText(){
        return $("#headingText span")
    }
}

module.exports = new Login()