(this["webpackJsonpjs-calculator"]=this["webpackJsonpjs-calculator"]||[]).push([[0],{10:function(e,_,a){"use strict";a.d(_,"a",(function(){return u}));var t=a(0),s=a(3),r=a(4),l=a(6),n=a(5),i=a(2),u=function(e){Object(l.a)(a,e);var _=Object(n.a)(a);function a(e){var t;return Object(s.a)(this,a),(t=_.call(this,e)).state={},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(t.jsxs)("div",{id:"buttons",children:[Object(t.jsx)("button",{class:"number",value:"=",onClick:this.props.finish,id:"equals",children:"="}),Object(t.jsxs)("div",{id:"numbers",children:[Object(t.jsx)("button",{class:"number",value:"1",onClick:this.props.numbers,id:"one",children:"1"}),Object(t.jsx)("button",{class:"number",value:"2",onClick:this.props.numbers,id:"two",children:"2"}),Object(t.jsx)("button",{class:"number",value:"3",onClick:this.props.numbers,id:"three",children:"3"}),Object(t.jsx)("button",{class:"number",value:"4",onClick:this.props.numbers,id:"four",children:"4"}),Object(t.jsx)("button",{class:"number",value:"5",onClick:this.props.numbers,id:"five",children:"5"}),Object(t.jsx)("button",{class:"number",value:"6",onClick:this.props.numbers,id:"six",children:"6"}),Object(t.jsx)("button",{class:"number",value:"7",onClick:this.props.numbers,id:"seven",children:"7"}),Object(t.jsx)("button",{class:"number",value:"8",onClick:this.props.numbers,id:"eight",children:"8"}),Object(t.jsx)("button",{class:"number",value:"9",onClick:this.props.numbers,id:"nine",children:"9"}),Object(t.jsx)("button",{class:"number",value:"0",onClick:this.props.numbers,id:"zero",children:"0"}),Object(t.jsx)("button",{class:"number",id:"decimal",value:".",onClick:this.props.decimals,children:"."})]}),Object(t.jsx)("button",{id:"add",value:"+",onClick:this.props.operators,children:"+"}),Object(t.jsx)("button",{id:"subtract",value:"-",onClick:this.props.operators,children:"-"}),Object(t.jsx)("button",{id:"multiply",value:"x",onClick:this.props.operators,children:"*"}),Object(t.jsx)("button",{id:"divide",value:"/",onClick:this.props.operators,children:"/"}),Object(t.jsx)("button",{id:"clear",onClick:this.props.clear,children:"AC"})]})}}]),a}(a.n(i).a.Component)},16:function(e,_,a){},17:function(e,_,a){},18:function(e,_,a){"use strict";a.r(_);var t=a(0),s=a(2),r=a.n(s),l=a(8),n=a.n(l),i=(a(16),a(9)),u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(_){var a=_.getCLS,t=_.getFID,s=_.getFCP,r=_.getLCP,l=_.getTTFB;a(e),t(e),s(e),r(e),l(e)}))};n.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(i.a,{})}),document.getElementById("root")),u()},9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return App}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(17),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_Components_numbers__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(10),myRegex=/^[x+/-]/,myRegexOp=/[x+/-]\s$/,numArray=[],App=function(_React$Component){Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_React$Component);var _super=Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(App);function App(e){var _;return Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,App),(_=_super.call(this,e)).state={formula:"A JavaScript Calculator",display:""},_.handleNumbers=_.handleNumbers.bind(Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_.handleClear=_.handleClear.bind(Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_.handleOperator=_.handleOperator.bind(Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_.clearFormula=_.clearFormula.bind(Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_.handleDecimals=_.handleDecimals.bind(Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_.finishHim=_.finishHim.bind(Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_)),_}return Object(C_Users_ozanb_OneDrive_Masa_st_My_Career_REACT_PROJECTS_js_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(App,[{key:"clearFormula",value:function(){this.setState({formula:""})}},{key:"handleNumbers",value:function(e){if(this.state.display.length>22);else if(1==numArray.length)this.setState({formula:e.target.value,display:e.target.value}),numArray=[];else{var _=e.target.value;myRegex.test(this.state.display)?this.setState({display:_,formula:this.state.formula.concat(_)}):this.setState({display:this.state.display.concat(_).replace(/^0{2}/g,"0").replace(/^0[1-9]/,_),formula:this.state.formula.concat(_).replace(/[a-wyz]*/gi,"").replace(/^0{2}/,"0").replace(/^0[1-9]/,_).replace(/\s0{2}/," 0").replace(/\s0[1-9]/g," "+_).replace(/[.]0+\s/g," ")})}}},{key:"handleOperator",value:function(e){if("A JavaScript Calculator"===this.state.formula)console.log("Nap\u0131yon mq");else{this.state.display.length>0&&"+"!==this.state.display&"-"!==this.state.display&"x"!==this.state.display&"/"!==this.state.display&&(numArray.push(this.state.display),numArray.push(e.target.value)),"+"==e.target.value&"x"==numArray[numArray.length-2]|"/"==e.target.value&"x"==numArray[numArray.length-2]|"x"==e.target.value&"x"==numArray[numArray.length-2]|"-"==numArray[numArray.length-1]&"x"==numArray[numArray.length-2]&&numArray.splice(numArray.length-2,1),"x"==this.state.display&"-"==e.target.value&"-"!==numArray[numArray.length-1]&"x"!==numArray[numArray.length-2]&&numArray.push(e.target.value),"+"==this.state.display|"-"==this.state.display|"x"==this.state.display|"/"==this.state.display&1!==numArray.length?numArray.splice(numArray.length-1,1,e.target.value):1==numArray.length&&numArray.push(e.target.value);var _=e.target.value;this.setState({display:_}),myRegexOp.test(this.state.formula)?/[x]\s$/.test(this.state.formula)&"-"==_?this.setState({formula:this.state.formula.concat("- ")}):this.setState({formula:this.state.formula.replace(/x\s-\s$/,_+" ").replace(/[x+-/]\s$/,_+" ").replace(/[.]0+\s/g," ")}):this.setState({formula:this.state.formula.concat(" "+_+" ").replace(/[.]0+\s/g," ")}),console.log(numArray)}}},{key:"handleDecimals",value:function(){1==numArray.length?this.state.formula.includes(".")||(this.setState({formula:this.state.formula.concat("."),display:this.state.formula.concat(".")}),numArray=[]):this.state.display.includes(".")||(this.setState({display:this.state.display.concat(".").replace(/^[.]/,"0."),formula:this.state.formula.concat(".").replace(/[a-wyz]*/gi,"").replace(/\s[.]/," 0.").replace(/^[.]/,"0.")}),myRegex.test(this.state.display)&&this.setState({display:"0."}))}},{key:"handleClear",value:function(){this.setState({display:"0",formula:""}),numArray=[]}},{key:"finishHim",value:function finishHim(){if(0==this.state.display.length)this.setState({formula:this.state.formula});else{myRegex.test(this.state.display)||numArray.push(this.state.display),"-"==numArray[numArray.length-1]&"x"==numArray[numArray.length-2]&&(numArray.splice(numArray.length-2,2),console.log("Nice Try"));var result=eval(numArray.join("").replace(/[x+/-]$/,"").replace(/x/g,"*"));this.setState({formula:String(result),display:""}),numArray.splice(0,numArray.length,String(result))}}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{id:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{id:"formula",children:this.state.formula}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{id:"display",children:this.state.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_numbers__WEBPACK_IMPORTED_MODULE_8__.a,{numbers:this.handleNumbers,operators:this.handleOperator,clear:this.handleClear,decimals:this.handleDecimals,finish:this.finishHim}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("footer",{children:"Coded by Ozan"})]})})}}]),App}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component)}},[[18,1,2]]]);
//# sourceMappingURL=main.e8399824.chunk.js.map