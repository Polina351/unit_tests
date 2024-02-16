# Арихитектура ПО
## Дз №12

## Инструкция по проверке
 Вам необходимо решить задачи на js и запустить тесты на проверку ваших решений. Следуйте инструкции.


1. Установить Node.js на сайте https://nodejs.org/en/download, если не установлен
2. Перейти в папку проекта 
3. Для установки всех зависимостей используйте `npm install`
4. Каждая задача обычно представляет собой обычную функцию:
    ```javascript
      /**
       * Returns the result of concatenation of two strings.
      *
      * @param {string} value1
      * @param {string} value2
      * @return {string}
      *
      * @example
      *   'aa', 'bb' => 'aabb'
      *   'aa',''    => 'aa'
      *   '',  'bb'  => 'bb'
      */
      function concatenateStrings(value1, value2) {
        throw new Error('Not implemented');
      }
    ```
    
5. Напишите свой код в `src/*.js`.

6. Удалите строку с ошибкой из тела функции:

```javascript
    throw new Error('Not implemented'); 
```
7. Запустите `npm test` в командной строке. 

