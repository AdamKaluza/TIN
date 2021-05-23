/*jshint globalstrict: true, devel: true, browser:true, esversion: 6*/
'use strict';

function setup() {
    let lis = document.querySelectorAll('li');
    let clearButton = document.createElement('button');
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = "Type for search...";
    input.style.position = "absolute";
    input.style.left = "0";
    input.style.top = "0";

    clearButton.textContent = 'Clean Search';
    clearButton.style.backgroundColor = 'lightGrey';
    clearButton.style.borderRadius = '12px';
    clearButton.style.position = "absolute";
    clearButton.style.left = "180px";
    clearButton.style.top = "0";

    document.body.appendChild(input);
    document.body.appendChild(clearButton);

    clearButton.onclick = function () {
        input.value = "";
        for (let li of lis) {
            li.hidden = false;
        }
    }
    input.onkeydown = function () {
        let inputValue = input.value;
        let counter;
        for (let li of lis) {
            let a = li.getElementsByTagName('a');
            let autorzy = li.getElementsByClassName('autorzy');

            let autorzyText = autorzy[0].innerHTML;
            let text = a[0].innerHTML;

            if (text.toLowerCase().indexOf(inputValue.toLowerCase()) != -1
                || autorzyText.toLowerCase().indexOf(inputValue.toLowerCase()) != -1) {
                li.hidden = false;
            } else {
                li.hidden = true;
            }
        }
    };


    for (let i = 0; i < lis.length; i++) {
        let button = document.createElement('button');
        button.textContent = 'Show Abstract';
        button.style.backgroundColor = 'lightGrey';
        button.style.borderRadius = '12px';
        lis[i].append(button);

        let div = document.createElement('div');
        let a = lis[i].querySelector('a');
        div.innerText = a.title;
        div.style.border = '1px solid black';
        div.style.padding = '15px';
        div.style.margin = '20px';
        div.style.display = 'none';

        lis[i].append(div);

        button.onclick = function () {
            if (button.textContent === 'Show Abstract') {
                div.style.display = 'block';
                button.textContent = 'Hide Abstract';
            } else {
                div.style.display = 'none';
                button.textContent = 'Show Abstract';
            }

        };

    }
}

document.addEventListener('DOMContentLoaded', setup);

