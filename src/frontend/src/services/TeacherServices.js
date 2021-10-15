import axios from 'axios';

const TEACHER_API_BASE_URL = 'http://localhost:8080/api/teachers';

class TeacherService {

    getTeachers() {
        return axios.get(TEACHER_API_BASE_URL);
    }
}

export default new TeacherService();