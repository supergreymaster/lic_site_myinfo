window.addEventListener('load', function () {
    var ani1 = document.querySelector(".animated");
    ani1.classList.add("animated1");
});

var count = 0;
const clc = document.querySelector(".but_open");
const left_container = document.querySelector(".left_container")

function open_info() {
    if (left_container.classList.contains("off")) {
        left_container.classList.remove("off");
        left_container.classList.add("active");
        clc.innerHTML = "Exit";

    }
    else if (left_container.classList.contains("active")) {
        left_container.classList.remove("active");
        left_container.classList.add("off");
        clc.innerHTML = "Open";
    }
}

function open_git() {
    document.location.href = "https://github.com/supergreymaster"
}

function write_text() {
    const tmp = document.querySelector(".about_text");
    tmp.innerHTML = '\n' +
        '   Меня зовут Гаврилов Константин, я живу в городе Чебоксары. ' +
        'Познакомился с площадкой Академии Яндекса несколько лет назад, тогда я поступил в Яндекс лицей, ' +
        'на тот момент я не был знаком с программированием, да и компьютера у меня не было. ' +
        'Я вошел в процесс, мне стала нравится программирование, я закончил Яндекс Лицей с отличием,' +
        ' а дальше я пошёл по стороне back-end изучил PHP, но PHP не очень распрастраннён среди команд, ' +
        'поэтому я хочу изучить django, чтобы после присоединиться к одной из команд.'
}
write_text()






