import { reactive } from "vue";

export const store = reactive({
    headerLink: {
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
    },
    jumbotronSlides: [
        {
            title: "Contemporary Ideas",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut lacinia lorem. Sed ut imperdiet dolor, at hendrerit tellus. Maecenas.",
            buttonText: "REGISTER NOW"
        },
        {
            title: "TITOLONE 2",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut lacinia lorem. Sed ut imperdiet dolor, at hendrerit tellus. Maecenas.",
            buttonText: "BOTTONE 2"
        },
        {
            title: "TITOLONE 3",
            text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut lacinia lorem. Sed ut imperdiet dolor, at hendrerit tellus. Maecenas.",
            buttonText: "BOTTONE 3"
        }
    ],
    cateogryCardsContent: [
        {
            icon: "fa-solid fa-earth-europe",
            title: "Languages"
        },
        {
            icon: "fa-solid fa-earth-europe",
            title: "Software"
        },
        {
            icon: "fa-solid fa-earth-europe",
            title: "Business"
        },
        {
            icon: "fa-solid fa-earth-europe",
            title: "Chemistry"
        },
        {
            icon: "fa-solid fa-earth-europe",
            title: "Science"
        },
        {
            icon: "fa-solid fa-earth-europe",
            title: "DIY&Craft"
        }
    ],
    testimonialInfo: [
        {
            img: new URL('../assets/img/5-testimonial-slider/instructor-img-4.jpg', import.meta.url).href,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nisi quis quasi quibusdam sapiente tempore, sint voluptatem consectetur sunt fuga corporis, repellat magni accusantium, totam",
            name: "Joan Collins",
            role: "STUDENT"
        },
        {
            img: new URL('../assets/img/5-testimonial-slider/instructor-img-6.jpg', import.meta.url).href,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nisi quis quasi quibusdam sapiente tempore, sint voluptatem consectetur sunt fuga corporis, repellat magni accusantium, totam",
            name: "Joan Collins",
            role: "STUDENT"
        },
        {
            img: new URL('../assets/img/5-testimonial-slider/instructor-img-7.jpg', import.meta.url).href,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nisi quis quasi quibusdam sapiente tempore, sint voluptatem consectetur sunt fuga corporis, repellat magni accusantium, totam",
            name: "Joan Collins",
            role: "STUDENT"
        }
    ]

})