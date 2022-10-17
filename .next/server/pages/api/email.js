"use strict";
(() => {
var exports = {};
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 869:
/***/ ((module) => {

module.exports = import("emailjs");;

/***/ }),

/***/ 9666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var emailjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(869);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([emailjs__WEBPACK_IMPORTED_MODULE_0__]);
emailjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    const name = req.body.name;
    const companyPosition = req.body.companyPosition;
    const companyName = req.body.companyName;
    const businessEmail = req.body.businessEmail;
    const businessMobile = req.body.businessMobile;
    const businessPhone = req.body.businessPhone || "N/A";
    const numberOfCasingInterest = req.body.numberOfCasingInterest || "N/A";
    const gold = req.body.gold ? "Yes" : "No";
    const chrome = req.body.chrome ? "Yes" : "No";
    const black = req.body.black ? "Yes" : "No";
    const cream = req.body.cream ? "Yes" : "No";
    const white = req.body.white ? "Yes" : "No";
    const beautyBarInterest = req.body.beautyBarInterest || "N/A";
    const virtualMeetDate = req.body.virtualMeetDate || "N/A";
    const virtualMeetTime = req.body.virtualMeetTime || "N/A";
    const messageBody = req.body.message || "N/A";
    const client = new emailjs__WEBPACK_IMPORTED_MODULE_0__.SMTPClient({
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASS,
        host: "smtp.gmail.com",
        ssl: true
    });
    try {
        const message = await client.sendAsync({
            text: "",
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Enquiry - ${name}`,
            attachment: [
                {
                    data: `
        <html>
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>Name:</h3>
             <p>${name}</p>
          <div>
       
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>What is your company position?</h3>
             <p>${companyPosition}</p>
          </div>
          
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>What is your company name?</h3>
             <p>${companyName}</p>
          </div>
       
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>What is your business email address?</h3>
             <p>${businessEmail}</p>
          </div>
          
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>What is your business contact mobile number?</h3>
             <p>${businessMobile}</p>
          </div>
       
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>What is your business land line phone number?</h3>
             <p>${businessPhone}</p>
          </div>
       
           <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>How many Botanical Shower Casing's would you be interested in buying?</h3>
             <p>${numberOfCasingInterest}</p>
          </div>
       
           <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>What type of finishing would you be interested in buying?</h3>
             <p>Chrome: ${chrome}</p>
             <p>Gold: ${gold}</p>
             <p>Black: ${black}</p>
             <p>Cream: ${cream}</p>
             <p>White: ${white}</p>
          </div>
       
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>Which Botanical Shower Beauty Bar, would you be interested in buying?</h3>
             <p>${beautyBarInterest}</p>
          </div>
       
           <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>What is your preferred date for an initial virtual meeting or phone call? (We are available from the 31st of October)</h3>
             <p>${virtualMeetDate}</p>
          </div>
       
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>What is your preferred time for an initial virtual meeting or phone call? (We are available from the 31st of October)</h3>
             <p>${virtualMeetTime}</p>
          </div>
       
          <div style="border-bottom: solid 1px rgba(240, 240, 240, 0.9); font-size: 24px; padding: 14px 0; margin-bottom: 14px;">
             <h3>Please write any comments or feedback about your Hotel 360 expo experience at our stand below</h3>
             <p>${messageBody}</p>
          </div>
       </html>`,
                    alternative: true
                }, 
            ]
        });
        res.status(200).end();
    } catch (err) {
        res.status(500).end();
        console.error(err);
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9666));
module.exports = __webpack_exports__;

})();