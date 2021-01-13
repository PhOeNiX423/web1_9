function Zadanie1() {
    let str = ' ';
    let user = {
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
    let arr = [1, 2, 3, 4, 5, 6, 7];
    arrayCut(arr);

    function arrayCut() {
        let leng = arr.length;
        let len = leng;
        for (let i = 0; i < leng-1; i++) {
            let popped = arr.pop();
            console.log(len, 'осталось', arr);
            len = len - 1;
        }
        console.log(len);
    }
}

function Zadanie3() {
    let str = prompt('Введите слово для проверки:');
    isPalindrome(str);

    function isPalindrome() {
        arr = str.split('');
        let len = arr.length;
        let res = true;
        for (let i = 0; i < len / 2; i++) {
            if (arr[i] != arr[len - i - 1]) {
                res = false;
            }
        }
        alert(res);
    }
}

function Zadanie4() {
    let chislo = prompt('На что Вы хотите умножить массив?')
    scalarMultiplication(chislo);

    function scalarMultiplication() {
        let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
        ];
        console.log('Массив до изменений:');
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                arr[i][j] = arr[i][j] * chislo;
            }
        }
        console.log('Массив после изменений:');
        console.log(arr[0]);
        console.log(arr[1]);
        console.log(arr[2]);
    }
}
