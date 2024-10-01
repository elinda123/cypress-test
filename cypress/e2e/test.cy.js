describe('regionaalhaigla otsing', () => {
    
    it('külasta regionaalhaigla lehte, kasuta otsingusõna ja ava artikkel', () => {
        cy.visit('https://www.regionaalhaigla.ee/')
        cy.get('#search-block-form')
          .find('[type="text"]').type('teenetemärgid', { 
              delay: 100
          })

        cy.get('#search-block-form').submit()
        cy.url({ decode: true }).should('contain', 'teenetemärgid')
        cy.get('.search-result').should('contain', 'Presidendi teenetemärgi pälvisid dr Ülo Zirel ja dr Valdo Toome')
            //.then(console.log)
            .eq(6)
            .scrollIntoView()
            .find('a')
            .click()

        cy.url().should('contain', 'teenetemargi-palvisid-dr-ulo-zirel-ja-dr-valdo-toome')
        cy.get('.date').should('contain', '07.02.2024')
    })
})