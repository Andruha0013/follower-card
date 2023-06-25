### Project description:

The project is a test task,
it implements the technical task:

1. According to the layout, a user card is created.
2. When clicking on the Follow button, the text changes to Following. Also
   the color of the button changes. And a user is added to the number of followers. That is,
   the initial number is 100,500 followers. When you click on the button it will be
   100,501.
3. When the page is updated, the final result of the user's actions should be recorded. That is,
   if you click on the button and refresh the page, the button still remains in the Following state with the appropriate color, and the number of followers does not decrease to the initial value.
4. When you click the button again, its text and color change to their original state. The number of followers also changes. It decreases by 1 (100,500).
5. In the code, the number 100,500 must be written with one value (100500). In the UI, it is displayed with a comma (100,500).
6. To demonstrate the operation of the user card, a demo gallery was created in the project (data is generated from the backend of the "mockApi" application).
7. For ease of use of the card, its code and styles are placed in one folder.
8. The map accepts an object with data ({
   "user": "Lola Reichel",
   "avatar": "URL ",
   "tweets": 72,
   "followers": 66,
   "id": "2"
   })
   and a reference to the function to handle the click.

## Live page - https://andruha0013.github.io/follower-card/

# Getting Started with npm install

Before run project, you must insall all libraries and dependencies:

## `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Опис проекту:

Проект являє собою тестове завдання,
в ньому реалізоване технічне завдання:

1. Відповідно до макету створено картку юзера.
2. При клікові на кнопку Follow - текст змінюється на Following. Також
   змінюється колір кнопки. А до кількості фоловерів додається і юзер. Тобто,
   початкова кількість складає 100,500 фоловерів. При клікові на кнопку буде
   100,501.
3. При оновлені сторінки має фіксуватись кінцевий результат дій юзера. Тобто,
   якщо клікнути по кнопці і оновити сторінку - то кнопка все рівно залишається в стані Following із відповідним кольором, а кількість фоловерів не зменшується до початкового значення.
4. При повторному клікові на кнопку її текст та колір змінюються до початкового стану. Також змінюється і кількість фоловерів. Вона зменшується на 1 (100,500).
5. В коді цифра 100,500 має бути прописана одним значенням (100500). В UI - виведено через кому (100,500).
6. Для демонстрації роботи картки юзере, в проекті була створена демо-галерея (дані генеруються з бекенде застосунка "mockApi ").
7. Для зручності використання картки її код та стилі розміщені в одній папці.
8. Картака приймає об' єкт з даними ({
   "user": "Lola Reichel",
   "avatar": "URL ",
   "tweets": 72,
   "followers": 66,
   "id": "2"
   })
   та посилання на функцію для обробки кліку.

## посилання на живу сторінку - https://andruha0013.github.io/follower-card/

# Початок роботи з npm install

Перед запуском проекту ви повинні інсталювати всі бібліотеки та залежності:

## `npm install`

## Доступні сценарії

У каталозі проекту ви можете запустити:

### `npm start`

Запускає програму в режимі розробки.\
Відкрийте [http://localhost:3000](http://localhost:3000), щоб переглянути його у своєму браузері.

Сторінка перезавантажиться, коли ви внесете зміни.\
Ви також можете побачити помилки ворсинок на консолі.

### `npm test`

Запускає програму тестування в інтерактивному режимі годинника.\
Додаткову інформацію див. у розділі про [запуск тестів](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Збирає програму для виробництва в папку `build`.\
Він правильно поєднує React у робочому режимі та оптимізує збірку для найкращої продуктивності.

Збірку мінімізовано, а імена файлів містять хеші.\
Ваш додаток готовий до розгортання!

Додаткову інформацію див. у розділі про [розгортання](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`

**Примітка: це одностороння операція. Після того, як ви `витягнете`, ви не зможете повернутися!**

Якщо ви не задоволені інструментом збирання та вибором конфігурації, ви можете `вилучити` будь-коли. Ця команда видалить одну залежність збірки з вашого проекту.

Натомість він скопіює всі конфігураційні файли та транзитивні залежності (webpack, Babel, ESLint тощо) прямо у ваш проект, щоб ви мали повний контроль над ними. Усі команди, крім `eject`, працюватимуть, але вони вказуватимуть на скопійовані сценарії, щоб ви могли їх налаштувати. У цей момент ви самі по собі.

Вам не потрібно ніколи використовувати `eject`. Підібраний набір функцій підходить для невеликих і середніх розгортань, і ви не повинні відчувати себе зобов’язаними використовувати цю функцію. Однак ми розуміємо, що цей інструмент не буде корисним, якщо ви не зможете налаштувати його, коли будете готові до цього.
