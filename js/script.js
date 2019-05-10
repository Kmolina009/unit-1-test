var result = document.querySelector('h4');

document.querySelector('button').addEventListener('click', function  () {
    var a = document.querySelector('#a').value;
    var b = document.querySelector('#b').value;
    var c = document.querySelector('h2').appendChild(result);
    result.textContent = sumNum(a, b);
});

function sumNum(a, b) {
    return parseInt(a) + parseInt(b);
}

