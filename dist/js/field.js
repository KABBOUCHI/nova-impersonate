/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Detail/ImpersonateField.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Detail/ImpersonateField.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_HandlesFieldValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/HandlesFieldValue */ "./resources/js/mixins/HandlesFieldValue.js");
/* harmony import */ var _Shared_ImpersonateModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/ImpersonateModal.vue */ "./resources/js/components/Shared/ImpersonateModal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_HandlesFieldValue__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    ImpersonateModal: _Shared_ImpersonateModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["resource", "resourceName", "resourceId", "field"]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Index/ImpersonateField.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Index/ImpersonateField.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_HandlesFieldValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/HandlesFieldValue */ "./resources/js/mixins/HandlesFieldValue.js");
/* harmony import */ var _Shared_ImpersonateModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Shared/ImpersonateModal.vue */ "./resources/js/components/Shared/ImpersonateModal.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ImpersonateModal: _Shared_ImpersonateModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_HandlesFieldValue__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ["resourceName", "field"],
  mounted: function mounted() {
    var parentElement = this.$el.parentElement;
    parentElement.classList.add("td-fit");
    parentElement.style.paddingRight = "0px";
    parentElement.style.minWidth = "auto";
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Shared/ImpersonateModal.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Shared/ImpersonateModal.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    handleClose: function handleClose() {
      this.$emit("close");
    },
    handleConfirm: function handleConfirm() {
      this.$emit("confirm");
    }
  },

  /**
   * Mount the component.
   */
  mounted: function mounted() {
    this.$refs.confirmButton.focus();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Detail/ImpersonateField.vue?vue&type=template&id=12ddf804":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Detail/ImpersonateField.vue?vue&type=template&id=12ddf804 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "flex border-b border-40"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-1/4 py-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "font-normal text-80"
})], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "w-3/4 py-4"
};
var _hoisted_4 = {
  to: "modals"
};
var _hoisted_5 = {
  "class": "p-8"
};
var _hoisted_6 = {
  "class": "text-80 leading-normal flex items-center"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "mr-4"
}, "Guard:", -1
/* HOISTED */
);

var _hoisted_8 = {
  value: "",
  selected: "",
  disabled: ""
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("heading");

  var _component_impersonate_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("impersonate-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    }),
    "class": "cursor-pointer dim inline-block text-primary font-bold"
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Impersonate')), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("portal", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.openModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_impersonate_modal, {
        key: 0,
        onConfirm: _ctx.openUrl,
        onClose: _cache[2] || (_cache[2] = function ($event) {
          return _ctx.openModal = false;
        }),
        mode: "delete"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_heading, {
            level: 2,
            "class": "mb-6"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Impersonate')) + " (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.impersonate_target_name) + ")", 1
              /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return _ctx.guard = $event;
            }),
            "class": "w-full form-control form-select"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Choose a guard')), 1
          /* TEXT */
          ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_this.guards, function (g, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
              key: index
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(g), 1
            /* TEXT */
            );
          }), 128
          /* KEYED_FRAGMENT */
          ))], 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.guard]])])])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onConfirm"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Index/ImpersonateField.vue?vue&type=template&id=0fd62ae9":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Index/ImpersonateField.vue?vue&type=template&id=0fd62ae9 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = ["title"];

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  width: "22",
  height: "18",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 448 512"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-58.5c11-18.9 17.8-40.6 17.8-64v-.3c39.2-7.8 64-19.1 64-31.7 0-13.3-27.3-25.1-70.1-33-9.2-32.8-27-65.8-40.6-82.8-9.5-11.9-25.9-15.6-39.5-8.8l-27.6 13.8c-9 4.5-19.6 4.5-28.6 0L182.1 3.4c-13.6-6.8-30-3.1-39.5 8.8-13.5 17-31.4 50-40.6 82.8-42.7 7.9-70 19.7-70 33 0 12.6 24.8 23.9 64 31.7v.3c0 23.4 6.8 45.1 17.8 64H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM176 480l-41.6-192 49.6 32 24 40-32 120zm96 0l-32-120 24-40 49.6-32L272 480zm41.7-298.5c-3.9 11.9-7 24.6-16.5 33.4-10.1 9.3-48 22.4-64-25-2.8-8.4-15.4-8.4-18.3 0-17 50.2-56 32.4-64 25-9.5-8.8-12.7-21.5-16.5-33.4-.8-2.5-6.3-5.7-6.3-5.8v-10.8c28.3 3.6 61 5.8 96 5.8s67.7-2.1 96-5.8v10.8c-.1.1-5.6 3.2-6.4 5.8z"
})], -1
/* HOISTED */
);

var _hoisted_3 = {
  key: 0,
  "class": "ml-2"
};
var _hoisted_4 = {
  to: "modals"
};
var _hoisted_5 = {
  "class": "p-8"
};
var _hoisted_6 = {
  "class": "text-80 leading-normal flex items-center"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "mr-4"
}, "Guard:", -1
/* HOISTED */
);

var _hoisted_8 = {
  value: "",
  selected: "",
  disabled: ""
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _this = this;

  var _component_heading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("heading");

  var _component_impersonate_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("impersonate-modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("a", {
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.onClick && _ctx.onClick.apply(_ctx, arguments);
    }),
    "class": "impersonate cursor-pointer text-70 hover:text-primary no-underline inline-flex items-center",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($props.field.hideText ? 'width:22px' : ''),
    title: _ctx.__('Impersonate')
  }, [_hoisted_2, !$props.field.hideText ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Impersonate')), 1
  /* TEXT */
  )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("portal", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    name: "fade"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_ctx.openModal ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_impersonate_modal, {
        key: 0,
        onConfirm: _ctx.openUrl,
        onClose: _cache[1] || (_cache[1] = function ($event) {
          return _ctx.openModal = false;
        }),
        mode: "delete"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_heading, {
            level: 2,
            "class": "mb-6"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Impersonate (" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.field.impersonate_target_name) + ")", 1
              /* TEXT */
              )];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return _ctx.guard = $event;
            }),
            "class": "w-full form-control form-select"
          }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Choose a guard')), 1
          /* TEXT */
          ), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(_this.guards, function (g, index) {
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
              key: index
            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(g), 1
            /* TEXT */
            );
          }), 128
          /* KEYED_FRAGMENT */
          ))], 512
          /* NEED_PATCH */
          ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, _ctx.guard]])])])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["onConfirm"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)];
    }),
    _: 1
    /* STABLE */

  })])], 12
  /* STYLE, PROPS */
  , _hoisted_1);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Shared/ImpersonateModal.vue?vue&type=template&id=39a5c0a3":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Shared/ImpersonateModal.vue?vue&type=template&id=39a5c0a3 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "bg-30 px-6 py-3 flex"
};
var _hoisted_2 = {
  "class": "ml-auto"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("modal");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_modal, {
    onModalClose: $options.handleClose
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.handleConfirm && $options.handleConfirm.apply($options, arguments);
        }, ["prevent"])),
        "slot-scope": "props",
        "class": "bg-white rounded-lg shadow-lg overflow-hidden",
        style: {
          "width": "460px"
        }
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "data-testid": "cancel-button",
        onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $options.handleClose && $options.handleClose.apply($options, arguments);
        }, ["prevent"])),
        "class": "btn text-80 font-normal h-9 px-3 mr-3 btn-link"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Cancel')), 1
      /* TEXT */
      ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        ref: "confirmButton",
        id: "confirm-restore-button",
        "data-testid": "confirm-button",
        type: "submit",
        "class": "btn btn-default btn-primary"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.__('Impersonate')), 513
      /* TEXT, NEED_PATCH */
      )])])], 32
      /* HYDRATE_EVENTS */
      )];
    }),
    _: 3
    /* FORWARDED */

  }, 8
  /* PROPS */
  , ["onModalClose"]);
}

/***/ }),

/***/ "./resources/js/mixins/HandlesFieldValue.js":
/*!**************************************************!*\
  !*** ./resources/js/mixins/HandlesFieldValue.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      guard: this.field.default_impersonator_guard,
      guards: this.field.impersonator_guards,
      openModal: false
    };
  },
  created: function created() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  destroyed: function destroyed() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown: function handleKeyDown(e) {
      if (e.key === this.field.key_down) {
        this.onClick();
      }
    },
    onClick: function onClick() {
      if (this.field.enable_multi_guard === false) {
        this.openUrl();
      } else {
        this.openModal = true;
      }
    },
    openUrl: function openUrl() {
      this.openModal = false;
      window.open("/nova-impersonate/users/".concat(this.field.id, "/").concat(this.guard, "?redirect_to=").concat(this.field.redirect_to), "_self");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/Detail/ImpersonateField.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Detail/ImpersonateField.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImpersonateField_vue_vue_type_template_id_12ddf804__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImpersonateField.vue?vue&type=template&id=12ddf804 */ "./resources/js/components/Detail/ImpersonateField.vue?vue&type=template&id=12ddf804");
/* harmony import */ var _ImpersonateField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImpersonateField.vue?vue&type=script&lang=js */ "./resources/js/components/Detail/ImpersonateField.vue?vue&type=script&lang=js");
/* harmony import */ var D_Code_erp_nova_upgrade_erp_local_nova_impersonate_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_erp_nova_upgrade_erp_local_nova_impersonate_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ImpersonateField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImpersonateField_vue_vue_type_template_id_12ddf804__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Detail/ImpersonateField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Index/ImpersonateField.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Index/ImpersonateField.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImpersonateField_vue_vue_type_template_id_0fd62ae9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImpersonateField.vue?vue&type=template&id=0fd62ae9 */ "./resources/js/components/Index/ImpersonateField.vue?vue&type=template&id=0fd62ae9");
/* harmony import */ var _ImpersonateField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImpersonateField.vue?vue&type=script&lang=js */ "./resources/js/components/Index/ImpersonateField.vue?vue&type=script&lang=js");
/* harmony import */ var D_Code_erp_nova_upgrade_erp_local_nova_impersonate_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_erp_nova_upgrade_erp_local_nova_impersonate_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ImpersonateField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImpersonateField_vue_vue_type_template_id_0fd62ae9__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Index/ImpersonateField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Shared/ImpersonateModal.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Shared/ImpersonateModal.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ImpersonateModal_vue_vue_type_template_id_39a5c0a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImpersonateModal.vue?vue&type=template&id=39a5c0a3 */ "./resources/js/components/Shared/ImpersonateModal.vue?vue&type=template&id=39a5c0a3");
/* harmony import */ var _ImpersonateModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImpersonateModal.vue?vue&type=script&lang=js */ "./resources/js/components/Shared/ImpersonateModal.vue?vue&type=script&lang=js");
/* harmony import */ var D_Code_erp_nova_upgrade_erp_local_nova_impersonate_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_erp_nova_upgrade_erp_local_nova_impersonate_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ImpersonateModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ImpersonateModal_vue_vue_type_template_id_39a5c0a3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Shared/ImpersonateModal.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Detail/ImpersonateField.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Detail/ImpersonateField.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImpersonateField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Detail/ImpersonateField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Index/ImpersonateField.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Index/ImpersonateField.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImpersonateField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Index/ImpersonateField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Shared/ImpersonateModal.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Shared/ImpersonateModal.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateModal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImpersonateModal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Shared/ImpersonateModal.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Detail/ImpersonateField.vue?vue&type=template&id=12ddf804":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Detail/ImpersonateField.vue?vue&type=template&id=12ddf804 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateField_vue_vue_type_template_id_12ddf804__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateField_vue_vue_type_template_id_12ddf804__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImpersonateField.vue?vue&type=template&id=12ddf804 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Detail/ImpersonateField.vue?vue&type=template&id=12ddf804");


/***/ }),

/***/ "./resources/js/components/Index/ImpersonateField.vue?vue&type=template&id=0fd62ae9":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Index/ImpersonateField.vue?vue&type=template&id=0fd62ae9 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateField_vue_vue_type_template_id_0fd62ae9__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateField_vue_vue_type_template_id_0fd62ae9__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImpersonateField.vue?vue&type=template&id=0fd62ae9 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Index/ImpersonateField.vue?vue&type=template&id=0fd62ae9");


/***/ }),

/***/ "./resources/js/components/Shared/ImpersonateModal.vue?vue&type=template&id=39a5c0a3":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Shared/ImpersonateModal.vue?vue&type=template&id=39a5c0a3 ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateModal_vue_vue_type_template_id_39a5c0a3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ImpersonateModal_vue_vue_type_template_id_39a5c0a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ImpersonateModal.vue?vue&type=template&id=39a5c0a3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Shared/ImpersonateModal.vue?vue&type=template&id=39a5c0a3");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = Vue;

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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./resources/js/field.js ***!
  \*******************************/
Nova.booting(function (Vue, router) {
  //Vue.config.devtools = true;
  Vue.component("IndexImpersonateField", (__webpack_require__(/*! ./components/Index/ImpersonateField */ "./resources/js/components/Index/ImpersonateField.vue")["default"]));
  Vue.component("DetailImpersonateField", (__webpack_require__(/*! ./components/Detail/ImpersonateField */ "./resources/js/components/Detail/ImpersonateField.vue")["default"]));
});
})();

/******/ })()
;