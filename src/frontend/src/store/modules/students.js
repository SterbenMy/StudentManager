import {create, getStudents, deleteStudent, updateStudent, getStudent} from "@/services/StudentService";

const state = () => ({
    students: {},
    list: {},
    student: {},
});

const getters = {
    getStudentsList(state) {
        return state.list;
    },
    getStudent(state) {
        return state.student;
    }
};

const actions = {
    async createStudent({commit}, students) {
        try {
            await create(students.name, students.surname, students.email, students.gender);
            commit("SET_STUDENT", students);
        } catch (e) {
            console.log(commit);
            throw e;
        }
    },

    async getStudentsList({commit}) {
        const response = getStudents();
        commit("SET_LIST", response);
    },
    async getStudent({commit}, id) {
        const response = getStudent(id);
        commit("GET_STUDENT", response);
    },
    async deleteStudent({commit}, id) {
        await deleteStudent(id);
        commit("SET_STUDENT", id);
    },
    async updateStudent({commit}, student){
        await updateStudent(student.id, student.name, student.surname, student.email, student.gender);
        commit('UPDATE_STUDENT', student);
    }
};

const mutations = {
    SET_STUDENT(state, students) {
        state.students = students;
    },
    SET_LIST(state, students) {
        state.list = students;
    },
    GET_STUDENT(state, student) {
        state.student = student;
    },
    UPDATE_STUDENT(state, student){
        state.student=student;
    }
};

export default {
    actions,
    state,
    mutations,
    getters,
};
