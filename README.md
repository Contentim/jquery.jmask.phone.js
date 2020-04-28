# Manual jquery.jmask.phone.js

## Install
```
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

});

$('#input-text').on('error_jsmaskphone', function () {
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
После обработки данных плагин возвращает динамическое свойство data-status для <input>. Статус имеет 2 состояния:
- success
- error

