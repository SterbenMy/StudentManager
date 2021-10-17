import {create, getCourses, deleteCourses, getCourse, updateCourse} from "@/services/CourseService";

const state = () => ({
    courses: {},
    list:{},
    course: {},
});

const getters = {
    getCoursesList(state) {
        return state.list;
    },
    getCourse(state) {
        return state.course;
    }
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
    async getCourse({commit}, id) {
        const response = getCourse(id);
        commit("GET_COURSE", response);
    },
    async deleteCourse({ commit }, id) {
        await deleteCourses(id);
        commit("SET_COURSE", id);
    },
    async updateCourse({commit}, course){
        await updateCourse(course.id, course.name, course.number, course.teacher, course.students);
        commit('UPDATE_COURSE', course);
    }
};

const mutations = {
    SET_COURSE(state, courses) {
        state.courses = courses;
    },
    SET_LIST(state, courses){
      state.list= courses;
    },
    UPDATE_COURSE(state, course){
        state.course=course;
    },
    GET_COURSE(state, course) {
        state.course = course;
    },
};

export default {
    actions,
    state,
    mutations,
    getters,
};
