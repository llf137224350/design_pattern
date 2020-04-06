export default function createElementAppendBody(name: string): void {
    const mode = document.createElement('div');
    mode.innerText = name;
    const ul = document.createElement('ul');

    const li = document.createElement('li');
    li.innerText = '浏览器开发模式下，查看效果';

    ul.appendChild(li);
    document.body.appendChild(mode);
    document.body.appendChild(ul);
}