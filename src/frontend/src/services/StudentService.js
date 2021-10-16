import httpClient from "@/services/httpClient";

const create = (name, surname, email, gender) =>
    httpClient.post("/students/add", { name, surname, email, gender });

const getStudents = () => httpClient.get("/students");
const deleteStudent = (students) => httpClient.delete(`students/delete/${students}`);

export { create, getStudents, deleteStudent };
