
const $message = document.querySelector('#message');

// вставим строку «before» перед $message
$message.before('before');
// вставим строку «after» перед $message
$message.after('after');

const $p1 = document.createElement('p');
$p1.textContent = 'prepend';
// вставим элемент $p1 в начало $message
$message.prepend($p1);

const $p2 = document.createElement('p');
$p2.textContent = 'append';
// вставим элемент $p2 в конец $message
$message.append($p2);
