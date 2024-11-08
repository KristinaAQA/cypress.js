describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  

     })

    it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio7');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  

     })

    it('Неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('kristina@qa.ru');
         cy.get('#pass').type('iLoveqastudio7');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Такого логина или пароля нет'); 
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  

   
      })

    it('Проверка, что в пароле есть @', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); 
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 


    })

      it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();

         cy.get('#mailForgot').type('german@dolnikov.ru');
         cy.get('#restoreEmailButton').click();

         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); 
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 

     })

       it('Проверка на приведение строчных букв в логине', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 

     })

      describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('USER_LOGIN');                   // вводим логин
         cy.get('input[type="password"]').type('USER_PASSWORD');               // вводим пароль
         cy.get('button[type="submit"]').click();                        // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });

})
   






