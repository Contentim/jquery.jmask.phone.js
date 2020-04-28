# Manual jquery.jmask.phone.js
Плагин предназначен для создания маски номера телефона по заданному шаблону для международного, росиийского и украинского форматов.

**jquery.jmask.phone.js** позволяет стандартизировать формат номера телефона для отправки на бэкенд, а также обойти проблему ввода номера телефона через 8 - когда пользователь начинает ввод номера с 8, при этом первой цифрой выставляется 7 и номер обрезает последнюю цифру. 

При попытке ввести 8(восьмерку), она заменяется на +7. При вводе 7, эта цифра остается неизменной. 
В украинском формате номер начинается с +3 и ниже представлен общий вид номера телефона на выходе.

Номера прочих стран СНГ вписываются в международное представление и не требуют специальных манипуляций. Для избежания ошибки с обрезкой номера телефона из-за не учёта какого-то редкого вида номера, длина строки увеличена до разумных пределов.

Виды форматов предусмотренных в **jquery.jmask.phone.js**:
- международный + СНГ(+7) - +0 000 000 00 00 0000 0000
- российский(+7) - +0 000 000 00 00 0000 0000
- украинский(+3) - +000 00 000 00 00

Российский формат схож с международным с целью увеличения длины номера телефона, на всякий случай. 

## Relation
Плагин зависим от [imaskjs](https://imask.js.org/guide.html) - позволяет гармонично сформировать саму маску номера телефона, но стандартный функционал не подошел для грамотного обхода проблемы учёта 3-х форматов номеров: международного, российского, украинского.

Зависимость от **jQuery** - по-умолчанию.

## Install
```
// imaskjs
<script src="https://unpkg.com/imask"></script>

// jquery.jmask.phone.js
<script src="/jquery.jmask.phone.js"></script>
```

## Default options
```
defaults = {
    color: 'red', // color notification - 'color' or 'hex-format'
    notification: 'this message to error', // custom message to error
    borderColor: '#ee5a5a', // border color input to error
};
```

## Listing
```js
$('#input-text').jmaskPhone(); // default options

$('#input-text').jmaskPhone({ // custom options
    color: '#f00', 
    notification: 'Заполните поле',
    borderColor:'#ee5a5a', 
});
```

## Listen to events
```
// success
function log() {
    console.log('value = ' + $(this).val());
    console.log('status = ' + $(this).prop('data-status'));
};
$('#input-text').on('success_jsmaskphone', log);

// error
function log() {
    console.log('status = ' + $(this).prop('data-status'));
};
$('#input-text').on('error_jsmaskphone', log);
```

## Output status (data-status)
После обработки данных плагин возвращает динамическое свойство data-status для *input* для последующего использования в связке с другими плагинами обработки полей ввода, например валидации.

Статус имеет одно из **2 состояний**:
- success
- error

## LICENSE
The MIT License (MIT)

Copyright (c) 2020 Ivan Goncharenko ([contentim.ru](https://vk.com/contentim_ru)) or email - *contentim@yandex.ru*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
