import inquirer from 'inquirer';
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log('Wellcome! program started');
        const ans = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: ['Self', 'students', 'Exit']
        });
        if (ans.choice === 'Self') {
            console.log('Hello kia hall he ');
            console.log('self');
        }
        else if (ans.choice === 'students') {
            const ans = await inquirer.prompt({
                type: 'input',
                name: 'student',
                message: 'Enter student name:',
            });
            const student = persons.students.find(val => val.name === ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Student name is ${name.name}`);
                console.log(persons.students);
            }
            else if (student) {
                console.log(`Student name is ${student.name}.....................................................`);
                console.log(persons.students);
            }
        }
        else {
            console.log('exit');
        }
    } while (true);
};
programStart(persons);
