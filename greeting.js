const name = prompt("Please enter your name:")

if (name.length > 20) {
    alert("Sorry, but your name is too long!")
} else if (name.length < 2) {
    alert("Sorry, but your name is too short!")
} else if (/^[A-Za-z]+$/.test(name)) {
    alert(`Hello, ${name}! How are you?`)
} else if (/^[А-Яа-яЁё]+$/.test(name)) {
    alert(`Привет, ${name}! Как твои дела?`)
} else if (/^[А-Яа-яІіЇїЄєҐґ]+$/.test(name)) {
    alert(`Привіт, ${name}! Як твої справи?`)
} else {
    alert("Please, write correct name in Ukrainian, Russian or English languages")
}
