import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Index",
        redirect: { name: "Home" },
        component: () => import("@/views/Index"),
        children: [
            {
                path: "/home",
                name: "Home",
                component: Home,
            },
            {
              path: "/courses",
              name: "CoursesList",
              component: () => import("@/views/course/CoursesList"),
            },
            {
                path: "/students",
                name: "StudentsList",
                component: () => import("@/views/student/StudentsList"),
            },
            {
                path: "/teachers",
                name: "TeachersList",
                component: () => import("@/views/teacher/TeachersList"),
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
