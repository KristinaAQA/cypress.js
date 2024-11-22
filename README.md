<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным паролем и верным логином
* Авторизация c верным логином и неверным паролем
* Проверка работы валиадации на наличие @ в логине
* Проверка флоу восстановления пароля

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://raw.githubusercontent.com/KristinaAQA/new_cypress/main/static/baseUrl.png)

2. Применение хуков beforeEach и afterEach
![image](https://raw.githubusercontent.com/KristinaAQA/new_cypress/main/static/hooks.png)

3. Переменные данные для авторизации вынесены в отдельный файл
![image](https://raw.githubusercontent.com/KristinaAQA/new_cypress/main/static/user_data.png)

4. Каждая страница описана в формате объекта с локаторами
![image](https://raw.githubusercontent.com/KristinaAQA/new_cypress/main/static/locators.png)


Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://raw.githubusercontent.com/KristinaAQA/new_cypress/main/static/Cypress_UI.png)


## Автор

 Кристина Антонова ([@antonova_kris](https://t.me/antonova_kris))
