import { reactive } from "vue";

export const store = reactive({
    headerLink: [
        home:{
            title: "HOME",
            href: "#"
        },
        courses:{
            title: "COURSES",
            href: "#"
        },
        instructors:{
            title: "INSTRUCTORS",
            href: "#"
        },
        events:{
            title: "EVENTS",
            href: "#"
        },
        pages:{
            title: "PAGES",
            href: "#"
        },
        elements:{
            title: "ELEMENTS",
            href: "#"
        }
    ]
})