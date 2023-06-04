
describe('Тестирование формы логина и пароля', function () {
    it('Ввести правильный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно')
         cy.get('#exitMessageButton > .exitIcon')
     })
     
     it('Востановить пароль', function () {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('Karim@sagitov.com')
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
    })

    it('Ввести правильный логин и  неверный пароль', function () {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('AAAAAAAAAAAAAAAAa')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
    })


    it('Ввести несуществующий логин и правильный пароль', function () {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('Karim@sagitov.com')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет')
        cy.get('#exitMessageButton > .exitIcon')
    })

    it('Ввести невалидный Email', function () {
        cy.clearCookies()
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('touufufufu')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')
        cy.get('#exitMessageButton > .exitIcon')
    })



    it('строчные буквы', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('gErMan@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно')
        cy.get('#exitMessageButton > .exitIcon')
    })
})
