import {create, getTeachers, deleteTeacher, getTeacher, updateTeacher} from "@/services/TeacherServices";

const state = () => ({
    teachers: {},
    list: {},
    teacher: {},
});

const getters = {
    getTeachersList(state) {
        return state.list;
    },
    getTeacher(state) {
        return state.teacher;
    }
};

const actions = {
    async createTeacher({commit}, teachers) {
        try {
            await create(teachers.name, teachers.surname, teachers.email, teachers.gender);
            commit("SET_TEACHER", teachers);
        } catch (e) {
            console.log(commit);
            throw e;
        }
    },
    async getTeachersList({commit}) {
        const response = getTeachers();
        commit("SET_LIST", response);
    },
    async getTeacher({commit}, id) {
        const response = getTeacher(id);
        commit("GET_TEACHER", response);
    },

    async deleteTeacher({commit}, id) {
        await deleteTeacher(id);
        commit("SET_TEACHER", id);
    },
    async updateTeacher({commit}, teacher){
        await updateTeacher(teacher.id, teacher.name, teacher.surname, teacher.email, teacher.gender);
        commit('UPDATE_TEACHER', teacher);
    }
};

const mutations = {
    SET_TEACHER(state, teachers) {
        state.teachers = teachers;
    },
    SET_LIST(state, teachers) {
        state.list = teachers;
    },
    GET_TEACHER(state, teacher) {
        state.teacher = teacher;
    },
    UPDATE_TEACHER(state, teacher){
        state.teacher=teacher;
    }
};

export default {
    actions,
    state,
    mutations,
    getters,
};
