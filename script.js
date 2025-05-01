// 第一步，获取元素
const newUserInput = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// --- 使用事件委托，只给 todoList (ul) 添加一个点击事件监听器 ---
todoList.addEventListener('click', function(event) {
    // event.target 是实际触发事件的那个元素 (比如你点击的是按钮，target就是那个按钮)
    const target = event.target;

    // --- 处理删除功能 ---
    // 检查被点击的元素是否包含 'deleteButton' 这个类
    if (target.classList.contains('deleteButton')) {
        // 如果是删除按钮，找到它的父元素 (也就是 li 待办事项)
        const liToRemove = target.parentElement;
        // 移除这个 li 元素
        liToRemove.remove();
    }

    // --- 处理标记完成功能 ---
    // 检查被点击的元素是否是 li 本身，或者 li 里面的 span (存放文本的那个)
    // 这里的判断需要稍微灵活，因为用户可能点击li的任何部分来标记完成
    // 一个简单的方式是检查 target 是否是 li 或者是 li 的直接子元素 span
    // 更严谨的做法是检查 target 是否是 li 或 li 的子元素，并且它 *不是* deleteBtn
    if (target.tagName === 'LI' || (target.tagName === 'SPAN' && target.parentElement.tagName === 'LI')) {
        // 找到 li 元素：如果点击的是 li 本身，target 就是 li；如果点击的是 span，target.parentElement 是 li
        const liToToggle = (target.tagName === 'LI') ? target : target.parentElement;
         // 切换 li 元素的 'completed' 类
        liToToggle.classList.toggle('completed');
    }
    // 注意：这里的标记完成逻辑可以根据实际HTML结构和交互方式微调判断条件
});

// 第二步，为添加按钮添加事件监听器
addButton.addEventListener('click', function() {
    const userInput = newUserInput.value.trim();
    if(userInput === ''){
        alert('请输入待办内容');
        return;
    }
// 修改LI元素的代码
        const li = document.createElement('li');
        // 创建一个span元素来存放文本
        const span = document.createElement('span');
            span.textContent = userInput;  // 设置span的文本内容
        // 创建一个删除按钮
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '删除';
        deleteButton.classList.add('deleteButton');
        // 将span和删除按钮添加到li元素中
        li.appendChild(span);
        li.appendChild(deleteButton);
        // 添加事件监听器到新创建的li元素
        // li.addEventListener('click', function(){
        //     // 切换完成状态
        // li.classList.toggle('completed');   
        // })
        // // 为删除按钮添加事件监听器
        // deleteButton.addEventListener('click', function(event){
        //     // 删除li元素
        //     // li.remove();
        //     event.stopPropagation(); // 防止事件冒泡
        //     li.remove();
        // })
        
        // 将新创建的li元素添加到todoList中
        // todoList.appendChild(li);
    // 清空输入框
    //newUserInput.value = '';
    // 将输入框设置为聚焦状态
    //userInput.focus();
});

