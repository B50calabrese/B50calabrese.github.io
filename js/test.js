document.getElementById('testId').onmouseover=function(){
    underline_function(document.getElementById('testId'));
};

document.getElementById('testId').onmouseout=function(){
    non_underline_function(document.getElementById('testId'));
};

function underline_function(div1) {
    div1.style.background = '#f00';
}

function non_underline_function(div1) {
    div1.style.background = '#fff';
}