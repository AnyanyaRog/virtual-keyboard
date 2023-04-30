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
// создаем кнопки клавиатуры и добавляем их на страницу
button.forEach(keyRow => {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  keyRow.forEach(key => {
    const button = document.createElement('button');
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
    lang.textContent = `Language (ctrl + shift): ${selectedLanguage.toUpperCase()}`;
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
  let shiftPressed = false;
  keyz.forEach((key, index) => {
    const keyCode = keyCodes[index];
    key.setAttribute('data-key', keyCode);
  });
    document.addEventListener('keydown', function(event) {
      let cursorPosition = textarea.selectionStart; 
        const keyCode =  event.code;
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        if (key) {
          if (key.classList.contains("active_capslock")) {
            key.classList.remove("active_capslock")
          } else if(keyCode == 'CapsLock') {
            key.classList.add("active_capslock")
          } 
          if(keyCode == 'ArrowLeft' || keyCode == 'ArrowRight' || keyCode == 'ArrowUp' || keyCode == 'ArrowDown') {
        
          let textBeforeCursor = textarea.value.substring(0, cursorPosition); 
          let textAfterCursor = textarea.value.substring(cursorPosition); 
            event.preventDefault();
            textarea.value = textBeforeCursor +  key.textContent.toUpperCase()  + textAfterCursor;
            textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
          } 
          if(key.textContent.toLowerCase() == 'tab' ) {
            event.preventDefault();
            textarea.value = textarea.value.substring(0, cursorPosition) + '\t' + textarea.value.substring(textarea.selectionEnd);
            textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
          } 
          if (event.code === 'ShiftLeft') {
            shiftPressed = true;
          }
          textarea.focus();
          key.classList.add('active');
        } keyCode
    });
    document.addEventListener('keyup', function(event) {
        const keyCode =  event.code;
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        if (key) {
          if (event.code === 'ShiftLeft') {
            shiftPressed = false;
          }

          key.classList.remove('active');
        }
      });
    /*Обработчик клика виртуальной клавиатуры*/
    
    keyz.forEach(key => {
      let capslock = false;
      let caps = document.querySelector(".caps_button")
        key.addEventListener('click', () => {
          textarea.focus();
          key.classList.add("active")
          setTimeout(() => {
            key.classList.remove('active');
          }, 100);

          let cursorPosition = textarea.selectionStart; 
          let textBeforeCursor = textarea.value.substring(0, cursorPosition); 
          let textAfterCursor = textarea.value.substring(cursorPosition); 
          if(key.textContent.toLowerCase() == 'enter' ) {
            textarea.value = textarea.value.substring(0, cursorPosition) + '\n' + textarea.value.substring(textarea.selectionEnd);
            textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
          } else 
          if(key.textContent.toLowerCase() == 'tab' ) {
            textarea.value = textarea.value.substring(0, cursorPosition) + '\t' + textarea.value.substring(textarea.selectionEnd);
            textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
          } else
          if(key.textContent.toLowerCase() == 'backspace' ) {
            const textBeforeCursor = textarea.value.substring(0, cursorPosition - 1);
            const textAfterCursor = textarea.value.substring(cursorPosition);
            textarea.value = textBeforeCursor + textAfterCursor;
            textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
          } else
          if(key.textContent.toLowerCase() == 'del' ) {
            let cursorPosition = textarea.selectionStart; 
            const textBeforeCursor = textarea.value.substring(0, cursorPosition);
            const textAfterCursor = textarea.value.substring(cursorPosition + 1);
            textarea.value =   textBeforeCursor + textAfterCursor;
            textarea.setSelectionRange(cursorPosition, cursorPosition);
          } else
          if(key.textContent.toLowerCase() == 'caps lock' ) {
            capslock = !capslock;
            if (capslock) {
              key.classList.add('active_capslock');
            } else {
              key.classList.remove('active_capslock');
            }} 
            
          else {  if(caps.classList.contains("active_capslock") || shiftPressed) {
            
            textarea.value = textBeforeCursor +  key.textContent.toUpperCase()  + textAfterCursor;
            textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
          } else {
            
          textarea.value = textBeforeCursor +  key.textContent.toLowerCase()  + textAfterCursor;
          textarea.setSelectionRange(cursorPosition + 1, cursorPosition + 1); }}
    })})
   
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
   
    