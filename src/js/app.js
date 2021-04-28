function initVue() {

    new Vue({

        el: "#app",
        data:{

            scrollPosition: null,
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