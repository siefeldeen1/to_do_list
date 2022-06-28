class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }


    speak(txt){
        alert(txt)
    }

    
}


const peter = new Person("Peter",34)


peter.speak("comp")