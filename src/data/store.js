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
            icon: new URL('../assets/img/3-category-cards-icon/h5-custom-icon-1.png', import.meta.url).href,
            title: "Languages"
        },
        {
            icon: new URL('../assets/img/3-category-cards-icon/h5-custom-icon-2.png', import.meta.url).href,
            title: "Software"
        },
        {
            icon: new URL('../assets/img/3-category-cards-icon/h5-custom-icon-3.png', import.meta.url).href,
            title: "Business"
        },
        {
            icon: new URL('../assets/img/3-category-cards-icon/h5-custom-icon-4.png', import.meta.url).href,
            title: "Chemistry"
        },
        {
            icon: new URL('../assets/img/3-category-cards-icon/h5-custom-icon-5.png', import.meta.url).href,
            title: "Science"
        },
        {
            icon: new URL('../assets/img/3-category-cards-icon/h5-custom-icon-6.png', import.meta.url).href,
            title: "DIY&Craft"
        }
    ],
    testimonialInfo: [
        {
            img: new URL('../assets/img/6-testimonial-slider/instructor-img-4.jpg', import.meta.url).href,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nisi quis quasi quibusdam sapiente tempore, sint voluptatem consectetur sunt fuga corporis, repellat magni accusantium, totam",
            name: "Joan Collins",
            role: "STUDENT"
        },
        {
            img: new URL('../assets/img/6-testimonial-slider/instructor-img-6.jpg', import.meta.url).href,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nisi quis quasi quibusdam sapiente tempore, sint voluptatem consectetur sunt fuga corporis, repellat magni accusantium, totam",
            name: "Joan Collins",
            role: "STUDENT"
        },
        {
            img: new URL('../assets/img/6-testimonial-slider/instructor-img-7.jpg', import.meta.url).href,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet nisi quis quasi quibusdam sapiente tempore, sint voluptatem consectetur sunt fuga corporis, repellat magni accusantium, totam",
            name: "Joan Collins",
            role: "STUDENT"
        }
    ],
    currentSlide: 0,
    learningSectionData: [
        {
            indexTitle: "What We Do",
            title: "Learning Possibilities",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti magni, voluptates eligendi iure saepe pariatur nostrum veritatis, laborum itaque cupiditate ad! Soluta esse, tempora beatae cum omnis itaque amet.",
            listData: [
                "We enrich lives trough learning",
                "Maximizing potential trogugh individual attention",
                "The trusted name for specialized training",
                "People teach. People learn. This is where they connect"
            ],
            img: new URL('../assets/img/7-learning-possibilities-section/h12-tabs-icon-1.png', import.meta.url).href
        },
        {
            indexTitle: "Degree Programme",
            title: "Degree Programme",
            text: "PARTE 2 ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti magni, voluptates eligendi iure saepe pariatur nostrum veritatis, laborum itaque cupiditate ad! Soluta esse, tempora beatae cum omnis itaque amet.",
            listData: [
                "LISTA 2 trough learning",
                "Maximizing potential trogugh individual attention",
                "The trusted name for specialized training",
                "People teach. People learn. This is where they connect"
            ],
            img: new URL('../assets/img/7-learning-possibilities-section/h12-tabs-icon-2.png', import.meta.url).href
        },
        {
            indexTitle: "Career Achievements",
            title: "Career Achievements",
            text: "PARTE 3 ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti magni, voluptates eligendi iure saepe pariatur nostrum veritatis, laborum itaque cupiditate ad! Soluta esse, tempora beatae cum omnis itaque amet.",
            listData: [
                "LISTA 3 lives trough learning",
                "Maximizing potential trogugh individual attention",
                "People teach. People learn. This is where they connect"
            ],
            img: new URL('../assets/img/7-learning-possibilities-section/h12-tabs-icon-3.png', import.meta.url).href
        },
        {
            indexTitle: "Personal Management",
            title: "Personal Management",
            text: "PARTE 4 ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti magni, voluptates eligendi iure saepe pariatur nostrum veritatis, laborum itaque cupiditate ad! Soluta esse, tempora beatae cum omnis itaque amet.",
            listData: [
                "LISTA 4 lives trough learning",
                "Maximizing potential trogugh individual attention",
                "The trusted name for specialized training",
                "People teach. People learn. This is where they connect"
            ],
            img: new URL('../assets/img/7-learning-possibilities-section/h12-tabs-icon-4.png', import.meta.url).href
        },
        {
            indexTitle: "Steps to Success",
            title: "Steps to Success",
            text: "PARTE 5 ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti magni, voluptates eligendi iure saepe pariatur nostrum veritatis, laborum itaque cupiditate ad! Soluta esse, tempora beatae cum omnis itaque amet.",
            listData: [
                "LISTA 5 lives trough learning",
                "Maximizing potential trogugh individual attention",
                "People teach. People learn. This is where they connect"
            ],
            img: new URL('../assets/img/7-learning-possibilities-section/h12-tabs-icon-5.png', import.meta.url).href
        },
        {
            indexTitle: "Knowledge Transfer",
            title: "Knowledge Transfer",
            text: "PARTE 6 ipsum dolor sit amet consectetur adipisicing elit. Quidem deleniti magni, voluptates eligendi iure saepe pariatur nostrum veritatis, laborum itaque cupiditate ad! Soluta esse, tempora beatae cum omnis itaque amet.",
            listData: [
                "LISTA 6 lives trough learning",
                "Maximizing potential trogugh individual attention",
            ],
            img: new URL('../assets/img/7-learning-possibilities-section/h12-tabs-icon-6.png', import.meta.url).href
        }
    ],
    coursesCardData: [
        {
            img: new URL('../assets/img/9-courses-image/course-1-f-img.jpg', import.meta.url).href,
            title: "Android Developer",
            price: "FREE",
            teacher: "David Sanders",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            numberTag: "1",
            categoryTag: "PROGRAMMING"
        },
        {
            img: new URL('../assets/img/9-courses-image/course-2-f-img.jpg', import.meta.url).href,
            title: "Web Designing",
            price: "FREE",
            teacher: "Jennifer Powell",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            numberTag: "1",
            categoryTag: "PROGRAMMING"
        },
        {
            img: new URL('../assets/img/9-courses-image/course-3-f-img.jpg', import.meta.url).href,
            title: "Financial Modelling",
            price: "$20",
            teacher: "Edward Bowman",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            numberTag: "1",
            categoryTag: "BUSINESS"
        },
        {
            img: new URL('../assets/img/9-courses-image/course-4-f-img.jpg', import.meta.url).href,
            title: "Android Developer 2",
            price: "FREE",
            teacher: "David Sanders",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            numberTag: "1",
            categoryTag: "PROGRAMMING2"
        },
        {
            img: new URL('../assets/img/9-courses-image/course-5-f-img.jpg', import.meta.url).href,
            title: "Web Designing 2",
            price: "FREE",
            teacher: "Jennifer Powell",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            numberTag: "1",
            categoryTag: "PROGRAMMING2"
        },
        {
            img: new URL('../assets/img/9-courses-image/course-6-f-img.jpg', import.meta.url).href,
            title: "Financial Modelling 2",
            price: "FREE",
            teacher: "David Sanders",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            numberTag: "1",
            categoryTag: "BUSINESS2"
        },
    ],
    tablePlanData:[
        {
            name: "Standard",
            icon: new URL('../assets/img/10-table-plan-icon/h5-custom-icon-7.png', import.meta.url).href,
            price: "$12",
            numberOfCourses: 2,
            time: "15 Days",
            webDesigning: true,
            humanCenteredDesign: true,
            basicMarketing: false,
            pythonForEverybody: false,
            androidDeveloper: false,
            businessEnglish: false
        },
        {
            name: "Professional",
            icon: new URL('../assets/img/10-table-plan-icon/h5-custom-icon-8.png', import.meta.url).href,
            price: "$59",
            numberOfCourses: 4,
            time: "30 Days",
            webDesigning: true,
            humanCenteredDesign: true,
            basicMarketing: true,
            pythonForEverybody: true,
            androidDeveloper: false,
            businessEnglish: false
        },
        {
            name: "Advanced",
            icon: new URL('../assets/img/10-table-plan-icon/h5-custom-icon-9.png', import.meta.url).href,
            price: "$88",
            numberOfCourses: 6,
            time: "30 Days",
            webDesigning: true,
            humanCenteredDesign: true,
            basicMarketing: true,
            pythonForEverybody: true,
            androidDeveloper: true,
            businessEnglish: true
        },

    ],
    universityCarouselImg: [
        new URL('../assets/img/11-university-carousel-image/h5-client-1.png', import.meta.url).href,
        new URL('../assets/img/11-university-carousel-image/h5-client-2.png', import.meta.url).href,
        new URL('../assets/img/11-university-carousel-image/h5-client-3.png', import.meta.url).href,
        new URL('../assets/img/11-university-carousel-image/h5-client-4.png', import.meta.url).href,
        new URL('../assets/img/11-university-carousel-image/h5-client-5.png', import.meta.url).href
    ]

})