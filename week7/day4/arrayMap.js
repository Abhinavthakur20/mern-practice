const students = [
    { id: 1, name: "Alice", age: 17, grade: "A", marks: 88, extraCurricularPoints: 3 },
    { id: 2, name: "Bob", age: 18, grade: "B", marks: 76, extraCurricularPoints: 4 },
    { id: 3, name: "Charlie", age: 19, grade: "A", marks: 82, extraCurricularPoints: 2 },
    { id: 4, name: "David", age: 17, grade: "C", marks: 91, extraCurricularPoints: 1 },
    { id: 5, name: "Eva", age: 18, grade: "B", marks: 90, extraCurricularPoints: 5 },
    { id: 6, name: "Frank", age: 16, grade: "A", marks: 78, extraCurricularPoints: 6 },
    { id: 7, name: "Grace", age: 18, grade: "B", marks: 84, extraCurricularPoints: 2 },
    { id: 8, name: "Hassan", age: 17, grade: "D", marks: 74, extraCurricularPoints: 4 },
    { id: 9, name: "Isha", age: 17, grade: "A", marks: 79, extraCurricularPoints: 3 },
    { id: 10, name: "Jack", age: 18, grade: "B", marks: 65, extraCurricularPoints: 5 },
];

const filterStudent = students.filter(n => n.marks >= 75 && (n.grade === "A" || n.grade === "B") && n.age >= 18)
const mapStudent = filterStudent.map(n => ({
    name: n.name,
    meritScore: n.marks + (n.extraCurricularPoints * 2)
}))
const sorted = mapStudent.sort((a, b) => b.meritScore - a.meritScore)
const top3 = sorted.slice(0, 3)
console.log(top3);




