/*
let arr = [1,2,3,4,5,6,7,8,9,10]

arr.forEach(   (item, id) => {
    console.log(item)
})
console.log("-------------------------")
arr.forEach(   (item, id) => {
    if (id==4){
        console.log(item)
    }
})
console.log("-------------------------")
arr.forEach( (item, id) => {
    if(item%2){
    console.log(item)
    }
});
*/



/*
let arr = [-5, 12,-3,-2,0,16,-89,4,7,-145,5]

arr.forEach((item, id) => {
    if(item <-4 || (item > 7)) {
        console.log(item)
    }
})
let result = arr.map( (item, id) => {
    if(item%2 == 0){
        return Math.pow(item,2)
    }
    else return item
});
console.log(result)


const sum = (x,y)=>{
    return x+y
}
*/
/*
const sqrt = (x) => {
    return x*x
}

console.log(sqrt(2))

const parity = (x) => {
    if(x%2 == 0){
        console.log("Число чётное")
    }
    else console.log("Число нечётное")
}

parity(3)
parity(4)

const calc = (x, y, op) => {
    switch(op){
        case "+":
            return x+y;
            break;
        case "-":
            return x-y;
            break;
        case "*":
            return x*y;
            break;
        case "/":
            return x/y;
            break;
        default:
            console.log("Error!")
            break;
    }
}

console.log(calc(2, 3, "+"));
console.log(calc(2, 3, "-"));
console.log(calc(2, 3, "*"));
console.log(calc(2, 3, "/"));
*/
/*
let arr = [1,2,3,4,5,6,7,8,9,10]
const x = (a) => {
    for(let i = 0; i < a.lenght; i++){
        if(a[i]%2 == 0) {
            console.log(a[i])
        }
    }    
}
x(arr);

let arr2 = arr.filter((item, id) => {
     return item%2 == 0
})
console.log(arr2) 

function getInfo(name="%USER_NAME%", age="%USER_AGE%"){
    console.log("Этого пользователя зовут " + name + " ему " + age + " лет")
}
getInfo("Петя", 140)
getInfo("Петя")
*/
/*
function f(...numbers){
    console.log(numbers)
}

f(6,2,3,5,7,8,9,0,-4,5,3,1,"asd")
*/
/*
function max(...numbers){
    let tmpMax = numbers[0];
    numbers.forEach((item, id) =>{
        if(item > tmpMax){
            tmpMax = item
        }
    })
    console.log(tmpMax)
}

max(7,56,23,2134,7,8,4,234,1,-54,4)

let arr = [24, 12464165451,-54459975]

console.log(...arr, arr)
*/

/*
const response = {
    server: {
        name: "Tusur.NET",
        host: "88.204.74.108",
        httpResponse:" игра была куплена",
    },
    user: "ulan@cmit.ru"
}
console.log(response.server)

console.log(response.user + " вам пришел" + " от сервера " + response.server.name) 
*/

/*
let school = {
    name: "Школа",
    number: "56",
    getInfo:function(){
        console.log("Динь-динь-динь, пора в " + this.name + " номер " +this.number)
    }

}

school.getInfo()

*/
/*
let student = {
    firstName: "Петя",
    secondName: "Петров"
    //age: 5,
    //getInfo: function(){
    //    console.log("Меня зовут " + this.firstName)
    //}
}

let {firstName: name, secondName} = student

console.log(name, secondName)
*/
/*
let connect = {
    userName:"Admin",
    port:  8000,
    host: "127.0.0.1"
}

let = {userName: user,port: userPort,host: userHost} = connect

console.log(user,userPort, userHost)
*/
/*
const arr = [1,2,3,4,5,6,7,8,9]

let [,,,a,,,b,,c] = arr;

console.log(d,f,h);
*/
/*
let user = {
    userName:"kolya",
    email: "kolayy@mail.ru"
}

const msg2 = `Дорогой ${user.name} мы отправили вам на почту(${user.email}) Проверьте!`
console.log(msg2);

const htmlTMP = `
<ul>
    <li></li>
    <li></li>
</ul>
`
*/
/*
const school = {
    type: "МШАО",
    id: "43",
    printcipal: "Черная Сорокина"
}

const student = {
    name: "Артём Сергеев",
    grade: "1.5"
}

let objectToServer = Object.assign({},school, student)

console.log(school)

school.type = "Лицей"
school.id = "07"
school.printcipal = "Левый Правый"
*/
/*
const Animal = {
    name: "",
    sound: "",
    say: function(){
        console.log(this.name + " говорит" + this.sound)
    },
    constrct: function(name, sound){
        this.name = name;
        this.sound = sound;
    }
}

const duck1 = Object.create(Animal)
duck1.constrct("Скрудж", " деньги!")

const gav = Object.create(Animal)
gav.constrct("Гавс", " деньги Скуджа!")

const pon = Object.create(Animal)
pon.constrct("Поночка", " дядюшка Срудж!")

duck1.say()
gav.say()
pon.say() 
*/



