import {create, getTeachers, deleteTeacher} from "@/services/TeacherServices";

const state = () => ({
    teachers: {},
    list: {},
});

const getters = {
    getTeachersList(state) {
        return state.list;
    },
    // getTeacher(state, id){
    //     return state.teachers[id]
    // }
};

const actions = {
    async create({commit}, teachers) {
        try {
            await create(teachers.name, teachers.surname, teachers.email, teachers.gender);
            commit("SET_TEACHER", teachers);
        } catch (e) {
            console.log(commit);
            throw e;
        }
    },

    async getList({commit}) {
        const response = getTeachers();
        commit("SET_LIST", response);
    },
    // async getTeacher({commit}, id) {
    //     const response = getTeacher(id);
    //     commit("GET_TEACHER", response);
    // },

    async delete({commit}, id) {
        await deleteTeacher(id);
        commit("DELETE_TEACHER", id);
    },
};

const mutations = {
    SET_TEACHER(state, teachers) {
        state.teachers = teachers;
    },
    SET_LIST(state, teachers) {
        state.list = teachers;
    },
    DELETE_TEACHER(state, teachers) {
        state.teachers = teachers;
    },
    GET_TEACHER(state, id){
        state.teachers = id;
    }
};

export default {
    actions,
    state,
    mutations,
    getters,
};
