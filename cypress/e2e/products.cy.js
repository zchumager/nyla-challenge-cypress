/// <reference types="cypress" />


import product from '../selectors/products.actions'

describe('E2E: Product', () => {

  beforeEach(() => {
    // Asserts Nyla cart and aside cart do not exists when page is visited
    product.visit()

    // Asserts panels are not displayed when page is visited
    cy.get(product.cartPanel).should('not.exist')
    cy.get(product.asidePanel).should('not.exist')
  })

  it('The user clicks SITE-E2E link', () => {
    product.clickSiteE2E()
    cy.wait(4000)
    cy.url().then(url => {
      expect(url).not.contain("products/qa")
    })
  })

  it('The user clicks cart link', () => {
      product.clickCartLink()

      cy.get(product.cartPanel).should('exist')
      cy.get(product.asidePanel).should('exist')
  })

  it('The user clicks cart icon button', () => {
    product.clickCartIcon()

    cy.get(product.cartPanel).should('exist')
    cy.get(product.asidePanel).should('exist')
  })

  it('The user clicks close button', () => {
    product.clickCartIcon()
    product.closeCart()

    cy.get(product.cartPanel).should('not.exist')
    cy.get(product.asidePanel).should('not.exist')
  })

  it("The user's cart started empty", () => {
    product.clickCartIcon()
    cy.contains(product.cartEmptyMsg).then(element => {
      expect(element.text()).equal("You don't have anything in your cart!")
    })
  })

  it('The user checkouts purchase', () => {
    /**
     * This test should fails since there is an issue
     * since there are more that one checkout button
     */
    product.clickAddToCart()
    cy.get(product.checkoutBtn).then(element => {
      expect(element.text()).eq('Checkout')
    })
  })

  it("The user's cart content should be 1", () => {
    product.clickAddToCart()
    product.closeCart()

    cy.get(product.cartIcon).then((element) => {
      expect(element.text()).equal('1')
    })
  })

  it('The user changes shade selection', () => {
    cy.get(product.SHADE.DOMINO_BLACK).should('have.class', 'selected')
    cy.contains('Shade: Domino Black').should('exist')

    cy.get(product.SHADE.SCOUT_TAN)
      .should('not.have.class', 'selected')
      .click({timeout: 5000})

      cy.contains('Shade: Domino Black').should('not.exist')
      cy.contains('Shade: Scout Tan').should('exist')

      cy.get(product.SHADE.SCOUT_TAN)
      .should('have.class', 'selected')
  })

  it('test derby black ones are out of stock', () => {
    cy.get(product.SHADE.DERBY_BLACK).should('have.class', 'out-of-stock')
    cy.get(product.SHADE.DERBY_BLACK_CANVAS).should('have.class', 'out-of-stock')
  })

  it('test ingredients button', () => {
    const partialText = 'A Clean Chemical SPF: Daily Dose is formulated with Clean Chemical SPF 40'

    cy.contains(partialText).should('not.exist')
    product.clickIngredients()
    cy.contains(partialText).should('exist')
  })

  it('test how to apply button', () => {
    const partialText = 'If this is the only SPF product in your skincare routine,'
    cy.contains(partialText).should('not.exist')
    product.clickHowToApply()
    cy.contains(partialText).should('exist')
  })
})
