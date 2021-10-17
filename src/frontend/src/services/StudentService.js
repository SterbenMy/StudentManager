import httpClient from "@/services/httpClient";

const create = (name, surname, email, gender) =>
    httpClient.post("/students/add", { name, surname, email, gender });

const getStudents = () => httpClient.get("/students");
const getStudent = (id) => httpClient.get(`/students/find/${id}`);
const deleteStudent = (students) => httpClient.delete(`students/delete/${students}`);
const updateStudent = (id, name, surname, email, gender) => httpClient.put('students/update',{ id, name, surname, email, gender});

export { create, getStudents, getStudent, deleteStudent, updateStudent };
