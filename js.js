const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
document.body.appendChild(keyboardContainer);
const textarea = document.createElement('textarea');
textarea.classList.add('text-area');
keyboardContainer.appendChild(textarea);
// массив с данными о кнопках клавиатуры
const keys = [
  ['~`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+=',  'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', 'DEL'],
  ['Caps Lock','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift'],
  [ 'Ctrl', 'Win', 'Alt', 'Space', , 'Alt', 'Ctrl', '←',  '↓', '→' ]
];

// создаем кнопки клавиатуры и добавляем их на страницу
keys.forEach(keyRow => {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  keyRow.forEach(key => {
    const button = document.createElement('button');
    button.textContent = key;
    button.classList.add('key');
    if (key=='Space') {
       button.classList.add('space_button') 
    }
    if (key=='Caps Lock' || key=='Shift') {
       button.classList.add('caps_button') 
    }
    if (key=='Enter') {
       button.classList.add('enter_button') 
    }
    row.appendChild(button);
  });
  keyboardContainer.appendChild(row);
});
/*Обработчик клика*/
const keyz = document.querySelectorAll('.key');

  const keyCodes = [
    'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6',
    'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
    'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI',
    'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
    'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ',
    'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ',
    'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
    'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft',
    'Space', 'AltRight','ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
  ];
  keyz.forEach((key, index) => {
    const keyCode = keyCodes[index];
    key.setAttribute('data-key', keyCode);
  });
document.addEventListener('keydown', function(event) {
    const keyCode =  event.code;
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (key) {
      key.classList.add('active');
    } keyCode
  });
  
  document.addEventListener('keyup', function(event) {
    const keyCode =  event.code;
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (key) {
      key.classList.remove('active');
    }
  });