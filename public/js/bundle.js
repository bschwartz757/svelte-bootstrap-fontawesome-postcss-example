var app = (function () {
	'use strict';

	function noop() {}

	function assign(tar, src) {
		for (var k in src) tar[k] = src[k];
		return tar;
	}

	function appendNode(node, target) {
		target.appendChild(node);
	}

	function insertNode(node, target, anchor) {
		target.insertBefore(node, anchor);
	}

	function detachNode(node) {
		node.parentNode.removeChild(node);
	}

	function destroyEach(iterations) {
		for (var i = 0; i < iterations.length; i += 1) {
			if (iterations[i]) iterations[i].d();
		}
	}

	function createElement(name) {
		return document.createElement(name);
	}

	function createText(data) {
		return document.createTextNode(data);
	}

	function createComment() {
		return document.createComment('');
	}

	function addListener(node, event, handler) {
		node.addEventListener(event, handler, false);
	}

	function removeListener(node, event, handler) {
		node.removeEventListener(event, handler, false);
	}

	function setAttribute(node, attribute, value) {
		node.setAttribute(attribute, value);
	}

	function blankObject() {
		return Object.create(null);
	}

	function destroy(detach) {
		this.destroy = noop;
		this.fire('destroy');
		this.set = noop;

		if (detach !== false) this._fragment.u();
		this._fragment.d();
		this._fragment = null;
		this._state = {};
	}

	function destroyDev(detach) {
		destroy.call(this, detach);
		this.destroy = function() {
			console.warn('Component was already destroyed');
		};
	}

	function _differs(a, b) {
		return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}

	function fire(eventName, data) {
		var handlers =
			eventName in this._handlers && this._handlers[eventName].slice();
		if (!handlers) return;

		for (var i = 0; i < handlers.length; i += 1) {
			var handler = handlers[i];

			if (!handler.__calling) {
				handler.__calling = true;
				handler.call(this, data);
				handler.__calling = false;
			}
		}
	}

	function get() {
		return this._state;
	}

	function init(component, options) {
		component._handlers = blankObject();
		component._bind = options._bind;

		component.options = options;
		component.root = options.root || component;
		component.store = component.root.store || options.store;
	}

	function on(eventName, handler) {
		var handlers = this._handlers[eventName] || (this._handlers[eventName] = []);
		handlers.push(handler);

		return {
			cancel: function() {
				var index = handlers.indexOf(handler);
				if (~index) handlers.splice(index, 1);
			}
		};
	}

	function set(newState) {
		this._set(assign({}, newState));
		if (this.root._lock) return;
		this.root._lock = true;
		callAll(this.root._beforecreate);
		callAll(this.root._oncreate);
		callAll(this.root._aftercreate);
		this.root._lock = false;
	}

	function _set(newState) {
		var oldState = this._state,
			changed = {},
			dirty = false;

		for (var key in newState) {
			if (this._differs(newState[key], oldState[key])) changed[key] = dirty = true;
		}
		if (!dirty) return;

		this._state = assign(assign({}, oldState), newState);
		this._recompute(changed, this._state);
		if (this._bind) this._bind(changed, this._state);

		if (this._fragment) {
			this.fire("state", { changed: changed, current: this._state, previous: oldState });
			this._fragment.p(changed, this._state);
			this.fire("update", { changed: changed, current: this._state, previous: oldState });
		}
	}

	function setDev(newState) {
		if (typeof newState !== 'object') {
			throw new Error(
				this._debugName + '.set was called without an object of data key-values to update.'
			);
		}

		this._checkReadOnly(newState);
		set.call(this, newState);
	}

	function callAll(fns) {
		while (fns && fns.length) fns.shift()();
	}

	function _mount(target, anchor) {
		this._fragment[this._fragment.i ? 'i' : 'm'](target, anchor || null);
	}

	function _unmount() {
		if (this._fragment) this._fragment.u();
	}

	var protoDev = {
		destroy: destroyDev,
		get,
		fire,
		on,
		set: setDev,
		_recompute: noop,
		_set,
		_mount,
		_unmount,
		_differs
	};

	const kelvinToFahrenheit = val => {
	  return parseInt((val - 273.15) * 1.8 + 32);
	};

	const kelvinToCelsius = val => {
	  return parseInt(val - 273.15);
	};

	const getFiveDayForecast = (input = { city: "" }) => {
	  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${
    input.city
  }&appid=${window.apiKey}
  `)
	    .then(response => response.json())
	    .then(results => {
	      const forecastArr = results.list.filter(idx => {
	        // selects the 2 o'clock pm forecast
	        return new Date(idx.dt * 1000).getHours() === 14;
	      });
	      const weatherArr = forecastArr.map(obj => {
	        const { dt, main, weather } = obj;
	        return {
	          date: new Date(dt * 1000).toLocaleDateString("en-US", {
	            month: "short",
	            day: "numeric"
	          }),
	          temp: {
	            f: kelvinToFahrenheit(main.temp),
	            c: kelvinToCelsius(main.temp)
	          },
	          humidity: main.humidity,
	          conditions: {
	            description: weather[0].description,
	            icon: weather[0].icon
	          }
	        };
	      });
	      return weatherArr;
	    })
	    .catch(err => {
	      throw new Error(err);
	    });
	};

	/* src/components/views/CardHeader.html generated by Svelte v2.1.1 */

	var methods = {
	  handleChange(evt) {
	    this.set({ city: evt.target.value.split(', ')[0] });
	  },
	  handleSubmit(evt) {
	    // prevent form submit on <enter> keydown
	    evt.preventDefault();
	    return false;
	  }
	};

	function create_main_fragment(component, state) {
		var div, div_1, text_1, div_2, form, div_3, input, text_2, small, text_7, div_4, text_10, hr;

		function change_handler(event) {
			component.handleChange(event);
		}

		function submit_handler(event) {
			component.handleSubmit(event);
		}

		return {
			c: function create() {
				div = createElement("div");
				div_1 = createElement("div");
				div_1.innerHTML = "<i class=\"fas fa-search svelte-9m14o4\"></i>";
				text_1 = createText("\n  ");
				div_2 = createElement("div");
				form = createElement("form");
				div_3 = createElement("div");
				input = createElement("input");
				text_2 = createText("\n        ");
				small = createElement("small");
				small.textContent = "Please enter a city to search";
				text_7 = createText("\n  ");
				div_4 = createElement("div");
				div_4.innerHTML = "<i class=\"fas fa-times svelte-9m14o4\"></i>";
				text_10 = createText("\n\n");
				hr = createElement("hr");
				this.h();
			},

			h: function hydrate() {
				addListener(input, "change", change_handler);
				setAttribute(input, "type", "text");
				input.className = "form-control svelte-9m14o4";
				setAttribute(input, "aria-describedby", "searchHelp");
				input.placeholder = "Search for a city...";
				small.id = "searchHelp";
				small.className = "form-text text-muted";
				small.hidden = true;
				div_3.className = "form-group";
				addListener(form, "submit", submit_handler);
				div_2.className = "w-75";
				div.className = "card-header w-100 d-flex justify-content-between align-items-center weather-app-card__header svelte-9m14o4";
				hr.className = "svelte-9m14o4";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				appendNode(div_1, div);
				appendNode(text_1, div);
				appendNode(div_2, div);
				appendNode(form, div_2);
				appendNode(div_3, form);
				appendNode(input, div_3);
				appendNode(text_2, div_3);
				appendNode(small, div_3);
				appendNode(text_7, div);
				appendNode(div_4, div);
				insertNode(text_10, target, anchor);
				insertNode(hr, target, anchor);
			},

			p: noop,

			u: function unmount() {
				detachNode(div);
				detachNode(text_10);
				detachNode(hr);
			},

			d: function destroy$$1() {
				removeListener(input, "change", change_handler);
				removeListener(form, "submit", submit_handler);
			}
		};
	}

	function CardHeader(options) {
		this._debugName = '<CardHeader>';
		if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
		init(this, options);
		this._state = assign({}, options.data);

		this._fragment = create_main_fragment(this, this._state);

		if (options.target) {
			if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}

	assign(CardHeader.prototype, protoDev);
	assign(CardHeader.prototype, methods);

	CardHeader.prototype._checkReadOnly = function _checkReadOnly(newState) {
	};

	/* src/components/views/CardBody.html generated by Svelte v2.1.1 */

	function create_main_fragment$1(component, state) {
		var div;

		function select_block_type(state) {
			if (!state.current.length) return create_if_block;
			if (state.current[0] === 'City not found') return create_if_block_1;
			return create_if_block_2;
		}

		var current_block_type = select_block_type(state);
		var if_block = current_block_type(component, state);

		return {
			c: function create() {
				div = createElement("div");
				if_block.c();
				this.h();
			},

			h: function hydrate() {
				div.className = "card-body d-flex justify-content-center weather-app-card__body";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				if_block.m(div, null);
			},

			p: function update(changed, state) {
				if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
					if_block.p(changed, state);
				} else {
					if_block.u();
					if_block.d();
					if_block = current_block_type(component, state);
					if_block.c();
					if_block.m(div, null);
				}
			},

			u: function unmount() {
				detachNode(div);
				if_block.u();
			},

			d: function destroy$$1() {
				if_block.d();
			}
		};
	}

	// (2:2) {#if !current.length}
	function create_if_block(component, state) {
		var div;

		return {
			c: function create() {
				div = createElement("div");
				div.innerHTML = "<h1>No Data</h1>";
				this.h();
			},

			h: function hydrate() {
				div.className = "card-body__temp svelte-vmwh7b";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
			},

			p: noop,

			u: function unmount() {
				detachNode(div);
			},

			d: noop
		};
	}

	// (6:43) 
	function create_if_block_1(component, state) {
		var div, h1, text_value = state.current[0], text;

		return {
			c: function create() {
				div = createElement("div");
				h1 = createElement("h1");
				text = createText(text_value);
				this.h();
			},

			h: function hydrate() {
				div.className = "card-body__temp svelte-vmwh7b";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				appendNode(h1, div);
				appendNode(text, h1);
			},

			p: function update(changed, state) {
				if ((changed.current) && text_value !== (text_value = state.current[0])) {
					text.data = text_value;
				}
			},

			u: function unmount() {
				detachNode(div);
			},

			d: noop
		};
	}

	// (10:2) {:else}
	function create_if_block_2(component, state) {
		var div, span, text_value = state.current[0].temp.f, text, text_2, sup, text_4, div_1, span_1, text_6, span_2, text_7_value = state.current[0].conditions.description, text_7, text_8, span_3, text_9_value = state.current[0].humidity, text_9, text_10;

		return {
			c: function create() {
				div = createElement("div");
				span = createElement("span");
				text = createText(text_value);
				text_2 = createText("\n  ");
				sup = createElement("sup");
				sup.textContent = "°";
				text_4 = createText("\n  ");
				div_1 = createElement("div");
				span_1 = createElement("span");
				span_1.textContent = "F";
				text_6 = createText("\n    ");
				span_2 = createElement("span");
				text_7 = createText(text_7_value);
				text_8 = createText("\n    ");
				span_3 = createElement("span");
				text_9 = createText(text_9_value);
				text_10 = createText(" % Humidity");
				this.h();
			},

			h: function hydrate() {
				div.className = "card-body__temp svelte-vmwh7b";
				sup.className = "weather-card__degree-symbol svelte-vmwh7b";
				span_1.className = "svelte-vmwh7b";
				span_2.className = "svelte-vmwh7b";
				span_3.className = "svelte-vmwh7b";
				div_1.className = "d-flex flex-column ml-2 card-body__status svelte-vmwh7b";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				appendNode(span, div);
				appendNode(text, span);
				insertNode(text_2, target, anchor);
				insertNode(sup, target, anchor);
				insertNode(text_4, target, anchor);
				insertNode(div_1, target, anchor);
				appendNode(span_1, div_1);
				appendNode(text_6, div_1);
				appendNode(span_2, div_1);
				appendNode(text_7, span_2);
				appendNode(text_8, div_1);
				appendNode(span_3, div_1);
				appendNode(text_9, span_3);
				appendNode(text_10, span_3);
			},

			p: function update(changed, state) {
				if ((changed.current) && text_value !== (text_value = state.current[0].temp.f)) {
					text.data = text_value;
				}

				if ((changed.current) && text_7_value !== (text_7_value = state.current[0].conditions.description)) {
					text_7.data = text_7_value;
				}

				if ((changed.current) && text_9_value !== (text_9_value = state.current[0].humidity)) {
					text_9.data = text_9_value;
				}
			},

			u: function unmount() {
				detachNode(div);
				detachNode(text_2);
				detachNode(sup);
				detachNode(text_4);
				detachNode(div_1);
			},

			d: noop
		};
	}

	function CardBody(options) {
		this._debugName = '<CardBody>';
		if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
		init(this, options);
		this._state = assign({}, options.data);
		if (!('current' in this._state)) console.warn("<CardBody> was created without expected data property 'current'");

		this._fragment = create_main_fragment$1(this, this._state);

		if (options.target) {
			if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}

	assign(CardBody.prototype, protoDev);

	CardBody.prototype._checkReadOnly = function _checkReadOnly(newState) {
	};

	/* src/components/views/CardFooter.html generated by Svelte v2.1.1 */

	function create_main_fragment$2(component, state) {
		var if_block_anchor;

		function select_block_type(state) {
			if (!state.forecast.length) return create_if_block$1;
			if (state.forecast[0] === 'City not found') return create_if_block_1$1;
			return create_if_block_2$1;
		}

		var current_block_type = select_block_type(state);
		var if_block = current_block_type(component, state);

		return {
			c: function create() {
				if_block.c();
				if_block_anchor = createComment();
			},

			m: function mount(target, anchor) {
				if_block.m(target, anchor);
				insertNode(if_block_anchor, target, anchor);
			},

			p: function update(changed, state) {
				if (current_block_type === (current_block_type = select_block_type(state)) && if_block) {
					if_block.p(changed, state);
				} else {
					if_block.u();
					if_block.d();
					if_block = current_block_type(component, state);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			},

			u: function unmount() {
				if_block.u();
				detachNode(if_block_anchor);
			},

			d: function destroy$$1() {
				if_block.d();
			}
		};
	}

	// (29:2) {#each forecast as forecasts}
	function create_each_block(component, state) {
		var forecasts = state.forecasts, each_value = state.each_value, forecasts_index = state.forecasts_index;
		var div, span, text_value = forecasts.date, text, text_1, span_1, img, img_src_value, text_3, span_2, text_4_value = forecasts.temp.f, text_4, text_5, sup, text_7, text_8, span_3, text_9_value = forecasts.temp.c, text_9, text_10, sup_1, text_12;

		return {
			c: function create() {
				div = createElement("div");
				span = createElement("span");
				text = createText(text_value);
				text_1 = createText("\n    ");
				span_1 = createElement("span");
				img = createElement("img");
				text_3 = createText("\n    ");
				span_2 = createElement("span");
				text_4 = createText(text_4_value);
				text_5 = createText("\n      ");
				sup = createElement("sup");
				sup.textContent = "°";
				text_7 = createText("F");
				text_8 = createText("\n    ");
				span_3 = createElement("span");
				text_9 = createText(text_9_value);
				text_10 = createText("\n      ");
				sup_1 = createElement("sup");
				sup_1.textContent = "°";
				text_12 = createText("C");
				this.h();
			},

			h: function hydrate() {
				span.className = "forecast-item__date";
				img.src = img_src_value = "http://openweathermap.org/img/w/" + forecasts.conditions.icon + ".png";
				img.alt = "weather icon";
				span_1.className = "forecast-item__symbol";
				sup.className = "weather-card__degree-symbol";
				span_2.className = "forecast-item__temp--f";
				sup_1.className = "weather-card__degree-symbol";
				span_3.className = "forecast-item__temp--c";
				div.className = "d-flex flex-column text-center card-footer__forecast-item";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				appendNode(span, div);
				appendNode(text, span);
				appendNode(text_1, div);
				appendNode(span_1, div);
				appendNode(img, span_1);
				appendNode(text_3, div);
				appendNode(span_2, div);
				appendNode(text_4, span_2);
				appendNode(text_5, span_2);
				appendNode(sup, span_2);
				appendNode(text_7, span_2);
				appendNode(text_8, div);
				appendNode(span_3, div);
				appendNode(text_9, span_3);
				appendNode(text_10, span_3);
				appendNode(sup_1, span_3);
				appendNode(text_12, span_3);
			},

			p: function update(changed, state) {
				forecasts = state.forecasts;
				each_value = state.each_value;
				forecasts_index = state.forecasts_index;
				if ((changed.forecast) && text_value !== (text_value = forecasts.date)) {
					text.data = text_value;
				}

				if ((changed.forecast) && img_src_value !== (img_src_value = "http://openweathermap.org/img/w/" + forecasts.conditions.icon + ".png")) {
					img.src = img_src_value;
				}

				if ((changed.forecast) && text_4_value !== (text_4_value = forecasts.temp.f)) {
					text_4.data = text_4_value;
				}

				if ((changed.forecast) && text_9_value !== (text_9_value = forecasts.temp.c)) {
					text_9.data = text_9_value;
				}
			},

			u: function unmount() {
				detachNode(div);
			},

			d: noop
		};
	}

	// (1:0) {#if !forecast.length}
	function create_if_block$1(component, state) {
		var div, text_3, style;

		return {
			c: function create() {
				div = createElement("div");
				div.innerHTML = "<div class=\"col-6 text-center\"><h1>No Forecast Data</h1></div>";
				text_3 = createText("\n");
				style = createElement("style");
				style.textContent = ".weather-app-card__footer {\n    color: #888;\n    background: white;\n    padding: 1rem 0;\n  }";
				this.h();
			},

			h: function hydrate() {
				div.className = "card-footer d-flex justify-content-center weather-app-card__footer";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				insertNode(text_3, target, anchor);
				insertNode(style, target, anchor);
			},

			p: noop,

			u: function unmount() {
				detachNode(div);
				detachNode(text_3);
				detachNode(style);
			},

			d: noop
		};
	}

	// (14:42) 
	function create_if_block_1$1(component, state) {
		var div, div_1, h1, text_value = state.forecast[0], text, text_3, style;

		return {
			c: function create() {
				div = createElement("div");
				div_1 = createElement("div");
				h1 = createElement("h1");
				text = createText(text_value);
				text_3 = createText("\n");
				style = createElement("style");
				style.textContent = ".weather-app-card__footer {\n    color: #888;\n    background: white;\n    padding: 1rem 0;\n  }";
				this.h();
			},

			h: function hydrate() {
				div_1.className = "col-6 text-center";
				div.className = "card-footer d-flex justify-content-center weather-app-card__footer";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);
				appendNode(div_1, div);
				appendNode(h1, div_1);
				appendNode(text, h1);
				insertNode(text_3, target, anchor);
				insertNode(style, target, anchor);
			},

			p: function update(changed, state) {
				if ((changed.forecast) && text_value !== (text_value = state.forecast[0])) {
					text.data = text_value;
				}
			},

			u: function unmount() {
				detachNode(div);
				detachNode(text_3);
				detachNode(style);
			},

			d: noop
		};
	}

	// (27:0) {:else}
	function create_if_block_2$1(component, state) {
		var div, text_1, style;

		var each_value = state.forecast;

		var each_blocks = [];

		for (var i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block(component, assign(assign({}, state), {
				each_value: each_value,
				forecasts: each_value[i],
				forecasts_index: i
			}));
		}

		return {
			c: function create() {
				div = createElement("div");

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				text_1 = createText("\n");
				style = createElement("style");
				style.textContent = ".weather-app-card__footer {\n    background: white;\n    padding: 1rem 0;\n  }\n\n  .card-footer__forecast-item {\n    color: gray;\n    border-right: 1px solid lightgray;\n    width: 20%;\n  }\n\n  .forecast-item__date {\n    color: #888;\n  }\n\n  .forecast-item__temp--f {\n    color: navy;\n    font-size: 1.2em;\n    font-weight: bolder;\n  }\n\n  .forecast-item__temp--c {\n    color: #888;\n    font-size: .8em;\n    margin-top: .25em;\n  }\n\n  .card-footer__forecast-item span {\n    margin: .5em 0;\n  }\n\n  .card-footer__forecast-item:last-child {\n    border-right: none;\n  }";
				this.h();
			},

			h: function hydrate() {
				div.className = "card-footer w-100 d-flex weather-app-card__footer";
			},

			m: function mount(target, anchor) {
				insertNode(div, target, anchor);

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(div, null);
				}

				insertNode(text_1, target, anchor);
				insertNode(style, target, anchor);
			},

			p: function update(changed, state) {
				var each_value = state.forecast;

				if (changed.forecast) {
					for (var i = 0; i < each_value.length; i += 1) {
						var each_context = assign(assign({}, state), {
							each_value: each_value,
							forecasts: each_value[i],
							forecasts_index: i
						});

						if (each_blocks[i]) {
							each_blocks[i].p(changed, each_context);
						} else {
							each_blocks[i] = create_each_block(component, each_context);
							each_blocks[i].c();
							each_blocks[i].m(div, null);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].u();
						each_blocks[i].d();
					}
					each_blocks.length = each_value.length;
				}
			},

			u: function unmount() {
				detachNode(div);

				for (var i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
				}

				detachNode(text_1);
				detachNode(style);
			},

			d: function destroy$$1() {
				destroyEach(each_blocks);
			}
		};
	}

	function CardFooter(options) {
		this._debugName = '<CardFooter>';
		if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
		init(this, options);
		this._state = assign({}, options.data);
		if (!('forecast' in this._state)) console.warn("<CardFooter> was created without expected data property 'forecast'");

		this._fragment = create_main_fragment$2(this, this._state);

		if (options.target) {
			if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			this._fragment.c();
			this._mount(options.target, options.anchor);
		}
	}

	assign(CardFooter.prototype, protoDev);

	CardFooter.prototype._checkReadOnly = function _checkReadOnly(newState) {
	};

	/* src/App.html generated by Svelte v2.1.1 */

	function data() {
	  return {
	    weather: [],
	    apiKey: ''
	  }
	}
	var methods$1 = {
	  getWeather: async function (value) {
	    const initialState = this.get();
	    if (!value.current.city) {
	      return this.set({
	        weather: [],
	        apiKey: initialState.apiKey
	      });
	    }
	    let results;
	    try {
	      results = await getFiveDayForecast(value.current);
	    } catch (err) {
	      results = ['City not found'];
	    }
	    return this.set({
	      weather: results
	    });

	  }
	};

	function create_main_fragment$3(component, state) {
		var main, div, section, div_1, text, text_1;

		var cardheader = new CardHeader({
			root: component.root
		});

		cardheader.on("state", function(event) {
			component.getWeather(event);
		});

		var cardbody_initial_data = { current: state.weather };
		var cardbody = new CardBody({
			root: component.root,
			data: cardbody_initial_data
		});

		var cardfooter_initial_data = { forecast: state.weather };
		var cardfooter = new CardFooter({
			root: component.root,
			data: cardfooter_initial_data
		});

		return {
			c: function create() {
				main = createElement("main");
				div = createElement("div");
				section = createElement("section");
				div_1 = createElement("div");
				cardheader._fragment.c();
				text = createText("\n        ");
				cardbody._fragment.c();
				text_1 = createText("\n        ");
				cardfooter._fragment.c();
				this.h();
			},

			h: function hydrate() {
				div_1.className = "card col-6 weather-app-card svelte-1j9k5mo";
				section.className = "col-12 d-flex justify-content-center weather-app";
				div.className = "d-flex justify-content-center align-items-center";
				main.className = "container";
			},

			m: function mount(target, anchor) {
				insertNode(main, target, anchor);
				appendNode(div, main);
				appendNode(section, div);
				appendNode(div_1, section);
				cardheader._mount(div_1, null);
				appendNode(text, div_1);
				cardbody._mount(div_1, null);
				appendNode(text_1, div_1);
				cardfooter._mount(div_1, null);
			},

			p: function update(changed, state) {
				var cardbody_changes = {};
				if (changed.weather) cardbody_changes.current = state.weather;
				cardbody._set(cardbody_changes);

				var cardfooter_changes = {};
				if (changed.weather) cardfooter_changes.forecast = state.weather;
				cardfooter._set(cardfooter_changes);
			},

			u: function unmount() {
				detachNode(main);
			},

			d: function destroy$$1() {
				cardheader.destroy(false);
				cardbody.destroy(false);
				cardfooter.destroy(false);
			}
		};
	}

	function App(options) {
		this._debugName = '<App>';
		if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
		init(this, options);
		this._state = assign(data(), options.data);
		if (!('weather' in this._state)) console.warn("<App> was created without expected data property 'weather'");

		if (!options.root) {
			this._oncreate = [];
			this._beforecreate = [];
			this._aftercreate = [];
		}

		this._fragment = create_main_fragment$3(this, this._state);

		if (options.target) {
			if (options.hydrate) throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			this._fragment.c();
			this._mount(options.target, options.anchor);

			this._lock = true;
			callAll(this._beforecreate);
			callAll(this._oncreate);
			callAll(this._aftercreate);
			this._lock = false;
		}
	}

	assign(App.prototype, protoDev);
	assign(App.prototype, methods$1);

	App.prototype._checkReadOnly = function _checkReadOnly(newState) {
	};

	// const apiKey = fetch("/get-key")
	//   .then(res => res.json())
	//   .then(result => {
	//     window.apiKey = result.key;
	//   })
	//   .catch(err => {
	//     console.error(`Error fetching key: ${err}`);
	//   });

	const app = new App({
	  target: document.querySelector(".weather-app")
	});

	return app;

}());
//# sourceMappingURL=bundle.js.map
