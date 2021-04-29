/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

// DATA
var navHomeData = {
  'linkName': 'Home',
  'dropdown': {
    'col1': [{
      'text': 'MaxCoach education',
      'hot': 'yes'
    }, {
      'text': 'Course portal',
      'hot': 'no'
    }, {
      'text': 'Distant learning',
      'hot': 'yes'
    }, {
      'text': 'Multimedia pedagogy',
      'hot': 'no'
    }, {
      'text': 'Modern Schooling',
      'hot': 'no'
    }, {
      'text': 'Remote Training',
      'hot': 'no'
    }, {
      'text': 'Health Coaching',
      'hot': 'no'
    }, {
      'text': 'Gym Coaching',
      'hot': 'no'
    }, {
      'text': 'Business',
      'hot': 'no'
    }],
    'col2': [{
      'text': 'Artist',
      'new': 'no'
    }, {
      'text': 'Kitchen Coach',
      'new': 'no'
    }, {
      'text': 'Motivation',
      'new': 'no'
    }, {
      'text': 'Multimedia pedagogy',
      'new': 'yes'
    }, {
      'text': 'Dancing',
      'new': 'yes'
    }, {
      'text': 'Guitar',
      'new': 'yes'
    }, {
      'text': 'Photography',
      'new': 'yes'
    }, {
      'text': 'Personal Finance',
      'new': 'yes'
    }],
    'img': 'homepages-mega-menu-image-alt.jpg'
  }
};
var navLinksData = [{
  'linkName': 'Pages',
  'dropdown': ['link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla']
}, {
  'linkName': 'Courses',
  'dropdown': ['link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla']
}, {
  'linkName': 'Features',
  'dropdown': ['link bla bla bla', 'link bla bla bla']
}, {
  'linkName': 'Blog',
  'dropdown': ['link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla']
}, {
  'linkName': 'Shop',
  'dropdown': ['link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla', 'link bla bla bla']
}];
var storiesData = [{
  'quote': 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.',
  'img': 'testimonial-avata-02.jpg',
  'name': 'Mina Hollance',
  'job': '/ Freelancer'
}, {
  'quote': 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professionals when dealing with students',
  'img': 'testimonial-avata-04.jpg',
  'name': 'Modley Pondor',
  'job': '/ IT Specialist'
}, {
  'quote': "I'm happy with thei arrangement of lessons and subjects. They reflect a scientific investigation into effective methods to adopt for learners.",
  'img': 'testimonial-avata-01.jpg',
  'name': 'Luvic Dubble',
  'job': '/ Private Tutor'
}, {
  'quote': "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
  'img': 'testimonial-avata-03.jpg',
  'name': 'Florence Themes',
  'job': '/ Multimedia Admin'
}];

function initVue() {
  new Vue({
    el: "#app",
    data: {
      // import data
      navHomeDropdown: navHomeData,
      navLinksDropdown: navLinksData,
      stories: storiesData,
      // page vertical scrolling value
      scrollPosition: null,
      // background offsets for jumbotron
      movementX: 40,
      movementY: 200,
      // mouse coordinates
      mouseX: 0,
      mouseY: 0,
      // stories carousel index
      storyIndex: 0,
      // numbers values (for appear animation !TO DO)
      finishedSessions: 1.926,
      satisfactionRate: 100,
      EnrolledLearners: 3092,
      OnlineInstructors: 200
    },
    mounted: function mounted() {
      // detect the page scroll
      window.addEventListener('scroll', this.getScrollPosition); // detect the mouse movement

      window.addEventListener('mousemove', this.getMousePosition);
    },
    methods: {
      getScrollPosition: function getScrollPosition() {
        this.scrollPosition = window.scrollY;
      },
      getMousePosition: function getMousePosition(event) {
        var posX = event.pageX;
        var posY = event.pageY;

        if (this.mouseX != 0 && this.mouseY != 0) {
          // mouse move right
          if (posX > this.mouseX) {
            this.movementX -= .08 * (posX - this.mouseX); // bg move left

            this.mouseX = posX;
          } // mouse move left


          if (posX < this.mouseX) {
            this.movementX += .08 * (this.mouseX - posX); //bg move right

            this.mouseX = posX;
          } //mouse move up


          if (posY > this.mouseY) {
            this.movementY -= .08 * (posY - this.mouseY); //bg move down

            this.mouseY = posY;
          } //mouse move down


          if (posY < this.mouseY) {
            this.movementY += .08 * (this.mouseY - posY); // bg move up

            this.mouseY = posY;
          }
        } // first detection for mouse movement
        // set default value similar to this first detection
        // not equal because we need discrepancy for movement detection
        else {
            this.mouseX = posX - 1;
            this.mouseY = posY - 1;
          }
      },
      changeStoryUp: function changeStoryUp() {
        if (this.storyIndex < this.stories.length - 1) {
          this.storyIndex++;
        } else {
          this.storyIndex = 0;
        }
      },
      changeStoryDown: function changeStoryDown() {
        if (this.storyIndex > 0) {
          this.storyIndex--;
        } else {
          this.storyIndex = 3;
        }
      }
    },
    // create new directive for section animation on scroll
    directives: {
      infocus: {
        isLiteral: true,
        inserted: function inserted(el, binding) {
          var f = function f() {
            var rect = el.getBoundingClientRect();
            var inView = rect.top >= 0 && rect.bottom <= window.innerHeight + 200;

            if (inView) {
              el.classList.add(binding.value);
              window.removeEventListener('scroll', f);
            }
          };

          window.addEventListener('scroll', f);
          f();
        }
      }
    }
  });
}

;
document.addEventListener('DOMContentLoaded', initVue);

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;