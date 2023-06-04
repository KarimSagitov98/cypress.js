describe('Huntyng pony', function () {
    it('офрмление заказа', function () {
         cy.visit('https://huntingpony.com/');
         cy.get('[href="/collection/lezhanki"] > .banner-list__item-photo > :nth-child(1) > .img-ratio > .img-ratio__inner > picture > .loaded').click();
         cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
         cy.wait(1000)
         cy.get('.add-cart-counter__btn-label').click();
         cy.get('[data-add-cart-counter-plus=""]').click();
         cy.get('.header__cart > .icon').click();
         cy.get('.cart-controls > .button').click();
         cy.get('.decorated-title').contains('Оформление заказа');
        })
    })
      
    