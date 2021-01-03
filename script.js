function Zadanie1() {
    var str = ' ';
    var user = {
        first_name: 'Дарья',
        last_name: 'Натальина'
    }
    user.group = 201;
    alert('Загляните в консоль!');
    for (prop in user) {
        str += prop + '; ';
    }
    console.log('Список свойств:', str);
    console.log('Студентка', user.last_name, user.first_name, 'учится в', user.group, 'группе.');
}

function Zadanie2() {


}

function Zadanie3() {
    var str = prompt('Введите слово для проверки:');
    isPalindrome(str);

    function isPalindrome() {
        arr = str.split('');
        var len = arr.length;
        var res = true;
        for (let i = 0; i < len / 2; i++) {
            if (arr[i] != arr[len - i - 1]) {
                res = false;
            }
        }
        alert(res);
    }
}