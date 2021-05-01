/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "events-01-starting-setup/assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./events-01-starting-setup/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./events-01-starting-setup/src/App/Component.js":
/*!*******************************************************!*\
  !*** ./events-01-starting-setup/src/App/Component.js ***!
  \*******************************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* eslint-disable multiline-ternary */\r\n/* eslint-disable no-ternary */\r\n// dependencies on Tooltip.js\r\n\r\nclass Component {\r\n    constructor(hostElementId, insertBefore = false) {\r\n      if (hostElementId) {\r\n        this.hostElement = document.getElementById(hostElementId);\r\n      } else {\r\n        this.hostElement = document.body;\r\n      }\r\n      this.insertBefore = insertBefore;\r\n    }\r\n\r\n    detach() {\r\n      if (this.element) {\r\n        this.element.remove();\r\n        // this.element.parentElement.removeChild(this.element);\r\n      }\r\n    }\r\n\r\n    attach() {\r\n      this.hostElement.insertAdjacentElement(\r\n        this.insertBefore ? 'afterbegin' : 'beforeend',\r\n        this.element\r\n      );\r\n    }\r\n  }\r\n\n\n//# sourceURL=webpack:///./events-01-starting-setup/src/App/Component.js?");

/***/ }),

/***/ "./events-01-starting-setup/src/App/ProjectItem.js":
/*!*********************************************************!*\
  !*** ./events-01-starting-setup/src/App/ProjectItem.js ***!
  \*********************************************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./events-01-starting-setup/src/Utility/DOMHelper.js\");\n/* harmony import */ var _Tooltip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip.js */ \"./events-01-starting-setup/src/App/Tooltip.js\");\n// dependencies on ProjectList\r\n\r\n// importing required files\r\n\r\n\r\n\r\n\r\nclass ProjectItem {\r\n    // hasActiveTooltip = false;\r\n  \r\n    constructor(id, updateProjectListsFunction, type) {\r\n      this.id = id;\r\n      this.hasActiveTooltip = false;\r\n      this.updateProjectListsHandler = updateProjectListsFunction;\r\n      this.connectMoreInfoButton();\r\n      this.connectSwitchButton(type);\r\n      this.connectDrag();\r\n    }\r\n  \r\n    showMoreInfoHandler() {\r\n      if (this.hasActiveTooltip) {\r\n        return;\r\n      }\r\n      const projectElement = document.getElementById(this.id);\r\n      const tooltipText = projectElement.dataset.extraInfo;\r\n      const tooltip = new _Tooltip_js__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"](\r\n        () => {\r\n          this.hasActiveTooltip = false;\r\n        },\r\n        tooltipText,\r\n        this.id\r\n      );\r\n      tooltip.attach();\r\n      this.hasActiveTooltip = true;\r\n    }\r\n  \r\n    connectDrag(){\r\n      document.getElementById(this.id).addEventListener('dragstart',function(event){\r\n         event.dataTransfer.setData('text/plain', this.id);\r\n         event.dataTransfer.effectAllowed = 'move';\r\n      });\r\n    }\r\n  \r\n    connectMoreInfoButton() {\r\n      const projectItemElement = document.getElementById(this.id);\r\n      const moreInfoBtn = projectItemElement.querySelector(\r\n        'button:first-of-type'\r\n      );\r\n      moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\r\n    }\r\n  \r\n    connectSwitchButton(type) {\r\n      const projectItemElement = document.getElementById(this.id);\r\n      let switchBtn = projectItemElement.querySelector('button:last-of-type');\r\n      switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\r\n      switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\r\n      switchBtn.addEventListener(\r\n        'click',\r\n        this.updateProjectListsHandler.bind(null, this.id)\r\n      );\r\n    }\r\n  \r\n    update(updateProjectListsFn, type) {\r\n      this.updateProjectListsHandler = updateProjectListsFn;\r\n      this.connectSwitchButton(type);\r\n    }\r\n}\r\n  \n\n//# sourceURL=webpack:///./events-01-starting-setup/src/App/ProjectItem.js?");

/***/ }),

/***/ "./events-01-starting-setup/src/App/ProjectList.js":
/*!*********************************************************!*\
  !*** ./events-01-starting-setup/src/App/ProjectList.js ***!
  \*********************************************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem.js */ \"./events-01-starting-setup/src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./events-01-starting-setup/src/Utility/DOMHelper.js\");\n// dependencies on app.js\r\n\r\n// importing dependencies required\r\n\r\n  // import {DOMHelper} from '../Utility/DOMHelper.js';\r\n  // import {moveElement} from '../Utility/DOMHelper.js'; // we can just import a function from another file, but we need to be specific\r\n // bundling the file and store it as 'DOMH' object, the name can be anything\r\n\r\n\r\nclass ProjectList {\r\n    // projects = [];\r\n  \r\n    constructor(type) {\r\n      this.type = type;\r\n      this.projects = [];\r\n      const prjItems = document.querySelectorAll(`#${type}-projects li`);\r\n      for (const prjItem of prjItems) {\r\n        this.projects.push(\r\n          new _ProjectItem_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](prjItem.id, this.switchProject.bind(this), this.type)\r\n        );\r\n      }\r\n      console.log(this.projects);\r\n      this.connectDroppable();\r\n    }\r\n  \r\n    connectDroppable(){\r\n      const list = document.querySelector(`#${this.type}-projects ul`);\r\n      list.addEventListener('dragenter', function(event){\r\n        if(event.dataTransfer.types[0] === 'text/plain'){ // we can only check the type of the data not the value\r\n          event.preventDefault();\r\n  \r\n        }\r\n        list.parentElement.classList.add('droppable');\r\n      });\r\n      \r\n      list.addEventListener('dragover', function(event){\r\n        event.preventDefault();\r\n      });    \r\n  \r\n      list.addEventListener('dragleave',event => {\r\n        if(event.relatedTarget.closest(`#${this.type}-projects ul`) !== list){\r\n          list.parentElement.classList.remove('droppable');\r\n        }\r\n      });\r\n  \r\n      list.addEventListener('drop', event => {\r\n        const projId = event.dataTransfer.getData('text/plain');\r\n        \r\n        // if(this.projects.find(function(p){\r\n        //   return p.id === projId;\r\n        // })){\r\n  \r\n        // }\r\n  \r\n        if(this.projects.find(p=>p.id===projId)){\r\n          return;\r\n        }\r\n        document.getElementById(projId).querySelector('button:last-of-type').click();\r\n        list.parentElement.classList.remove('droppable');\r\n      })\r\n    }\r\n  \r\n    setSwitchHandlerFunction(switchHandlerFunction) {\r\n      this.switchHandler = switchHandlerFunction;\r\n    }\r\n  \r\n    addProject(project) {\r\n      this.projects.push(project);\r\n      // DOMH.moveElement(project.id, `#${this.type}-projects ul`);\r\n      _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_1__[\"DOMHelper\"].moveElement(project.id, `#${this.type}-projects ul`);\r\n      project.update(this.switchProject.bind(this), this.type);\r\n    }\r\n  \r\n    switchProject(projectId) {\r\n      // const projectIndex = this.projects.findIndex(p => p.id === projectId);\r\n      // this.projects.splice(projectIndex, 1);\r\n      this.switchHandler(this.projects.find(p => p.id === projectId));\r\n      this.projects = this.projects.filter(p => p.id !== projectId);\r\n    }\r\n}\r\n  \n\n//# sourceURL=webpack:///./events-01-starting-setup/src/App/ProjectList.js?");

/***/ }),

/***/ "./events-01-starting-setup/src/App/Tooltip.js":
/*!*****************************************************!*\
  !*** ./events-01-starting-setup/src/App/Tooltip.js ***!
  \*****************************************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./events-01-starting-setup/src/App/Component.js\");\n// dependency on ProjectItem\r\n\r\n// importing required dependencies\r\n\r\n\r\n\r\nclass Tooltip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\r\n    constructor(closeNotifierFunction, text, hostElementId) {\r\n      super(hostElementId);\r\n      this.closeNotifier = closeNotifierFunction;\r\n      this.text = text;\r\n      this.create();\r\n      this.closeTooltip = () => {\r\n        this.detach();\r\n        this.closeNotifier();\r\n      };\r\n    }\r\n  \r\n    \r\n  \r\n    create() {\r\n      const tooltipElement = document.createElement('div');\r\n      tooltipElement.className = 'card';\r\n      const tooltipTemplate = document.getElementById('tooltip');\r\n      const tooltipBody = document.importNode(tooltipTemplate.content, true);\r\n      tooltipBody.querySelector('p').textContent = this.text;\r\n      tooltipElement.append(tooltipBody);\r\n  \r\n      const hostElPosLeft = this.hostElement.offsetLeft;\r\n      const hostElPosTop = this.hostElement.offsetTop;\r\n      const hostElHeight = this.hostElement.clientHeight;\r\n      const parentElementScrolling = this.hostElement.parentElement.scrollTop;\r\n  \r\n      const x = hostElPosLeft + 20;\r\n      const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\r\n  \r\n      tooltipElement.style.position = 'absolute';\r\n      tooltipElement.style.left = x + 'px'; // 500px\r\n      tooltipElement.style.top = y + 'px';\r\n  \r\n      tooltipElement.addEventListener('click', this.closeTooltip);\r\n      this.element = tooltipElement;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./events-01-starting-setup/src/App/Tooltip.js?");

/***/ }),

/***/ "./events-01-starting-setup/src/Utility/DOMHelper.js":
/*!***********************************************************!*\
  !*** ./events-01-starting-setup/src/Utility/DOMHelper.js ***!
  \***********************************************************/
/*! exports provided: DOMHelper, clearEventListeners, moveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearEventListeners\", function() { return clearEventListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveElement\", function() { return moveElement; });\n// dependencies on ProjectItem and ProjectList\r\n\r\nclass DOMHelper {\r\n    static clearEventListeners(element) {\r\n      const clonedElement = element.cloneNode(true);\r\n      element.replaceWith(clonedElement);\r\n      return clonedElement;\r\n    }\r\n  \r\n    static moveElement(elementId, newDestinationSelector) {\r\n      const element = document.getElementById(elementId);\r\n      const destinationElement = document.querySelector(newDestinationSelector);\r\n      destinationElement.append(element);\r\n      element.scrollIntoView({ behavior: 'smooth' });\r\n    }\r\n}\r\n\r\n\r\nfunction clearEventListeners(element) {\r\n  const clonedElement = element.cloneNode(true);\r\n  element.replaceWith(clonedElement);\r\n  return clonedElement;\r\n}\r\n\r\nfunction moveElement(elementId, newDestinationSelector) {\r\n  const element = document.getElementById(elementId);\r\n  const destinationElement = document.querySelector(newDestinationSelector);\r\n  destinationElement.append(element);\r\n  element.scrollIntoView({ behavior: 'smooth' });\r\n}\n\n//# sourceURL=webpack:///./events-01-starting-setup/src/Utility/DOMHelper.js?");

/***/ }),

/***/ "./events-01-starting-setup/src/app.js":
/*!*********************************************!*\
  !*** ./events-01-starting-setup/src/app.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./events-01-starting-setup/src/App/ProjectList.js\");\n// hey, this is the exact same project i did on module 14\r\n// in this module i will be focusing on implementing code splitting\r\n\r\n// importing dependencies required in this file\r\n\r\n\r\nclass App {\r\n  static init() {\r\n    const activeProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('active');\r\n    const finishedProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"]('finished');\r\n    activeProjectsList.setSwitchHandlerFunction(\r\n      finishedProjectsList.addProject.bind(finishedProjectsList)\r\n    );\r\n    finishedProjectsList.setSwitchHandlerFunction(\r\n      activeProjectsList.addProject.bind(activeProjectsList)\r\n    );\r\n\r\n    // const timerId = setTimeout(this.startAnalytics, 3000);\r\n\r\n    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {\r\n    //   clearTimeout(timerId);\r\n    // });\r\n  }\r\n\r\n  static startAnalytics() {\r\n    const analyticsScript = document.createElement('script');\r\n    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';\r\n    analyticsScript.defer = true;\r\n    document.head.append(analyticsScript);\r\n  }\r\n}\r\n\r\nApp.init();\r\n\n\n//# sourceURL=webpack:///./events-01-starting-setup/src/app.js?");

/***/ })

/******/ });