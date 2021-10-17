import {create, getStudents, deleteStudent} from "@/services/StudentService";

const state = () => ({
    students: {},
    list: {},
});

const getters = {
    getStudentsList(state) {
        return state.list;
    },
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

    async deleteStudent({commit}, id) {
        await deleteStudent(id);
        commit("DELETE_STUDENT", id);
    },
};

const mutations = {
    SET_STUDENT(state, students) {
        state.students = students;
    },
    SET_LIST(state, students) {
        state.list = students;
    },
    DELETE_STUDENT(state, students) {
        state.students = students;
    }
};

export default {
    actions,
    state,
    mutations,
    getters,
};
