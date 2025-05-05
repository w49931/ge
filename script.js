// 获取页面中box的元素
const boxElement = document.getElementById('box');
const titleElement = document.getElementById('title');
// const pElement = document.getElementByTagName('p');
// 输出boxElement
// change boxElement text
// click first button change boxElement text
const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     boxElement.textContent = '这是新内容';
// });
btn.addEventListener('click', function(){
    boxElement.textContent = 'This is a new text';
});
// 为boxElement加边框
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function(){
    boxElement.style.border = '1px solid red';
    boxElement.style.borderRadius = '10px';
    boxElement.style.padding = '10px';
    boxElement.style.backgroundColor = 'blue';
    boxElement.style.color = 'white';
    boxElement.style.fontSize = '20px';
    boxElement.style.fontWeight = 'bold';
    boxElement.style.textAlign = 'center';
    boxElement.style.textShadow = '2px 2px 2px black';
    boxElement.style.textDecoration = 'underline';
    boxElement.style.textTransform = 'uppercase';
    boxElement.style.textOverflow = 'ellipsis';
    boxElement.style.whiteSpace = 'nowrap';
    boxElement.style.wordWrap = 'break-word';
    boxElement.style.wordBreak = 'break-all';
    boxElement.style.letterSpacing = '2px';
    boxElement.style.lineHeight = '1.5';
    boxElement.style.fontFamily = 'Arial, sans-serif';
    boxElement.style.fontStyle = 'italic';
    boxElement.style.fontSize = '20px';
});
// boxElement.textContent = '这是新内容';
console.log(boxElement.textContent);
console.log(titleElement);
// 改变boxElement的背景颜色
//boxElement.style.backgroundColor = 'blue';
// 改变boxElement的文本内容
// boxElement.innerHTML = '这是被修改后的内容';
// // 动态创建一个p元素
// const pElement = document.createElement('p');
// pElement.innerHTML = '这是动态创建的p元素';



