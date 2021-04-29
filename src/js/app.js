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

const storiesData = [

    {
        'quote': 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
        'img': 'testimonial-avata-02.jpg',
        'name': 'Mina Hollance',
        'job': '/ Freelancer'
    },
    {
        'quote': 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professionals when dealing with students',
        'img': 'testimonial-avata-04.jpg',
        'name': 'Modley Pondor',
        'job': '/ IT Specialist'
    },
    {
        'quote': "I'm happy with thei arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.",
        'img': 'testimonial-avata-01.jpg',
        'name': 'Luvic Dubble',
        'job': '/ Private Tutor'
    },
    {
        'quote': "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
        'img': 'testimonial-avata-03.jpg',
        'name': 'Florence Themes',
        'job': '/ Multimedia Admin'
    }
];

function initVue() {

    new Vue({

        el: "#app",
        data:{

            scrollPosition: null,

            cursorX: null,
            cursorY: null,

            navHomeDropdown: navHomeData,
            navLinksDropdown: navLinksData,

            stories: storiesData,
            storyIndex: 0, 
        },
        mounted() {
            // detect the page scroll
            window.addEventListener('scroll', this.getScrollPosition);
            // detect the mouse movement
            window.addEventListener('mousemove', this.getMousePosition)
        },
        methods: {

            getScrollPosition: function() {
                this.scrollPosition = window.scrollY
            },
            getMousePosition: function(event) {

                this.cursorX = (event.pageX / 20);
                this.cursorY = ((event.pageY / 20) + 200);
            },
            changeStoryUp: function() {

                if (this.storyIndex < this.stories.length - 1){

                    this.storyIndex ++;
                }
                else{

                    this.storyIndex = 0;
                }
            },
            changeStoryDown: function () {

                if (this.storyIndex > 0) {

                    this.storyIndex--;
                }
                else {

                    this.storyIndex = 3;
                }
            },
        }
    });
};

document.addEventListener('DOMContentLoaded', initVue);