(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 394:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__PjVhE",
	"button--feature": "Button_button--feature__T3R1h",
	"button--hero": "Button_button--hero__0c_qK",
	"fadeInScale": "Button_fadeInScale__9ePWI",
	"fadeIn": "Button_fadeIn__Pyi_j",
	"fadeInContent": "Button_fadeInContent__QyDOM"
};


/***/ }),

/***/ 7349:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "Content_content__HI96t",
	"fadeInContent": "Content_fadeInContent__mMzNk",
	"content__wrapper": "Content_content__wrapper__QqC5O",
	"content__section": "Content_content__section__JYFmb",
	"fadeIn": "Content_fadeIn__bZgoJ",
	"fadeInScale": "Content_fadeInScale__9tVo8"
};


/***/ }),

/***/ 8676:
/***/ ((module) => {

// Exports
module.exports = {
	"feature--inverted": "Feature_feature--inverted__ldwy_",
	"feature__container": "Feature_feature__container__SEMZf",
	"feature__text-container": "Feature_feature__text-container__cFNkm",
	"feature__text": "Feature_feature__text__TqXdQ",
	"feature__image-container": "Feature_feature__image-container__BNxe6",
	"feature__title": "Feature_feature__title__R5R__",
	"feature--ready": "Feature_feature--ready__wiRHW",
	"fadeIn": "Feature_fadeIn__Pltbk",
	"fadeInContent": "Feature_fadeInContent__3AUWL",
	"fadeInScale": "Feature_fadeInScale__0pYHR"
};


/***/ }),

/***/ 3181:
/***/ ((module) => {

// Exports
module.exports = {
	"feature-wrapper__container": "FeatureWrapper_feature-wrapper__container__Yxy07",
	"feature-wrapper__list": "FeatureWrapper_feature-wrapper__list__PmKg7",
	"feature-wrapper__item": "FeatureWrapper_feature-wrapper__item__tLI6D",
	"fadeIn": "FeatureWrapper_fadeIn__oJ_Ji",
	"fadeInContent": "FeatureWrapper_fadeInContent__nkUgm",
	"fadeInScale": "FeatureWrapper_fadeInScale__1Byr7"
};


/***/ }),

/***/ 2074:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Hero_hero__iEZMX",
	"gradient": "Hero_gradient__skDk_",
	"hero__video": "Hero_hero__video__ezueO",
	"hero__content": "Hero_hero__content__m2mZn",
	"hero__title": "Hero_hero__title__3pTNm",
	"fadeIn": "Hero_fadeIn__p84h9",
	"hero__text": "Hero_hero__text__EXxny"
};


/***/ }),

/***/ 4050:
/***/ ((module) => {

// Exports
module.exports = {
	"mock--home": "Mock_mock--home__r4b6_",
	"mock--feature": "Mock_mock--feature__mcSZ9",
	"mock__frame": "Mock_mock__frame__d5bGn",
	"mock__mock": "Mock_mock__mock__WYsM8",
	"mock__mock-image": "Mock_mock__mock-image__3xpZB",
	"fadeIn": "Mock_fadeIn__3S_5U",
	"fadeInContent": "Mock_fadeInContent__ohj1_",
	"fadeInScale": "Mock_fadeInScale___77Q0"
};


/***/ }),

/***/ 1157:
/***/ ((module) => {

// Exports
module.exports = {
	"path-header": "PathHeader_path-header__o8x8H",
	"path-header--ready": "PathHeader_path-header--ready__xsA7Y",
	"path-header__container": "PathHeader_path-header__container__oak8r",
	"path-header__path": "PathHeader_path-header__path__xXkBy",
	"path-header__ball": "PathHeader_path-header__ball__YxwVA",
	"path-header__title": "PathHeader_path-header__title__GKgrR",
	"path-header__title-gradient": "PathHeader_path-header__title-gradient__SrUPq",
	"path-header__summary": "PathHeader_path-header__summary__aa5E0",
	"fadeIn": "PathHeader_fadeIn__gUTd_",
	"fadeInContent": "PathHeader_fadeInContent__t2eGv",
	"fadeInScale": "PathHeader_fadeInScale__n489m"
};


/***/ }),

/***/ 8905:
/***/ ((module) => {

// Exports
module.exports = {
	"service": "Service_service__e3FGy",
	"service--ready": "Service_service--ready__auN2K",
	"service__header": "Service_service__header__MnH1N",
	"service__icon": "Service_service__icon__cmApx",
	"service__title": "Service_service__title__yalWV",
	"service__text": "Service_service__text__jH_c6",
	"fadeIn": "Service_fadeIn__sLdNV",
	"fadeInContent": "Service_fadeInContent__taXge",
	"fadeInScale": "Service_fadeInScale__XLoou"
};


/***/ }),

/***/ 2946:
/***/ ((module) => {

// Exports
module.exports = {
	"service-wrapper__list": "ServiceWrapper_service-wrapper__list__Kb7Xw",
	"fadeIn": "ServiceWrapper_fadeIn__x2w4J",
	"fadeInContent": "ServiceWrapper_fadeInContent__PfxQ6",
	"fadeInScale": "ServiceWrapper_fadeInScale__ZT2il"
};


/***/ }),

/***/ 1422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Button/Button.module.scss
var Button_module = __webpack_require__(394);
var Button_module_default = /*#__PURE__*/__webpack_require__.n(Button_module);
;// CONCATENATED MODULE: ./src/components/Button/Button.tsx



const Button = ({ label , link , variant , modifier ="" ,  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: external_classnames_default()([
            (Button_module_default()).button
        ], {
            [(Button_module_default())[`button--${variant}`]]: variant,
            [(Button_module_default())[`button--${modifier}`]]: modifier
        }),
        href: link,
        children: label
    })
;

;// CONCATENATED MODULE: ./src/components/Button/index.ts



/***/ }),

/***/ 9300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* reexport */ Content)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Mock/index.ts + 2 modules
var Mock = __webpack_require__(3305);
// EXTERNAL MODULE: ./src/components/Content/Content.module.scss
var Content_module = __webpack_require__(7349);
var Content_module_default = /*#__PURE__*/__webpack_require__.n(Content_module);
;// CONCATENATED MODULE: ./src/components/Content/Content.tsx




const Content = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((Content_module_default()).content),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Mock/* Mock */.p, {
                type: "video",
                url: "images/mock-website.webm",
                modifier: "home"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()((Content_module_default()).content__section, (Content_module_default()).content__wrapper),
                children: children
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Content/index.ts



/***/ }),

/***/ 6177:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Feature)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1422);
/* harmony import */ var components_Mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3305);
/* harmony import */ var _Feature_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8676);
/* harmony import */ var _Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Feature = ({ image , link , title , text , inverted ,  })=>{
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
        /* Optional options */ threshold: 0.25,
        triggerOnce: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default().feature), {
            [(_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[`feature--inverted`]]: inverted,
            [(_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[`feature--ready`]]: !!inView
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default().feature__container)),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["feature__text-container"])),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default().feature__title)),
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default().feature__text)),
                            children: text
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .z, {
                            modifier: "feature",
                            label: "Visit Website",
                            link: link
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Feature_module_scss__WEBPACK_IMPORTED_MODULE_5___default()["feature__image-container"])),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Mock__WEBPACK_IMPORTED_MODULE_4__/* .Mock */ .p, {
                        modifier: "feature",
                        url: image,
                        type: "image"
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3360:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* reexport safe */ _Feature__WEBPACK_IMPORTED_MODULE_0__.L)
/* harmony export */ });
/* harmony import */ var _Feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6177);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Feature__WEBPACK_IMPORTED_MODULE_0__]);
_Feature__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ FeatureWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3360);
/* harmony import */ var _FeatureWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3181);
/* harmony import */ var _FeatureWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_FeatureWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Feature__WEBPACK_IMPORTED_MODULE_2__]);
components_Feature__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FeatureWrapper = ({ features  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FeatureWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["feature-wrapper"]), "widget"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FeatureWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["feature-wrapper__container"])),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FeatureWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["feature-wrapper__list"])),
                children: features.map(({ link , image , title , text  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FeatureWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["feature-wrapper__item"])),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Feature__WEBPACK_IMPORTED_MODULE_2__/* .Feature */ .L, {
                            inverted: !!(index % 2),
                            link: link,
                            image: image,
                            title: title,
                            text: text
                        })
                    }, index)
                )
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3518:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* reexport safe */ _FeatureWrapper__WEBPACK_IMPORTED_MODULE_0__.$)
/* harmony export */ });
/* harmony import */ var _FeatureWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9283);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FeatureWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_FeatureWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* reexport */ Hero)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(1422);
// EXTERNAL MODULE: ./src/components/Hero/Hero.module.scss
var Hero_module = __webpack_require__(2074);
var Hero_module_default = /*#__PURE__*/__webpack_require__.n(Hero_module);
;// CONCATENATED MODULE: ./src/components/Hero/Hero.tsx




const Hero = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((Hero_module_default()).hero),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("video", {
                loop: true,
                autoPlay: true,
                muted: true,
                className: (Hero_module_default()).hero__video,
                children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                    src: "/images/bg-video17.webm",
                    type: "video/webm"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: external_classnames_default()((Hero_module_default()).hero__content),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: external_classnames_default()((Hero_module_default()).hero__title),
                        children: "Hi. I'm Dom!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: external_classnames_default()((Hero_module_default()).hero__text),
                        children: "Welcome to my website. I am a Web Designer & Developer that has spent the last 7 years building exciting digital experiences."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* Button */.z, {
                        label: "Start a Project",
                        link: "/",
                        modifier: "hero"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Hero/index.ts



/***/ }),

/***/ 3305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ Mock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/images/browser-frame.svg
/* harmony default export */ const browser_frame = ({"src":"/_next/static/media/browser-frame.5f2568a7.svg","height":47,"width":1010});
// EXTERNAL MODULE: ./src/components/Mock/Mock.module.scss
var Mock_module = __webpack_require__(4050);
var Mock_module_default = /*#__PURE__*/__webpack_require__.n(Mock_module);
;// CONCATENATED MODULE: ./src/components/Mock/Mock.tsx





const Mock = ({ url , modifier , type  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Mock_module_default()).mock, {
            [(Mock_module_default())[`mock--${modifier}`]]: modifier
        }),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()((Mock_module_default()).mock__frame),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: browser_frame
                }),
                type === "video" ? /*#__PURE__*/ jsx_runtime_.jsx("video", {
                    loop: true,
                    autoPlay: true,
                    muted: true,
                    className: external_classnames_default()((Mock_module_default()).mock__mock),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("source", {
                        src: url,
                        type: "video/webm"
                    })
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        boxShadow: "0 1px 10px rgba(0, 0, 0, 0.2)"
                    },
                    className: external_classnames_default()((Mock_module_default())["mock__mock-image"]),
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: url,
                        width: "100%",
                        height: "100%",
                        layout: "responsive"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Mock/index.ts



/***/ }),

/***/ 5680:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ PathHeader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4009);
/* harmony import */ var _PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1157);
/* harmony import */ var _PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const PathHeader = ({ title , summary  })=>{
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({
        /* Optional options */ threshold: 0.25,
        triggerOnce: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["path-header"]), {
            [(_PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default())[`path-header--ready`]]: !!inView
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["path-header__container"])),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["path-header__path"]))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["path-header__ball"]))
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["path-header__title"])),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_PathHeader_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["path-header__title-gradient"])),
                        children: title
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9055:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* reexport safe */ _PathHeader__WEBPACK_IMPORTED_MODULE_0__.c)
/* harmony export */ });
/* harmony import */ var _PathHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_PathHeader__WEBPACK_IMPORTED_MODULE_0__]);
_PathHeader__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3819:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
/* harmony import */ var _Service_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8905);
/* harmony import */ var _Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Service_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__]);
react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Service = ({ icon , title , text  })=>{
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({
        /* Optional options */ threshold: 0.25,
        triggerOnce: true
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().service), {
            [(_Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[`service--ready`]]: !!inView
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().service__container)),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().service__header)),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().service__icon)),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: icon,
                                width: "50px",
                                height: "50px"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().service__title)),
                            children: title
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().service__body)),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().service__text)),
                        children: text
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* reexport safe */ _Service__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3819);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Service__WEBPACK_IMPORTED_MODULE_0__]);
_Service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ServiceWrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8682);
/* harmony import */ var _ServiceWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2946);
/* harmony import */ var _ServiceWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ServiceWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Service__WEBPACK_IMPORTED_MODULE_2__]);
components_Service__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ServiceWrapper = ({ services  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ServiceWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["service-wrapper"]), "widget"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ServiceWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["service-wrapper__container"])),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ServiceWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["service-wrapper__list"])),
                children: services.map(({ icon , title , text  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ServiceWrapper_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["service-wrapper__item"])),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Service__WEBPACK_IMPORTED_MODULE_2__/* .Service */ .t, {
                            icon: icon,
                            title: title,
                            text: text
                        })
                    }, index)
                )
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6754:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _ServiceWrapper__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _ServiceWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7943);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ServiceWrapper__WEBPACK_IMPORTED_MODULE_0__]);
_ServiceWrapper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* reexport */ featuresMock)
});

;// CONCATENATED MODULE: ./src/models/Feature/FeatureMock.ts
const featuresMock = [
    {
        title: "The Chicken Website",
        image: "/images/the-chicken-website-mock.png",
        link: "/",
        text: "An all-new identity and website. Making careful use of their extensive library of client imagery, this was a ground-up build using Gatsby, Contentful, and Netlify for this world-leading licensing company."
    },
    {
        title: "Spa Ur Self",
        image: "/images/spa-ur-self-mock.png",
        link: "/",
        text: "An all-new identity and website. Making careful use of their extensive library of client imagery, this was a ground-up build using Gatsby, Contentful, and Netlify for this world-leading licensing company."
    }, 
];

;// CONCATENATED MODULE: ./src/models/Feature/index.ts



/***/ }),

/***/ 8790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* reexport */ servicesMock)
});

;// CONCATENATED MODULE: ./src/models/Service/ServiceMock.ts
const servicesMock = [
    {
        title: "Web Design",
        icon: "/svgs/design.svg",
        text: "As a website designer I always use the responsive or fluid approach to make sure your website has a similar look and feel across all devices, from smartphones to desktops. I then combine it with the best practices in UX Design enabling your website to function exactly as you expect."
    },
    {
        title: "Web Development",
        icon: "/svgs/code.svg",
        text: "My main area of expertise lies within front-end development but can also offer back-end development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one."
    },
    {
        title: "SEO & Performance",
        icon: "/svgs/performance.svg",
        text: "My main area of expertise lies within front-end development but can also offer back-end development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one."
    },
    {
        title: "Photography",
        icon: "/svgs/photography.svg",
        text: "My main area of expertise lies within front-end development but can also offer back-end development to deliver any web functionalities to suit all your project needs. This could be by building a brand new website or perhaps by adding extra features to an exiting one."
    }, 
];

;// CONCATENATED MODULE: ./src/models/Service/index.ts



/***/ }),

/***/ 5970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2598);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1471);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4083);
/* harmony import */ var _components_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9300);
/* harmony import */ var _components_PathHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9055);
/* harmony import */ var components_ServiceWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6754);
/* harmony import */ var components_FeatureWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3518);
/* harmony import */ var models_Service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8790);
/* harmony import */ var models_Feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7389);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_1__, _components_PathHeader__WEBPACK_IMPORTED_MODULE_5__, components_ServiceWrapper__WEBPACK_IMPORTED_MODULE_6__, components_FeatureWrapper__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_posts__WEBPACK_IMPORTED_MODULE_1__, _components_PathHeader__WEBPACK_IMPORTED_MODULE_5__, components_ServiceWrapper__WEBPACK_IMPORTED_MODULE_6__, components_FeatureWrapper__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Home = ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .A, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_3__/* .Hero */ .V, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Content__WEBPACK_IMPORTED_MODULE_4__/* .Content */ .V, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PathHeader__WEBPACK_IMPORTED_MODULE_5__/* .PathHeader */ .c, {
                        title: "Services",
                        summary: "What I Do"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ServiceWrapper__WEBPACK_IMPORTED_MODULE_6__/* .ServiceWrapper */ .A, {
                        services: models_Service__WEBPACK_IMPORTED_MODULE_8__/* .servicesMock */ .J
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PathHeader__WEBPACK_IMPORTED_MODULE_5__/* .PathHeader */ .c, {
                        title: "Work",
                        summary: "My Portfolio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_FeatureWrapper__WEBPACK_IMPORTED_MODULE_7__/* .FeatureWrapper */ .$, {
                        features: models_Feature__WEBPACK_IMPORTED_MODULE_9__/* .featuresMock */ .N
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PathHeader__WEBPACK_IMPORTED_MODULE_5__/* .PathHeader */ .c, {
                        title: "About",
                        summary: "Learn More"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PathHeader__WEBPACK_IMPORTED_MODULE_5__/* .PathHeader */ .c, {
                        title: "Contact",
                        summary: "Get in Touch"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "body"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    const posts = (0,_lib_posts__WEBPACK_IMPORTED_MODULE_1__/* .getSortedPostsData */ .ld)();
    return {
        props: {
            posts
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4009:
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675,422], () => (__webpack_exec__(5970)));
module.exports = __webpack_exports__;

})();