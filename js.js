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
    button.id=key;
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

