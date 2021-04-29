const navHomeData =  {

    'linkName' : 'Home',
    'dropdown' :{
    
        'col1' : [
            'MaxCoach education',
            'Course portal',
            'Distant learning',
            'Multimedia pedagogy',
            'Modern Schooling',
            'Remote Training',
            'Health Coaching',
            'Gym Coaching',
            'Business'
        ],
        'col2' : [
            'Artist',
            'Kitchen Coach',
            'Motivation',
            'Dancing',
            'Guitar',
            'Yoga',
            'Photography',
            'Personal Finance'
        ],
        'img': 'homepages-mega-menu-image-alt.jpg'
    }
};

const navLinksData = [

    {
        'linkName': 'Pages',
        'dropdown': [

            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
        ]
    },
    {
        'linkName': 'Courses',
        'dropdown': [

            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
        ]
    },
    {
        'linkName': 'Features',
        'dropdown': [

            'link bla bla bla',
            'link bla bla bla',
        ]
    },
    {
        'linkName': 'Blog',
        'dropdown': [

            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
        ]
    },
    {
        'linkName': 'Shop',
        'dropdown': [

            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
            'link bla bla bla',
        ]
    }
];


function initVue() {

    new Vue({

        el: "#app",
        data:{

            scrollPosition: null,

            navHomeDropdown: navHomeData,
            navLinksDropdown: navLinksData,
        },
        mounted() {
            window.addEventListener('scroll', this.getScrollPosition);
        },
        methods: {

            getScrollPosition() {
                this.scrollPosition = window.scrollY
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', initVue);