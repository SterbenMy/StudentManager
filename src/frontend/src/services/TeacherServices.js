import httpClient from "@/services/httpClient";

const create = (name, surname, email, gender) =>
    httpClient.post("/teachers/add", { name, surname, email, gender });

const getTeachers = () => httpClient.get("/teachers");
const getTeacher = (id) => httpClient.get(`/teachers/find/${id}`);

const deleteTeacher = (teacher) => httpClient.delete(`teachers/delete/${teacher}`);

export { create, getTeachers, deleteTeacher, getTeacher};
