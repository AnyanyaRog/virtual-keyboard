const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
document.body.appendChild(keyboardContainer);
const lang = document.createElement('div');
lang.classList.add('language');
keyboardContainer.appendChild(lang);
const textarea = document.createElement('textarea');
textarea.classList.add('text-area');
keyboardContainer.appendChild(textarea);
// массив с данными о кнопках клавиатуры
if (!localStorage.getItem('selectedLanguage')) {
    localStorage.setItem('selectedLanguage', 'en');
  }
en = [
  '~`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+=',  'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '|', 'DEL',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'ENTER',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space',  'Alt', 'Ctrl', '←',  '↓', '→' 
];
ru = [
  '~`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+=',  'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х[', 'Ъ]', '|', 'DEL',
  'Caps Lock','Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж;', "Э'", 'ENTER',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б,', 'Ю.', '/', '↑', 'Shift',
   'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '←',  '↓', '→' 
];
button = [
  ['', '', '', '', '', '', '', '', '', '', '', '', '',  ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  ['','', '', '', '', '', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', '', '', '', '', '', ''],
  [ '', '', '', '', , '', '', '',  '', '' ]
];
let language = en;



// создаем кнопки клавиатуры и добавляем их на страницу


button.forEach(keyRow => {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  keyRow.forEach(key => {
    const button = document.createElement('button');
    /**/ 
    button.classList.add('key');
    row.appendChild(button);
  });
  keyboardContainer.appendChild(row);
});
let keyz = document.querySelectorAll('.key');


function updateKeyboardLayout() {
const selectedLanguage = localStorage.getItem('selectedLanguage');
keyz.forEach((key, index) => {
    if (selectedLanguage === 'en') {
        let keyCode = en[index]; 
    if (keyCode=='Space') {
        key.classList.add('space_button') 
     }
     if (keyCode=='Caps Lock' || keyCode=='Shift') {
        key.classList.add('caps_button') 
     }
     if (keyCode=='Enter') {
        key.classList.add('enter_button') 
     }  
    key.textContent =  keyCode;} 
     else {
        let keyCode = ru[index]; 
        if (keyCode=='Space') {
            key.classList.add('space_button') 
         }
         if (keyCode=='Caps Lock' || keyCode=='Shift') {
            key.classList.add('caps_button') 
         }
         if (keyCode=='Enter') {
            key.classList.add('enter_button') 
         }  
        key.textContent =  keyCode;

    }})
    lang.textContent = `Language: ${selectedLanguage.toUpperCase()}`;
}; updateKeyboardLayout();
/*Обработчик клика*/
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
            if (keyCode == 'AltLeft' && keyCode == 'LeftCtrl') {
                console.log(key)
            }
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
      /*ПЕРЕВОД */
      
      function toggleLanguage() {
        const selectedLanguage = localStorage.getItem('selectedLanguage');
        const newLanguage = selectedLanguage === 'en' ? 'ru' : 'en';
        localStorage.setItem('selectedLanguage', newLanguage);
        updateKeyboardLayout();
      }
      document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.shiftKey) {
          toggleLanguage();
        }
      });
