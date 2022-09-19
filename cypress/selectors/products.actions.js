class Product {
    page = 'https://site-e2e-git-develop-nyla.vercel.app/products/qa'
    siteE2ELabel= 'site-e2e'

    navBar = '.navbar-root .menu[data-nyla="content-item-menu"]'
    cartLink = `${this.navBar} > .content-item:nth-child(9)`
    cartIcon = `${this.navBar} > .content-item:nth-child(11)`
    

    addToCartBtn = '[data-nyla="add-to-cart-cb"]'
    cartPanel = '[data-nyla="cart"].open'
    cartPanelFooter = `${this.cartPanel} [data-nyla="cart_section"].footer`
    checkoutBtn = `${this.cartPanelFooter} button[data-nyla="checkout-cta"]`

    asidePanel = '[data-desktop="true"] aside.open'
    closeBtn = `${this.asidePanel} [data-nyla="close-modal-cb"]`
    cartEmptyMsg = "You don't have anything in your cart!"

    SHADE = {
        DOMINO_BLACK: '[data-nyla="option_domino-black"]',
        SCOUT_TAN: '[data-nyla="option_scout-tan"]',
        DERBY_BLACK: '[data-nyla="option_derby-black"]',
        DERBY_BLACK_CANVAS: '[data-nyla="option_derby-black-canvas"]'

    }

    ingredientsBtn = '#ingredients-desktop'
    howToApplyLabel = 'HOW TO APPLY'


    visit() {
        cy.visit(this.page)
    }

    clickSiteE2E() {
        cy.contains(this.siteE2ELabel).click()
    }

    clickCartLink() {
        cy.get(this.cartLink).click()
    }

    clickCartIcon() {
        cy.get(this.cartIcon).scrollIntoView()
        cy.get(this.cartIcon).click()
    }

    closeCart() {
        cy.get(this.closeBtn).click()
    }

    clickAddToCart() {
        cy.get(this.addToCartBtn).click({timeout:6000})
    }

    clickIngredients() {
        cy.get(this.ingredientsBtn).click()
    }

    clickHowToApply() {
        cy.contains(this.howToApplyLabel).click()
    }
}

export default new Product()

