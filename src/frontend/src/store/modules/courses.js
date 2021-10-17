import {create, getCourses, deleteCourses} from "@/services/CourseService";

const state = () => ({
    courses: {},
    list:{},
});

const getters = {
    getCoursesList(state) {
        return state.list;
    },
};

const actions = {
    async createCourse({commit}, courses) {
        try {
            await create(courses.name, courses.number);
            commit("SET_COURSE", courses);
        } catch (e) {
            console.log(commit);
            throw e;
        }
    },

    async getCoursesList({commit}) {
        const response = getCourses();
        commit("SET_LIST", response);
    },
    async deleteCourse({ commit }, id) {
        await deleteCourses(id);
        commit("DELETE_COURSES", id);
    },
};

const mutations = {
    SET_COURSE(state, courses) {
        state.courses = courses;
    },
    SET_LIST(state, courses){
      state.list= courses;
    },
    DELETE_COURSES(state, courses){
        state.courses=courses;
    }
};

export default {
    actions,
    state,
    mutations,
    getters,
};
