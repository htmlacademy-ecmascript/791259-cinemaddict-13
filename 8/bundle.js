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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _mock_film_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/film.js */ "./src/mock/film.js");
/* harmony import */ var _presenter_site_presenter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./presenter/site-presenter.js */ "./src/presenter/site-presenter.js");




const POSTS_COUNT = 20;

const films = new Array(POSTS_COUNT).fill().map(() => Object(_mock_film_js__WEBPACK_IMPORTED_MODULE_1__["generateFilm"])());
const filters = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_0__["generateFilter"])(films);
const body = document.querySelector(`body`);

const sitePresenter = new _presenter_site_presenter_js__WEBPACK_IMPORTED_MODULE_2__["SitePresenter"](body, filters);
sitePresenter.init(films);


/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/*! exports provided: generateComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComment", function() { return generateComment; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);



const generateComment = (index) => {

  return {
    id: index,
    text: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateDescription"])(),
    emotion: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])([`smile`, `sleeping`, `puke`, `angry`]),
    author: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])([`Tim Macoveev`, `John Doe`, `Andre Right`, `Greg Malkovich`]),
    date: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomDate"])(new Date(2012, 0, 1), new Date())).format(`YYYY/MM/DD h:mm`),
  };
};


/***/ }),

/***/ "./src/mock/film.js":
/*!**************************!*\
  !*** ./src/mock/film.js ***!
  \**************************/
/*! exports provided: generateFilm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilm", function() { return generateFilm; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");


const generateId = () => Date.now() + parseInt(Math.random() * 10000, 10);

const titles = [`The Dance of Life`, `Sagebrush Trail`, `The Man with the Golden Arm`, `Santa Claus Conquers the Martians`, `Popeye the Sailor Meets Sindbad the Sailor`, `The Great Flamarion`];

const posterTitles = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
const genres = [`Musical`, `Western`, `Drama`, `Comedy`, `Cartoon`, `Mystery`];

const generateCommentsIds = () => {
  const commentsIds = [];
  const NUM_OF_COMMENTS = 5;
  for (let i = 0; i < NUM_OF_COMMENTS; i++) {
    commentsIds.push(i);
  }
  commentsIds.splice(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, NUM_OF_COMMENTS), Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, NUM_OF_COMMENTS));
  return commentsIds;
};

const generateFilm = () => {

  return {
    id: generateId(),
    poster: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])(posterTitles),
    title: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])(titles),
    originalTitle: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])(titles),
    rating: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])([8.3, 3.2, 9.0, 2.3, 6.3, 8.9]),
    director: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])([`Anthony Mann`, `Tim Burton`, `Stanley Kubrick`]),
    writers: [`Anne Wigton, Heinz Herald`, `Richard Weil`].join(`, `),
    actors: [`Erich von Stroheim`, `Mary Beth Hughes`, `Dan Duryea`].join(`, `),
    country: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])([`USA`, `France`, `Germany`, `India`]),
    productionDate: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])([`21 April 1929`, `2 September 1933`, `30 December 1955`, ` 23 June 1964`, ` 4 July 1936`, `29 January 1945`]),
    duration: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])([`1h 55m`, `54m`, `1h 59m`, `1h 21m`, `16m`, `1h 59m`, `1h 18m`]),
    genres: genres.slice(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, genres.length - 1)),
    description: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateDescription"])(),
    ageRestriction: Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["generateRandomItem"])([`18+`, `21+`, `10+`, `0+`]),
    comments: generateCommentsIds(),
    isAddedtoWatchList: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, 1)),
    isWatched: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, 1)),
    isFavorite: Boolean(Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["getRandomIntInclusive"])(0, 1)),
  };
};


/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
const filmToFilterMap = {
  [`all movies`]: (films) => films.length,
  watchlist: (films) => films.filter((item) => item.isAddedtoWatchList).length,
  history: (films) => films.filter((item) => item.isWatched).length,
  favorites: (films) => films.filter((item) => item.isFavotire).length,
};

const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countFilms]) => {
    return {
      name: filterName[0].toUpperCase() + filterName.slice(1),
      count: countFilms(films),
    };
  });
};


/***/ }),

/***/ "./src/presenter/film-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/film-presenter.js ***!
  \*****************************************/
/*! exports provided: FilmPresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmPresenter", function() { return FilmPresenter; });
/* harmony import */ var _view_film_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/film.js */ "./src/view/film.js");
/* harmony import */ var _view_film_details_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/film-details.js */ "./src/view/film-details.js");
/* harmony import */ var _view_new_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/new-comment.js */ "./src/view/new-comment.js");
/* harmony import */ var _view_film_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/film-comments.js */ "./src/view/film-comments.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _mock_comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock/comment.js */ "./src/mock/comment.js");







const comments = new Array(5).fill().map((item, index) => Object(_mock_comment_js__WEBPACK_IMPORTED_MODULE_5__["generateComment"])(index));

const Mode = {
  DEFAULT: `DEFAULT`,
  VIEWING: `VIEWING`,
};

class FilmPresenter {
  constructor(bodyContainer, filmListContainer, changeData, changeMode) {
    this._bodyContainer = bodyContainer;
    this._filmListContainer = filmListContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._filmComponent = null;
    this._filmDetailsComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleShowFilmDetails = this._handleShowFilmDetails.bind(this);
    this._handleReturnToFilm = this._handleReturnToFilm.bind(this);
    this._handleEscKeyDown = this._handleEscKeyDown.bind(this);
    this._handleClickOnFilm = this._handleClickOnFilm.bind(this);
    this._handleClickOnX = this._handleClickOnX.bind(this);
    this._handleWatchListClick = this._handleWatchListClick.bind(this);
    this._handleIsWatchedClick = this._handleIsWatchedClick.bind(this);
    this._handleIsFavoriteClick = this._handleIsFavoriteClick.bind(this);
  }

  init(film) {
    this._film = film;

    const prevFilmComponent = this._filmComponent;

    this._filmComponent = new _view_film_js__WEBPACK_IMPORTED_MODULE_0__["FilmView"](film);
    this._filmComponent.setClickHandler(this._handleClickOnFilm);

    this._filmComponent.setWatchListClickHandler(this._handleWatchListClick);
    this._filmComponent.setIsWatchedClickHandler(this._handleIsWatchedClick);
    this._filmComponent.setIsFavoriteClickHandler(this._handleIsFavoriteClick);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmListContainer, this._filmComponent);

    if (prevFilmComponent === null) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmListContainer, this._filmComponent);
      return;
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["replace"])(this._filmComponent, prevFilmComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(prevFilmComponent);
  }

  destroy() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._filmComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._filmDetailsComponent);
  }

  _handleClickOnFilm(event) {
    const filmClickableItems = [`film-card__poster`, `film-card__title`, `film-card__comments`];
    for (let item of filmClickableItems) {
      if (event.target.classList.contains(item)) {
        this._handleShowFilmDetails();
        document.addEventListener(`keydown`, this._handleEscKeyDown);
      }
    }
  }

  _handleClickOnX(event) {
    if (event.target.classList.contains(`film-details__close-btn`)) {
      this._handleReturnToFilm();
    }
  }

  _handleWatchListClick(event) {
    if (event.target.classList.contains(`film-card__controls-item--add-to-watchlist`) || event.target.classList.contains(`film-details__control-label--watchlist`)) {
      this._changeData(
          Object.assign({},
              this._film, {
                isAddedtoWatchList: !this._film.isAddedtoWatchList
              }
          )
      );
    }
  }

  _handleIsWatchedClick() {
    if (event.target.classList.contains(`film-card__controls-item--mark-as-watched`) || event.target.classList.contains(`film-details__control-label--watched`)) {
      this._changeData(
          Object.assign({},
              this._film, {
                isWatched: !this._film.isWatched
              }
          )
      );
    }
  }

  _handleIsFavoriteClick() {
    if (event.target.classList.contains(`film-card__controls-item--favorite`) || event.target.classList.contains(`film-details__control-label--favorite`)) {
      this._changeData(
          Object.assign({},
              this._film, {
                isFavorite: !this._film.isFavorite
              }
          )
      );
    }
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._handleReturnToFilm();
    }
  }

  _handleShowFilmDetails() {
    this._bodyContainer.classList.add(`hide-overflow`);
    this._filmDetailsComponent = new _view_film_details_js__WEBPACK_IMPORTED_MODULE_1__["FilmDetailsView"](this._film);
    this._newCommentComponent = new _view_new_comment_js__WEBPACK_IMPORTED_MODULE_2__["NewCommentView"]();

    this._filmDetailsComponent.setWatchListClickHandler(this._handleWatchListClick);
    this._filmDetailsComponent.setIsWatchedClickHandler(this._handleIsWatchedClick);
    this._filmDetailsComponent.setIsFavoriteClickHandler(this._handleIsFavoriteClick);
    this._filmDetailsComponent.setClickHandler(this._handleClickOnX);

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._bodyContainer, this._filmDetailsComponent);

    this._changeMode();
    this._mode = Mode.VIEWING;
    let comList = [];
    for (let commentId of this._filmDetailsComponent._film.comments) {
      let comment = comments.find((item) => item.id === commentId);
      if (!comment) {
        continue;
      }
      comList.push(comment);
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmDetailsComponent.getElement().querySelector(`.film-details__bottom-container`), new _view_film_comments_js__WEBPACK_IMPORTED_MODULE_3__["FilmCommentsView"](comList));

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["render"])(this._filmDetailsComponent.getElement().querySelector(`.film-details__comments-wrap`), new _view_new_comment_js__WEBPACK_IMPORTED_MODULE_2__["NewCommentView"]());
  }

  _handleReturnToFilm() {
    this._bodyContainer.classList.remove(`hide-overflow`);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_4__["remove"])(this._filmDetailsComponent);
    this._mode = Mode.DEFAULT;
  }

  _handleEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._handleReturnToFilm();
      document.removeEventListener(`keydown`, this._handleEscKeyDown);
    }
  }
}


/***/ }),

/***/ "./src/presenter/site-presenter.js":
/*!*****************************************!*\
  !*** ./src/presenter/site-presenter.js ***!
  \*****************************************/
/*! exports provided: SitePresenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitePresenter", function() { return SitePresenter; });
/* harmony import */ var _view_main_section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/main-section.js */ "./src/view/main-section.js");
/* harmony import */ var _view_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/header.js */ "./src/view/header.js");
/* harmony import */ var _view_footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/footer.js */ "./src/view/footer.js");
/* harmony import */ var _view_user_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/user.js */ "./src/view/user.js");
/* harmony import */ var _view_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/filter.js */ "./src/view/filter.js");
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_films_container_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view/films-container.js */ "./src/view/films-container.js");
/* harmony import */ var _film_presenter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./film-presenter.js */ "./src/presenter/film-presenter.js");
/* harmony import */ var _view_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view/button.js */ "./src/view/button.js");
/* harmony import */ var _view_footer_stats_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view/footer-stats.js */ "./src/view/footer-stats.js");
/* harmony import */ var _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../view/films-list-container.js */ "./src/view/films-list-container.js");
/* harmony import */ var _view_no_films_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../view/no-films.js */ "./src/view/no-films.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");


















const POST_COUNT_PER_STEP = 5;

class SitePresenter {
  constructor(bodyContainer, filters) {
    this._bodyContainer = bodyContainer;
    this._renderedFilmsCount = POST_COUNT_PER_STEP;

    this._filters = filters.slice();
    this._filmPresenter = {};

    this._headerComponent = new _view_header_js__WEBPACK_IMPORTED_MODULE_1__["HeaderView"]();
    this._mainComponent = new _view_main_section_js__WEBPACK_IMPORTED_MODULE_0__["MainView"]();
    this._footerComponent = new _view_footer_js__WEBPACK_IMPORTED_MODULE_2__["FooterView"]();
    this._userComponent = new _view_user_js__WEBPACK_IMPORTED_MODULE_3__["UserView"]();
    this._sortComponent = new _view_sort_js__WEBPACK_IMPORTED_MODULE_5__["SortView"]();
    this._filterComponent = new _view_filter_js__WEBPACK_IMPORTED_MODULE_4__["FilterView"](this._filters);
    this._filmsContainerComponent = new _view_films_container_js__WEBPACK_IMPORTED_MODULE_6__["FilmsContainerView"]();
    this._noFilmsComponent = new _view_no_films_js__WEBPACK_IMPORTED_MODULE_11__["NoFilmsView"]();

    this._filmsListContainer = new _view_films_list_container_js__WEBPACK_IMPORTED_MODULE_10__["FilmListContainerView"]().getElement().querySelector(`.films-list__container`);
    this._loadMoreButtonComponent = new _view_button_js__WEBPACK_IMPORTED_MODULE_8__["LoadMoreButtonView"]();
    this._handleFilmChange = this._handleFilmChange.bind(this);
    this._handleModeChange = this._handleModeChange.bind(this);
    this._handleLoadMoreButtonClick = this._handleLoadMoreButtonClick.bind(this);
  }

  init(bodyFilms) {
    this._bodyFilms = bodyFilms.slice();

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._bodyContainer, this._headerComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._headerComponent, this._userComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._bodyContainer, this._mainComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._mainComponent, this._filterComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._mainComponent, this._sortComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._mainComponent, this._filmsContainerComponent);
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._bodyContainer, this._footerComponent);

    this._renderMain();
  }

  _handleModeChange() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.resetView());
  }

  _handleFilmChange(updatedTask) {
    this._bodyFilms = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_13__["updateItem"])(this._bodyFilms, updatedTask);
    this._filmPresenter[updatedTask.id].init(updatedTask);
  }

  _renderFilm(filmListContainer, bodyFilm) {
    const filmPresenter = new _film_presenter_js__WEBPACK_IMPORTED_MODULE_7__["FilmPresenter"](this._bodyContainer, filmListContainer, this._handleFilmChange, this._handleModeChange);
    filmPresenter.init(bodyFilm);
    this._filmPresenter[bodyFilm.id] = filmPresenter;
  }

  _clearFilmList() {
    Object
      .values(this._filmPresenter)
      .forEach((presenter) => presenter.destroy());
    this._filmPresenter = {};
    this._renderedFilmsCount = POST_COUNT_PER_STEP;
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["remove"])(this._loadMoreButtonComponent);
  }

  _renderFilms(from, to) {
    this._bodyFilms
     .slice(from, to)
     .forEach((film) => this._renderFilm(this._filmsListContainer, film));
  }

  _handleLoadMoreButtonClick() {
    this._renderFilms(this._renderedFilmsCount, this._renderedFilmsCount + POST_COUNT_PER_STEP);
    this._renderedFilmsCount += POST_COUNT_PER_STEP;

    if (this._renderedFilmsCount >= this._bodyFilms.length) {
      Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["remove"])(this._loadMoreButtonComponent);
    }
  }

  _renderLoadMoreButton() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._filmsListContainer, this._loadMoreButtonComponent, `afterend`);
    this._loadMoreButtonComponent.setClickHandler(this._handleLoadMoreButtonClick);
  }

  _renderNoFilms() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._filmsContainerComponent, this._noFilmsComponent);
  }

  _renderFooterStats() {
    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._footerComponent, new _view_footer_stats_js__WEBPACK_IMPORTED_MODULE_9__["FooterStatsView"](this._bodyFilms.length));
  }

  _renderMain() {
    this._renderFooterStats();
    if (this._bodyFilms.length <= 0) {
      this._renderNoFilms();
      return;
    }

    Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_12__["render"])(this._filmsContainerComponent, this._filmsListContainer);

    for (let i = 0; i < POST_COUNT_PER_STEP; i++) {
      this._renderFilm(this._filmsListContainer, this._bodyFilms[i]);
    }

    if (this._bodyFilms.length > POST_COUNT_PER_STEP) {
      this._renderLoadMoreButton();
    }
  }
}


/***/ }),

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/*! exports provided: getRandomIntInclusive, generateRandomItem, generateRandomDate, figureCorrectPluralForm, generateDescription, updateItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntInclusive", function() { return getRandomIntInclusive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomItem", function() { return generateRandomItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomDate", function() { return generateRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "figureCorrectPluralForm", function() { return figureCorrectPluralForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDescription", function() { return generateDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateItem", function() { return updateItem; });
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};

const generateRandomItem = (arr) => arr[getRandomIntInclusive(0, arr.length - 1)];

const generateRandomDate = (start, end) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

const figureCorrectPluralForm = (arr, str) => { // string in singular form required
  if (arr.length > 2) {
    str += `s`;
  }
  return str;
};

const generateDescription = () => {
  const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.slice(0, -1);
  const descriptions = description.split(`. `);
  const randomNumber = getRandomIntInclusive(1, descriptions.length - 1);
  const filmDescription = descriptions.slice(randomNumber, randomNumber + getRandomIntInclusive(1, 5));
  return filmDescription.join(`. `) + `.`;
};


const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/*! exports provided: createElement, render, replace, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/abstract.js */ "./src/view/abstract.js");


const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


const render = (element, child, place = `beforeend`) => {
  if (element instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"]) {
    element = element.getElement();
  }

  if (child instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"]) {
    child = child.getElement();
  }

  element.insertAdjacentElement(place, child);
};


const replace = (newChild, oldChild) => {
  if (oldChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"]) {
    oldChild = oldChild.getElement();
  }

  if (newChild instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"]) {
    newChild = newChild.getElement();
  }

  const parent = oldChild.parentElement;

  if (parent === null || oldChild === null || newChild === null) {
    throw new Error(`Can't replace unexisting elements`);
  }

  parent.replaceChild(newChild, oldChild);
};

const remove = (component) => {
  if (!(component instanceof _view_abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"])) {
    throw new Error(`Can remove only components`);
  }

  component.getElement().remove();
  component.removeElement();
};


/***/ }),

/***/ "./src/view/abstract.js":
/*!******************************!*\
  !*** ./src/view/abstract.js ***!
  \******************************/
/*! exports provided: AbstractView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractView", function() { return AbstractView; });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");



class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Cannot instantiate AbstactView, only concrete one.`);
    }
    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`AbstractView method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_render_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/button.js":
/*!****************************!*\
  !*** ./src/view/button.js ***!
  \****************************/
/*! exports provided: LoadMoreButtonView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMoreButtonView", function() { return LoadMoreButtonView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");

const createLoadMoreButtonTemplate = () => `<button class="films-list__show-more">Show more</button>`;

class LoadMoreButtonView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  constructor() {
    super();
    this._clickHandler = this._clickHandler.bind(this);
  }

  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  _clickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }
}


/***/ }),

/***/ "./src/view/film-comments.js":
/*!***********************************!*\
  !*** ./src/view/film-comments.js ***!
  \***********************************/
/*! exports provided: FilmCommentsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmCommentsView", function() { return FilmCommentsView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmCommentsSection = (comments) => {
  const createFilmComment = (comment) => {

    return `<li class="film-details__comment">
      <span class="film-details__comment-emoji">
        <img src="./images/emoji/${comment.emotion}.png" width="55" height="55" alt="emoji-${comment.emotion}">
      </span>
      <div>
        <p class="film-details__comment-text">${comment.text}</p>
        <p class="film-details__comment-info">
          <span class="film-details__comment-author">${comment.author}</span>
          <span class="film-details__comment-day">${comment.date}</span>
          <button class="film-details__comment-delete">Delete</button>
        </p>
      </div>
    </li>`;
  };

  const commentsList = comments.map((comment) => createFilmComment(comment)).join(``);
  return `<section class="film-details__comments-wrap">
    <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
    <ul class="film-details__comments-list">${commentsList}</ul>
  </section>`;
};

class FilmCommentsView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  constructor(comments) {
    super();
    this._comments = comments;
  }

  getTemplate() {
    return createFilmCommentsSection(this._comments);
  }
}


/***/ }),

/***/ "./src/view/film-details.js":
/*!**********************************!*\
  !*** ./src/view/film-details.js ***!
  \**********************************/
/*! exports provided: FilmDetailsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmDetailsView", function() { return FilmDetailsView; });
/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/common.js */ "./src/utils/common.js");
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createFilmDetailsTemplate = (film) => {
  const {title, originalTitle, country, rating, director, writers, actors, productionDate, duration, genres, poster, ageRestriction, description, isAddedtoWatchList, isWatched, isFavorite} = film;
  const genresForm = Object(_utils_common_js__WEBPACK_IMPORTED_MODULE_0__["figureCorrectPluralForm"])(genres, `Genre`);

  const createGenresTemplate = (genre) => `<span class="film-details__genre">${genre}</span>`;
  const genreList = genres.map((item) => createGenresTemplate(item)).join(``);

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

          <p class="film-details__age">${ageRestriction}</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original: ${originalTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">${director}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">${writers}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">${actors}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${productionDate}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${duration}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">${country}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${genresForm}</td>
              <td class="film-details__cell">${genreList}</td>
            </tr>
          </table>

          <p class="film-details__film-description">${description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isAddedtoWatchList ? `checked` : ``}>
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatched ? `checked` : ``}>
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavorite ? `checked` : ``}>
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container"></div>
  </form>
</section>`;
};

class FilmDetailsView extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["AbstractView"] {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._isWatchedClickHandler = this._isWatchedClickHandler.bind(this);
    this._isFavoriteClickHandler = this._isFavoriteClickHandler.bind(this);

  }

  getTemplate() {
    return createFilmDetailsTemplate(this._film);
  }

  _clickHandler(evt) {
    this._callback.click(evt);
  }

  _watchListClickHandler(evt) {
    this._callback.watchListClick(evt);
  }

  _isWatchedClickHandler(evt) {
    this._callback.isWatchedClick(evt);
  }

  _isFavoriteClickHandler(evt) {
    this._callback.isFavoriteClick(evt);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  setWatchListClickHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().addEventListener(`click`, this._watchListClickHandler);
  }

  setIsWatchedClickHandler(callback) {
    this._callback.isWatchedClick = callback;
    this.getElement().addEventListener(`click`, this._isWatchedClickHandler);
  }

  setIsFavoriteClickHandler(callback) {
    this._callback.isFavoriteClick = callback;
    this.getElement().addEventListener(`click`, this._isFavoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/film.js":
/*!**************************!*\
  !*** ./src/view/film.js ***!
  \**************************/
/*! exports provided: FilmView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmView", function() { return FilmView; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");



const createFilmTemplate = (film) => {
  const {title, rating, productionDate, duration, genres, poster, description, comments, isAddedtoWatchList, isWatched, isFavorite} = film;
  const productionYear = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(productionDate).format(`YYYY`);

  const genreList = genres.join(`, `);

  const favoriteClassName = isFavorite
    ? `film-card__controls-item--active`
    : ``;
  const addToWatchlistClassName = isAddedtoWatchList
    ? `film-card__controls-item--active`
    : ``;
  const markAswatchedClassName = isWatched
    ? `film-card__controls-item--active`
    : ``;

  let shortDescription = description;
  if (shortDescription.length > 140) {
    shortDescription = shortDescription.slice(0, 139) + `...`;
  }

  return `<article class="film-card">
          <h3 class="film-card__title">${title}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${productionYear}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genreList}</span>
          </p>
          <img src="./images/posters/${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${shortDescription}</p>
          <a class="film-card__comments">${comments.length} comments</a>
          <div class="film-card__controls">
            <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${addToWatchlistClassName}" type="button">Add to watchlist</button>
            <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${markAswatchedClassName}" type="button">Mark as watched</button>
            <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteClassName}" type="button">Mark as favorite</button>
          </div>
        </article>`;
};

class FilmView extends _abstract_js__WEBPACK_IMPORTED_MODULE_1__["AbstractView"] {
  constructor(film) {
    super();
    this._film = film;
    this._clickHandler = this._clickHandler.bind(this);
    this._watchListClickHandler = this._watchListClickHandler.bind(this);
    this._isWatchedClickHandler = this._isWatchedClickHandler.bind(this);
    this._isFavoriteClickHandler = this._isFavoriteClickHandler.bind(this);
  }

  getTemplate() {
    return createFilmTemplate(this._film);
  }

  _clickHandler(evt) {
    this._callback.click(evt);
  }

  _watchListClickHandler(evt) {
    this._callback.watchListClick(evt);
  }

  _isWatchedClickHandler(evt) {
    this._callback.isWatchedClick(evt);
  }

  _isFavoriteClickHandler(evt) {
    this._callback.isFavoriteClick(evt);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._clickHandler);
  }

  setWatchListClickHandler(callback) {
    this._callback.watchListClick = callback;
    this.getElement().addEventListener(`click`, this._watchListClickHandler);
  }

  setIsWatchedClickHandler(callback) {
    this._callback.isWatchedClick = callback;
    this.getElement().addEventListener(`click`, this._isWatchedClickHandler);
  }

  setIsFavoriteClickHandler(callback) {
    this._callback.isFavoriteClick = callback;
    this.getElement().addEventListener(`click`, this._isFavoriteClickHandler);
  }
}


/***/ }),

/***/ "./src/view/films-container.js":
/*!*************************************!*\
  !*** ./src/view/films-container.js ***!
  \*************************************/
/*! exports provided: FilmsContainerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmsContainerView", function() { return FilmsContainerView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const creatFilmsContainerTemplate = () => `<section class="films"></section>`;

class FilmsContainerView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {

  getTemplate() {
    return creatFilmsContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/films-list-container.js":
/*!******************************************!*\
  !*** ./src/view/films-list-container.js ***!
  \******************************************/
/*! exports provided: FilmListContainerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmListContainerView", function() { return FilmListContainerView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilmsListContainerTemplate = () =>
  `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
  </section>`;


class FilmListContainerView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createFilmsListContainerTemplate();
  }
}


/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: FilterView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterView", function() { return FilterView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFilterItemTemplate = (filter, isActive) => {
  const {name, count} = filter;
  return `<a href="${name}" class="main-navigation__item ${isActive ? `main-navigation__item--active` : ``}">${name}${!isActive ? `<span class="main-navigation__item-count">${count}</span>` : ``}</a>`;
};

const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems.map((filter, index) => createFilterItemTemplate(filter, index === 0)).join(``);

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${filterItemsTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};


class FilterView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}


/***/ }),

/***/ "./src/view/footer-stats.js":
/*!**********************************!*\
  !*** ./src/view/footer-stats.js ***!
  \**********************************/
/*! exports provided: FooterStatsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterStatsView", function() { return FooterStatsView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFooterStatsTemplate = (count) => `<p>${count} movies inside</p>`;

class FooterStatsView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  constructor(count) {
    super();
    this._count = count;
  }

  getTemplate() {
    return createFooterStatsTemplate(this._count);
  }
}


/***/ }),

/***/ "./src/view/footer.js":
/*!****************************!*\
  !*** ./src/view/footer.js ***!
  \****************************/
/*! exports provided: FooterView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterView", function() { return FooterView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createFooterTemplate = () =>
  `<footer class="footer">
    <section class="footer__logo logo logo--smaller">Cinemaddict</section>
    </section>
  </footer>`;

class FooterView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createFooterTemplate();
  }
}


/***/ }),

/***/ "./src/view/header.js":
/*!****************************!*\
  !*** ./src/view/header.js ***!
  \****************************/
/*! exports provided: HeaderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderView", function() { return HeaderView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createHeaderTemplate = () =>
  `<header class="header">
    <h1 class="header__logo logo">Cinemaddict</h1>
  </header>`;

class HeaderView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createHeaderTemplate();
  }
}


/***/ }),

/***/ "./src/view/main-section.js":
/*!**********************************!*\
  !*** ./src/view/main-section.js ***!
  \**********************************/
/*! exports provided: MainView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainView", function() { return MainView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createMainSectionTemplate = () =>
  `<main class="main"></main>`;

class MainView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createMainSectionTemplate();
  }
}


/***/ }),

/***/ "./src/view/new-comment.js":
/*!*********************************!*\
  !*** ./src/view/new-comment.js ***!
  \*********************************/
/*! exports provided: NewCommentView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCommentView", function() { return NewCommentView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNewCommentTemplate = () => {
  return `<div class="film-details__new-comment">
  <div class="film-details__add-emoji-label"></div>

  <label class="film-details__comment-label">
    <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
  </label>

  <div class="film-details__emoji-list">
    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
    <label class="film-details__emoji-label" for="emoji-smile">
      <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
    <label class="film-details__emoji-label" for="emoji-sleeping">
      <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
    <label class="film-details__emoji-label" for="emoji-puke">
      <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
    </label>

    <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
    <label class="film-details__emoji-label" for="emoji-angry">
      <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
    </label>
  </div>
</div>`;
};

class NewCommentView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createNewCommentTemplate();
  }
}


/***/ }),

/***/ "./src/view/no-films.js":
/*!******************************!*\
  !*** ./src/view/no-films.js ***!
  \******************************/
/*! exports provided: NoFilmsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFilmsView", function() { return NoFilmsView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createNoFilmsTemplate = () =>
  `<section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
    </section>`;

class NoFilmsView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {

  getTemplate() {
    return createNoFilmsTemplate();
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/*! exports provided: SortView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortView", function() { return SortView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createSortTemplate = () =>
  `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;

class SortView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {

  getTemplate() {
    return createSortTemplate();
  }
}


/***/ }),

/***/ "./src/view/user.js":
/*!**************************!*\
  !*** ./src/view/user.js ***!
  \**************************/
/*! exports provided: UserView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserView", function() { return UserView; });
/* harmony import */ var _abstract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract.js */ "./src/view/abstract.js");


const createUserTemplate = () =>
  `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;

class UserView extends _abstract_js__WEBPACK_IMPORTED_MODULE_0__["AbstractView"] {
  getTemplate() {
    return createUserTemplate();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map