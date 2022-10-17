exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 1245:
/***/ ((module) => {

// Exports
module.exports = {
	"nav-bar": "NavBar_nav-bar__jaeyJ",
	"nav-bar__list": "NavBar_nav-bar__list__OLtsn",
	"nav-bar__logo": "NavBar_nav-bar__logo__ouIhC",
	"nav-bar__item": "NavBar_nav-bar__item__BqOYY",
	"nav-bar__link": "NavBar_nav-bar__link__bdAe0",
	"nav-bar--vertical": "NavBar_nav-bar--vertical__7P5HH",
	"nav-bar--grey": "NavBar_nav-bar--grey__y_ylj",
	"nav-bar--dark": "NavBar_nav-bar--dark__YLWvX",
	"nav-bar--start": "NavBar_nav-bar--start__xAfgO",
	"nav-bar--end": "NavBar_nav-bar--end__aAe3i",
	"nav-bar--naked": "NavBar_nav-bar--naked__lJvyd",
	"nav-mobile": "NavBar_nav-mobile__9WkCP",
	"nav-mobile--open": "NavBar_nav-mobile--open__2liQx",
	"nav-mobile__list": "NavBar_nav-mobile__list__mWpdW",
	"nav-mobile__link": "NavBar_nav-mobile__link__FFBSU"
};


/***/ }),

/***/ 1471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.958ffb1c.png","height":275,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAAQ0lEQVR42h3LsQpAABQAwFdWBmWUASWZDBRZlKSMBv//I5dy+4XMZJboIuTqsJs9RoPTogmH3ubVuqzKUKikbtVf2g+6miMA8xjhpgAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./src/components/NavBar/NavBar.module.scss
var NavBar_module = __webpack_require__(1245);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
;// CONCATENATED MODULE: ./src/components/NavBar/NavBar.tsx






const NavBar = ({ options , layout ="horizontal" , color ="white" , align ="center" , naked =false ,  })=>{
    const [isActive, setActive] = external_react_default().useState(false);
    const handleToggle = ()=>setActive(!isActive)
    ;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: external_classnames_default()((NavBar_module_default())["nav-bar"], {
                    [(NavBar_module_default())[`nav-bar--${layout}`]]: layout,
                    [(NavBar_module_default())[`nav-bar--${color}`]]: color,
                    [(NavBar_module_default())[`nav-bar--${align}`]]: align,
                    [(NavBar_module_default())["nav-bar--naked"]]: naked
                }),
                role: "navigation",
                "aria-label": "navigation",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "wrapper wrapper--nav",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (NavBar_module_default())["nav-bar__logo"],
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo,
                                    width: "65px",
                                    height: "35px"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            id: "nav-icon3",
                            onClick: handleToggle,
                            className: isActive ? "open" : null,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: (NavBar_module_default())["nav-bar__list"],
                            children: options.map(({ label , link  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: (NavBar_module_default())["nav-bar__item"],
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: link,
                                        className: (NavBar_module_default())["nav-bar__link"],
                                        children: label
                                    })
                                }, index)
                            )
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: external_classnames_default()((NavBar_module_default())["nav-mobile"], {
                    [(NavBar_module_default())["nav-mobile--open"]]: isActive
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: (NavBar_module_default())["nav-mobile__list"],
                    children: options.map(({ label , link  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (NavBar_module_default())["nav-mobile__item"],
                            onClick: ()=>setActive(false)
                            ,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: link,
                                className: (NavBar_module_default())["nav-mobile__link"],
                                onClick: ()=>setActive(false)
                                ,
                                children: label
                            })
                        }, index)
                    )
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/NavBar/index.ts


;// CONCATENATED MODULE: ./src/models/Navigation/NavigationMock.ts
const navigationMock = [
    {
        label: "Work",
        link: "#work"
    },
    {
        label: "Services",
        link: "#services"
    },
    {
        label: "About",
        link: "#about"
    },
    {
        label: "Contact",
        link: "#contact"
    }, 
];

;// CONCATENATED MODULE: ./src/components/Layout/Layout.tsx






const siteTitle = "Next.js Sample Website";
const Layout = ({ children  })=>{
    const [scrollY, setScrollY] = external_react_default().useState(0);
    const onScroll = external_react_default().useCallback((event)=>{
        setScrollY(Number(document.body.scrollTop));
    }, []);
    external_react_default().useEffect(()=>{
        document.body.addEventListener("scroll", onScroll, {
            passive: true
        });
        // remove event on unmount to prevent a memory leak
        ()=>document.removeEventListener("scroll", onScroll)
        ;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Learn how to build a personal website using Next.js"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: `https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "og:title",
                        content: siteTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Dom Paul Creative"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar, {
                        options: navigationMock,
                        naked: scrollY === 0
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "main-content",
                        children: children
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Layout/index.ts



/***/ }),

/***/ 2598:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Le": () => (/* binding */ getAllPostIds),
/* harmony export */   "ld": () => (/* binding */ getSortedPostsData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);
([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "src/posts");
function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName)=>{
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");
        // Read markdown file as string
        const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        return {
            id,
            ...matterResult.data
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
function getAllPostIds() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
    return fileNames.map((fileName)=>{
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        };
    });
}
async function getPostData(id) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__["default"]).process(matterResult.content);
    const contentHtml = processedContent.toString();
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;