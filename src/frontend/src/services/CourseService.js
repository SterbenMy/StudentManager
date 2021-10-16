import httpClient from "@/services/httpClient";

const create = (name, number) =>
    httpClient.post("/courses/add", { name, number });

const getCourses = () => httpClient.get("/courses");
const deleteCourses = (courses) => httpClient.delete(`courses/delete/${courses}`);

export { create, getCourses, deleteCourses };
