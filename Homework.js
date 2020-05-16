class Animal {
    constructor(type = "", size = "", color = "") {
        this.type = type;
        this.size = size;
        this.color = color;      
    }
    info() {
        console.log(this.type + " это " + this.color + " и " + this.size + ".");
    }
}

class Dog extends Animal {
    constructor(type, size, color, poroda = "") {
        super(type, size, color, poroda)
        this.poroda = poroda;
    }

    getDog() {
        console.log("Это " + this.poroda);
    }
}

const Sobaka = new Dog("Собака", "серая", "большая", "Курцхаар")

Sobaka.info()
Sobaka.getDog()

class Duck extends Animal {
    constructor(type, size, color, food = 0) {
        super(type, size, color, food)
        this.food = food;
    }

    getDuck() {
        console.log("Утка ест " + this.food);
    }
}

const Ytka = new Duck("Утка", "маленькая", "черная", "траву")

Ytka.info()
Ytka.getDuck()

class Chipmunk extends Animal {
    constructor(type, size, color, habitat = 0) {
        super(type, size, color, habitat)
        this.habitat = habitat;
    }

    getChipmunk() {
        console.log("Бурундук живёт на" + this.habitat );
    }
}

const Byryndyk = new Chipmunk("Бурундук", "маленький", "коричневый", " деревьях")

Byryndyk.info()
Byryndyk.getChipmunk()