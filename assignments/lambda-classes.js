// CODE here for your Lambda Classes

// Define all classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standup time!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

// Test Person

const testAlan = new Person({
    name: 'Alan',
    location: 'Annapolis',
    age: 37,
});

console.log(testAlan);
testAlan.speak();

// Test Student (inherit Person)

const testBob = new Student({
    name: 'Bob',
    location: 'Bedrock',
    age: 32,
    previousBackground: 'Builder',
    className: 'Web23',
    favSubjects: ['React', 'CSS PRE-PROCESSING', 'HTML']
});

console.log(testBob);
testBob.speak();
testBob.listsSubjects();
testBob.PRAssignment('CSS');
testBob.sprintChallenge('WebDev');

// Test Instructor (inherit Person)

const testCharles = new Instructor({
    name: 'Charles',
    location: 'Canton',
    age: 33,
    specialty: 'Teaching students',
    favLanguage: 'JavaScript',
    catchPhrase: 'It is hammer time.'
});

console.log(testCharles);
testCharles.speak();
testCharles.demo('AppleBees');
testCharles.grade(testBob, 'CSS');

// Test Project Manager (inherit Instructor and Person)

const testDevon = new ProjectManager({
    name: 'Devon',
    location: 'Denver',
    age: 22,
    specialty: 'Making websites',
    favLanguage: 'Sanskrit',
    catchPhrase: 'On the grind'
});

console.log(testDevon);
testDevon.speak();
testDevon.demo('IHOP');
testDevon.grade(testBob, 'Python');
testDevon.standUp('#web23_devon');
testDevon.debugsCode(testBob, 'JavaScript');