# Manual jquery.jmask.phone.js
Плагин предназначен для создания маски номера телефона по заданному шаблону для международного, росиийского и украинского формата.
**jquery.jmask.phone.js** позволяет стандартизировать формат номера телефона для отправки на бэкенд, а также обойти проблему ввода номера телефона через 8. При попытке ввести 8(восьмерку), она заменяется на +7. В украинском формате номер начинается с +3 и ниже представлен общий вид номера телефона на выходе.

Виды форматов предусмотренных в **jquery.jmask.phone.js**
- международный(+7) - +0 000 000 00 00 0000 0000
- российский(+7) - +0 000 000 00 00 0000 0000
- украинский(+3) - +000 00 000 00 00

Российский формат схож с международным с целью увеличения длины номера телефона, на всякий случай. 

## Relation
Плагин зависим от [imaskjs](imaskjs). **imaskjs** позволяет гармонично сформировать саму маску номера телефона.

## Install
```
// imaskjs
<script src="https://unpkg.com/imask"></script>

// jquery.jmask.phone.js
<script type="text/javascript" src="jquery.jmask.phone.js"></script>
```

## Listing
```js
$('#input-text').jmaskPhone({
    color: '#f00', 
    notification: 'Заполните поле',
    borderColor:'#ee5a5a', 
});

$('#input-text').on('success_jsmaskphone', function () {
// code
});

$('#input-text').on('error_jsmaskphone', function () {
// code
});
```
## Options
```
defaults = {
    color: 'green', // color notification
    notification: 'this message to error', // custom message to error
    borderColor: '#ee5a5a', // border color input to error
};
```
## Output status
После обработки данных плагин возвращает динамическое свойство data-status для *input*. Статус имеет 2 состояния:
- success
- error

