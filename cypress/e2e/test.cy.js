describe('regionaalhaigla otsing', () => {
    
    it('visit regionaalhaigla page', () => {
        cy.visit('https://www.regionaalhaigla.ee/')
        cy.get('#search-block-form')
            .find('[type="text"]').type('teenetemargid')

        cy.get('#search-block-form').submit()
        cy.url().should('eq', 'https://www.regionaalhaigla.ee/et/search/site/teenetemargid')

    })
})