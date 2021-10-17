import httpClient from "@/services/httpClient";

const create = (name, number) =>
    httpClient.post("/courses/add", { name, number });

const getCourses = () => httpClient.get("/courses");
const getCourse = (id) => httpClient.get(`/courses/find/${id}`);
const deleteCourses = (courses) => httpClient.delete(`courses/delete/${courses}`);
const updateCourse = (id, name, number, teacher, students) => httpClient.put('courses/update',{ id, name, number, teacher, students});

export { create, getCourses, deleteCourses, getCourse, updateCourse };
