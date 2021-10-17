import Vue from "vue";
import Vuex from "vuex";

import courses from "./modules/courses";
import students from "./modules/students";
import teachers from "./modules/teachers";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        courses,
        students,
        teachers,
    },
});
