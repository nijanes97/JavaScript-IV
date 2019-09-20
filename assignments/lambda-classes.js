// CODE here for your Lambda Classes
class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${location}`;
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${this.subject}`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        this.favSubjects.forEach(function(subject){
            console.log(subject);
        });
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

const nick = new Student({
    name: "nick",
    age: 22,
    location: "California",
    previousBackground: "none",
    className: "Web24",
    favSubjects: ["css", "less"]
})

nick.listsSubjects();
console.log(nick.PRAssignment("JavaScript II"));
console.log(nick.sprintChallenge("JavaScript"));