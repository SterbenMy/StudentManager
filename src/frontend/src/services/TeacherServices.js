import httpClient from "@/services/httpClient";

const create = (name, surname, email, gender) =>
    httpClient.post("/teachers/add", { name, surname, email, gender });

const getTeachers = () => httpClient.get("/teachers");
const deleteTeacher = (teacher) => httpClient.delete(`teachers/delete/${teacher}`);

//const getTeacher = (teacher)=>httpClient.get('teachers/${teacher}');

export { create, getTeachers, deleteTeacher};
