import httpClient from "@/services/httpClient";

const create = (name, surname, email, gender) =>
    httpClient.post("/teachers/add", { name, surname, email, gender });

const getTeachers = () => httpClient.get("/teachers");
const getTeacher = (id) => httpClient.get(`/teachers/find/${id}`);
const deleteTeacher = (teacher) => httpClient.delete(`teachers/delete/${teacher}`);
const updateTeacher = (id, name, surname, email, gender) => httpClient.put('teachers/update',{ id, name, surname, email, gender});

export { create, getTeachers, deleteTeacher, getTeacher, updateTeacher};
