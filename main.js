document.querySelectorAll('button.btn').forEach(function (value) {
    value.addEventListener('click', function () {
        document.getElementById('result').innerHTML += value.innerHTML
    })
})

function AllClear() {
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML.replace(document.getElementById('result').innerHTML, '');
}


function Calc() {
    document.getElementById('result').innerHTML = eval(document.getElementById('result').innerHTML);
    document.getElementById('result').innerHTML = document.getElementById('result').innerHTML;

}