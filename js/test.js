document.getElementById('test2').onmouseover=function(){
    underline_function(document.getElementById('test2'));
};

document.getElementById('test2').onmouseout=function(){
    non_underline_function(document.getElementById('test2'));
};

function underline_function(div1) {
    div1.style.background = '#f00';
}

function non_underline_function(div1) {
    div1.style.background = '#fff';
}