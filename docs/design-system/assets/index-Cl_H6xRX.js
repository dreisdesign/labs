import { g as ze } from "./_commonjsHelpers-CqkleIqs.js";
function Fe(v, u) {
  for (var S = 0; S < u.length; S++) {
    const y = u[S];
    if (typeof y != "string" && !Array.isArray(y)) {
      for (const w in y)
        if (w !== "default" && !(w in v)) {
          const _ = Object.getOwnPropertyDescriptor(y, w);
          _ &&
            Object.defineProperty(
              v,
              w,
              _.get ? _ : { enumerable: !0, get: () => y[w] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(v, Symbol.toStringTag, { value: "Module" }),
  );
}
var ge = { exports: {} },
  V = {},
  _e = { exports: {} },
  X = { exports: {} };
X.exports;
var Pe;
function xe() {
  return (
    Pe ||
      ((Pe = 1),
      (function (v, u) {
        /**
         * @license React
         * react.development.js
         *
         * Copyright (c) Meta Platforms, Inc. and affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */ (function () {
          function S(e, t) {
            Object.defineProperty(_.prototype, e, {
              get: function () {
                console.warn(
                  "%s(...) is deprecated in plain JavaScript React classes. %s",
                  t[0],
                  t[1],
                );
              },
            });
          }
          function y(e) {
            return e === null || typeof e != "object"
              ? null
              : ((e = (ne && e[ne]) || e["@@iterator"]),
                typeof e == "function" ? e : null);
          }
          function w(e, t) {
            e =
              ((e = e.constructor) && (e.displayName || e.name)) ||
              "ReactClass";
            var n = e + "." + t;
            ve[n] ||
              (console.error(
                "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
                t,
                e,
              ),
              (ve[n] = !0));
          }
          function _(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = me),
              (this.updater = n || Ee);
          }
          function Z() {}
          function q(e, t, n) {
            (this.props = e),
              (this.context = t),
              (this.refs = me),
              (this.updater = n || Ee);
          }
          function J(e) {
            return "" + e;
          }
          function M(e) {
            try {
              J(e);
              var t = !1;
            } catch {
              t = !0;
            }
            if (t) {
              t = console;
              var n = t.error,
                o =
                  (typeof Symbol == "function" &&
                    Symbol.toStringTag &&
                    e[Symbol.toStringTag]) ||
                  e.constructor.name ||
                  "Object";
              return (
                n.call(
                  t,
                  "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
                  o,
                ),
                J(e)
              );
            }
          }
          function j(e) {
            if (e == null) return null;
            if (typeof e == "function")
              return e.$$typeof === Ye ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch (e) {
              case r:
                return "Fragment";
              case p:
                return "Profiler";
              case s:
                return "StrictMode";
              case U:
                return "Suspense";
              case Q:
                return "SuspenseList";
              case K:
                return "Activity";
            }
            if (typeof e == "object")
              switch (
                (typeof e.tag == "number" &&
                  console.error(
                    "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
                  ),
                e.$$typeof)
              ) {
                case B:
                  return "Portal";
                case R:
                  return (e.displayName || "Context") + ".Provider";
                case h:
                  return (e._context.displayName || "Context") + ".Consumer";
                case E:
                  var t = e.render;
                  return (
                    (e = e.displayName),
                    e ||
                      ((e = t.displayName || t.name || ""),
                      (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                  );
                case g:
                  return (
                    (t = e.displayName || null),
                    t !== null ? t : j(e.type) || "Memo"
                  );
                case T:
                  (t = e._payload), (e = e._init);
                  try {
                    return j(e(t));
                  } catch {}
              }
            return null;
          }
          function z(e) {
            if (e === r) return "<>";
            if (typeof e == "object" && e !== null && e.$$typeof === T)
              return "<...>";
            try {
              var t = j(e);
              return t ? "<" + t + ">" : "<...>";
            } catch {
              return "<...>";
            }
          }
          function P() {
            var e = f.A;
            return e === null ? null : e.getOwner();
          }
          function F() {
            return Error("react-stack-top-frame");
          }
          function ee(e) {
            if (ae.call(e, "key")) {
              var t = Object.getOwnPropertyDescriptor(e, "key").get;
              if (t && t.isReactWarning) return !1;
            }
            return e.key !== void 0;
          }
          function x(e, t) {
            function n() {
              Re ||
                ((Re = !0),
                console.error(
                  "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
                  t,
                ));
            }
            (n.isReactWarning = !0),
              Object.defineProperty(e, "key", { get: n, configurable: !0 });
          }
          function ce() {
            var e = j(this.type);
            return (
              Oe[e] ||
                ((Oe[e] = !0),
                console.error(
                  "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
                )),
              (e = this.props.ref),
              e !== void 0 ? e : null
            );
          }
          function H(e, t, n, o, a, l, i, d) {
            return (
              (n = l.ref),
              (e = { $$typeof: $, type: e, key: t, props: l, _owner: a }),
              (n !== void 0 ? n : null) !== null
                ? Object.defineProperty(e, "ref", { enumerable: !1, get: ce })
                : Object.defineProperty(e, "ref", {
                    enumerable: !1,
                    value: null,
                  }),
              (e._store = {}),
              Object.defineProperty(e._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: 0,
              }),
              Object.defineProperty(e, "_debugInfo", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: null,
              }),
              Object.defineProperty(e, "_debugStack", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: i,
              }),
              Object.defineProperty(e, "_debugTask", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: d,
              }),
              Object.freeze && (Object.freeze(e.props), Object.freeze(e)),
              e
            );
          }
          function fe(e, t) {
            return (
              (t = H(
                e.type,
                t,
                void 0,
                void 0,
                e._owner,
                e.props,
                e._debugStack,
                e._debugTask,
              )),
              e._store && (t._store.validated = e._store.validated),
              t
            );
          }
          function A(e) {
            return typeof e == "object" && e !== null && e.$$typeof === $;
          }
          function le(e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (n) {
                return t[n];
              })
            );
          }
          function G(e, t) {
            return typeof e == "object" && e !== null && e.key != null
              ? (M(e.key), le("" + e.key))
              : t.toString(36);
          }
          function te() {}
          function de(e) {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                switch (
                  (typeof e.status == "string"
                    ? e.then(te, te)
                    : ((e.status = "pending"),
                      e.then(
                        function (t) {
                          e.status === "pending" &&
                            ((e.status = "fulfilled"), (e.value = t));
                        },
                        function (t) {
                          e.status === "pending" &&
                            ((e.status = "rejected"), (e.reason = t));
                        },
                      )),
                  e.status)
                ) {
                  case "fulfilled":
                    return e.value;
                  case "rejected":
                    throw e.reason;
                }
            }
            throw e;
          }
          function O(e, t, n, o, a) {
            var l = typeof e;
            (l === "undefined" || l === "boolean") && (e = null);
            var i = !1;
            if (e === null) i = !0;
            else
              switch (l) {
                case "bigint":
                case "string":
                case "number":
                  i = !0;
                  break;
                case "object":
                  switch (e.$$typeof) {
                    case $:
                    case B:
                      i = !0;
                      break;
                    case T:
                      return (i = e._init), O(i(e._payload), t, n, o, a);
                  }
              }
            if (i) {
              (i = e), (a = a(i));
              var d = o === "" ? "." + G(i, 0) : o;
              return (
                ye(a)
                  ? ((n = ""),
                    d != null && (n = d.replace(Se, "$&/") + "/"),
                    O(a, t, n, "", function (C) {
                      return C;
                    }))
                  : a != null &&
                    (A(a) &&
                      (a.key != null && ((i && i.key === a.key) || M(a.key)),
                      (n = fe(
                        a,
                        n +
                          (a.key == null || (i && i.key === a.key)
                            ? ""
                            : ("" + a.key).replace(Se, "$&/") + "/") +
                          d,
                      )),
                      o !== "" &&
                        i != null &&
                        A(i) &&
                        i.key == null &&
                        i._store &&
                        !i._store.validated &&
                        (n._store.validated = 2),
                      (a = n)),
                    t.push(a)),
                1
              );
            }
            if (((i = 0), (d = o === "" ? "." : o + ":"), ye(e)))
              for (var c = 0; c < e.length; c++)
                (o = e[c]), (l = d + G(o, c)), (i += O(o, t, n, l, a));
            else if (((c = y(e)), typeof c == "function"))
              for (
                c === e.entries &&
                  (ke ||
                    console.warn(
                      "Using Maps as children is not supported. Use an array of keyed ReactElements instead.",
                    ),
                  (ke = !0)),
                  e = c.call(e),
                  c = 0;
                !(o = e.next()).done;

              )
                (o = o.value), (l = d + G(o, c++)), (i += O(o, t, n, l, a));
            else if (l === "object") {
              if (typeof e.then == "function") return O(de(e), t, n, o, a);
              throw (
                ((t = String(e)),
                Error(
                  "Objects are not valid as a React child (found: " +
                    (t === "[object Object]"
                      ? "object with keys {" + Object.keys(e).join(", ") + "}"
                      : t) +
                    "). If you meant to render a collection of children, use an array instead.",
                ))
              );
            }
            return i;
          }
          function D(e, t, n) {
            if (e == null) return e;
            var o = [],
              a = 0;
            return (
              O(e, o, "", "", function (l) {
                return t.call(n, l, a++);
              }),
              o
            );
          }
          function pe(e) {
            if (e._status === -1) {
              var t = e._result;
              (t = t()),
                t.then(
                  function (n) {
                    (e._status === 0 || e._status === -1) &&
                      ((e._status = 1), (e._result = n));
                  },
                  function (n) {
                    (e._status === 0 || e._status === -1) &&
                      ((e._status = 2), (e._result = n));
                  },
                ),
                e._status === -1 && ((e._status = 0), (e._result = t));
            }
            if (e._status === 1)
              return (
                (t = e._result),
                t === void 0 &&
                  console.error(
                    `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
                    t,
                  ),
                "default" in t ||
                  console.error(
                    `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                    t,
                  ),
                t.default
              );
            throw e._result;
          }
          function m() {
            var e = f.H;
            return (
              e === null &&
                console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),
              e
            );
          }
          function re() {}
          function L(e) {
            if (ue === null)
              try {
                var t = ("require" + Math.random()).slice(0, 7);
                ue = (v && v[t]).call(v, "timers").setImmediate;
              } catch {
                ue = function (o) {
                  Ce === !1 &&
                    ((Ce = !0),
                    typeof MessageChannel > "u" &&
                      console.error(
                        "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.",
                      ));
                  var a = new MessageChannel();
                  (a.port1.onmessage = o), a.port2.postMessage(void 0);
                };
              }
            return ue(e);
          }
          function k(e) {
            return 1 < e.length && typeof AggregateError == "function"
              ? new AggregateError(e)
              : e[0];
          }
          function N(e, t) {
            t !== se - 1 &&
              console.error(
                "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ",
              ),
              (se = t);
          }
          function I(e, t, n) {
            var o = f.actQueue;
            if (o !== null)
              if (o.length !== 0)
                try {
                  Y(o),
                    L(function () {
                      return I(e, t, n);
                    });
                  return;
                } catch (a) {
                  f.thrownErrors.push(a);
                }
              else f.actQueue = null;
            0 < f.thrownErrors.length
              ? ((o = k(f.thrownErrors)), (f.thrownErrors.length = 0), n(o))
              : t(e);
          }
          function Y(e) {
            if (!he) {
              he = !0;
              var t = 0;
              try {
                for (; t < e.length; t++) {
                  var n = e[t];
                  do {
                    f.didUsePromise = !1;
                    var o = n(!1);
                    if (o !== null) {
                      if (f.didUsePromise) {
                        (e[t] = n), e.splice(0, t);
                        return;
                      }
                      n = o;
                    } else break;
                  } while (!0);
                }
                e.length = 0;
              } catch (a) {
                e.splice(0, t + 1), f.thrownErrors.push(a);
              } finally {
                he = !1;
              }
            }
          }
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ==
              "function" &&
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
          var $ = Symbol.for("react.transitional.element"),
            B = Symbol.for("react.portal"),
            r = Symbol.for("react.fragment"),
            s = Symbol.for("react.strict_mode"),
            p = Symbol.for("react.profiler"),
            h = Symbol.for("react.consumer"),
            R = Symbol.for("react.context"),
            E = Symbol.for("react.forward_ref"),
            U = Symbol.for("react.suspense"),
            Q = Symbol.for("react.suspense_list"),
            g = Symbol.for("react.memo"),
            T = Symbol.for("react.lazy"),
            K = Symbol.for("react.activity"),
            ne = Symbol.iterator,
            ve = {},
            Ee = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function (e) {
                w(e, "forceUpdate");
              },
              enqueueReplaceState: function (e) {
                w(e, "replaceState");
              },
              enqueueSetState: function (e) {
                w(e, "setState");
              },
            },
            be = Object.assign,
            me = {};
          Object.freeze(me),
            (_.prototype.isReactComponent = {}),
            (_.prototype.setState = function (e, t) {
              if (typeof e != "object" && typeof e != "function" && e != null)
                throw Error(
                  "takes an object of state variables to update or a function which returns an object of state variables.",
                );
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (_.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            });
          var b = {
              isMounted: [
                "isMounted",
                "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
              ],
              replaceState: [
                "replaceState",
                "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
              ],
            },
            oe;
          for (oe in b) b.hasOwnProperty(oe) && S(oe, b[oe]);
          (Z.prototype = _.prototype),
            (b = q.prototype = new Z()),
            (b.constructor = q),
            be(b, _.prototype),
            (b.isPureReactComponent = !0);
          var ye = Array.isArray,
            Ye = Symbol.for("react.client.reference"),
            f = {
              H: null,
              A: null,
              T: null,
              S: null,
              V: null,
              actQueue: null,
              isBatchingLegacy: !1,
              didScheduleLegacyUpdate: !1,
              didUsePromise: !1,
              thrownErrors: [],
              getCurrentStack: null,
              recentlyCreatedOwnerStacks: 0,
            },
            ae = Object.prototype.hasOwnProperty,
            we = console.createTask
              ? console.createTask
              : function () {
                  return null;
                };
          b = {
            "react-stack-bottom-frame": function (e) {
              return e();
            },
          };
          var Re,
            Te,
            Oe = {},
            $e = b["react-stack-bottom-frame"].bind(b, F)(),
            Ue = we(z(F)),
            ke = !1,
            Se = /\/+/g,
            Ae =
              typeof reportError == "function"
                ? reportError
                : function (e) {
                    if (
                      typeof window == "object" &&
                      typeof window.ErrorEvent == "function"
                    ) {
                      var t = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                          typeof e == "object" &&
                          e !== null &&
                          typeof e.message == "string"
                            ? String(e.message)
                            : String(e),
                        error: e,
                      });
                      if (!window.dispatchEvent(t)) return;
                    } else if (
                      typeof process == "object" &&
                      typeof process.emit == "function"
                    ) {
                      process.emit("uncaughtException", e);
                      return;
                    }
                    console.error(e);
                  },
            Ce = !1,
            ue = null,
            se = 0,
            ie = !1,
            he = !1,
            je =
              typeof queueMicrotask == "function"
                ? function (e) {
                    queueMicrotask(function () {
                      return queueMicrotask(e);
                    });
                  }
                : L;
          (b = Object.freeze({
            __proto__: null,
            c: function (e) {
              return m().useMemoCache(e);
            },
          })),
            (u.Children = {
              map: D,
              forEach: function (e, t, n) {
                D(
                  e,
                  function () {
                    t.apply(this, arguments);
                  },
                  n,
                );
              },
              count: function (e) {
                var t = 0;
                return (
                  D(e, function () {
                    t++;
                  }),
                  t
                );
              },
              toArray: function (e) {
                return (
                  D(e, function (t) {
                    return t;
                  }) || []
                );
              },
              only: function (e) {
                if (!A(e))
                  throw Error(
                    "React.Children.only expected to receive a single React element child.",
                  );
                return e;
              },
            }),
            (u.Component = _),
            (u.Fragment = r),
            (u.Profiler = p),
            (u.PureComponent = q),
            (u.StrictMode = s),
            (u.Suspense = U),
            (u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
              f),
            (u.__COMPILER_RUNTIME = b),
            (u.act = function (e) {
              var t = f.actQueue,
                n = se;
              se++;
              var o = (f.actQueue = t !== null ? t : []),
                a = !1;
              try {
                var l = e();
              } catch (c) {
                f.thrownErrors.push(c);
              }
              if (0 < f.thrownErrors.length)
                throw (
                  (N(t, n),
                  (e = k(f.thrownErrors)),
                  (f.thrownErrors.length = 0),
                  e)
                );
              if (
                l !== null &&
                typeof l == "object" &&
                typeof l.then == "function"
              ) {
                var i = l;
                return (
                  je(function () {
                    a ||
                      ie ||
                      ((ie = !0),
                      console.error(
                        "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);",
                      ));
                  }),
                  {
                    then: function (c, C) {
                      (a = !0),
                        i.then(
                          function (W) {
                            if ((N(t, n), n === 0)) {
                              try {
                                Y(o),
                                  L(function () {
                                    return I(W, c, C);
                                  });
                              } catch (qe) {
                                f.thrownErrors.push(qe);
                              }
                              if (0 < f.thrownErrors.length) {
                                var We = k(f.thrownErrors);
                                (f.thrownErrors.length = 0), C(We);
                              }
                            } else c(W);
                          },
                          function (W) {
                            N(t, n),
                              0 < f.thrownErrors.length &&
                                ((W = k(f.thrownErrors)),
                                (f.thrownErrors.length = 0)),
                              C(W);
                          },
                        );
                    },
                  }
                );
              }
              var d = l;
              if (
                (N(t, n),
                n === 0 &&
                  (Y(o),
                  o.length !== 0 &&
                    je(function () {
                      a ||
                        ie ||
                        ((ie = !0),
                        console.error(
                          "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)",
                        ));
                    }),
                  (f.actQueue = null)),
                0 < f.thrownErrors.length)
              )
                throw ((e = k(f.thrownErrors)), (f.thrownErrors.length = 0), e);
              return {
                then: function (c, C) {
                  (a = !0),
                    n === 0
                      ? ((f.actQueue = o),
                        L(function () {
                          return I(d, c, C);
                        }))
                      : c(d);
                },
              };
            }),
            (u.cache = function (e) {
              return function () {
                return e.apply(null, arguments);
              };
            }),
            (u.captureOwnerStack = function () {
              var e = f.getCurrentStack;
              return e === null ? null : e();
            }),
            (u.cloneElement = function (e, t, n) {
              if (e == null)
                throw Error(
                  "The argument must be a React element, but you passed " +
                    e +
                    ".",
                );
              var o = be({}, e.props),
                a = e.key,
                l = e._owner;
              if (t != null) {
                var i;
                e: {
                  if (
                    ae.call(t, "ref") &&
                    (i = Object.getOwnPropertyDescriptor(t, "ref").get) &&
                    i.isReactWarning
                  ) {
                    i = !1;
                    break e;
                  }
                  i = t.ref !== void 0;
                }
                i && (l = P()), ee(t) && (M(t.key), (a = "" + t.key));
                for (d in t)
                  !ae.call(t, d) ||
                    d === "key" ||
                    d === "__self" ||
                    d === "__source" ||
                    (d === "ref" && t.ref === void 0) ||
                    (o[d] = t[d]);
              }
              var d = arguments.length - 2;
              if (d === 1) o.children = n;
              else if (1 < d) {
                i = Array(d);
                for (var c = 0; c < d; c++) i[c] = arguments[c + 2];
                o.children = i;
              }
              for (
                o = H(
                  e.type,
                  a,
                  void 0,
                  void 0,
                  l,
                  o,
                  e._debugStack,
                  e._debugTask,
                ),
                  a = 2;
                a < arguments.length;
                a++
              )
                (l = arguments[a]),
                  A(l) && l._store && (l._store.validated = 1);
              return o;
            }),
            (u.createContext = function (e) {
              return (
                (e = {
                  $$typeof: R,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                }),
                (e.Provider = e),
                (e.Consumer = { $$typeof: h, _context: e }),
                (e._currentRenderer = null),
                (e._currentRenderer2 = null),
                e
              );
            }),
            (u.createElement = function (e, t, n) {
              for (var o = 2; o < arguments.length; o++) {
                var a = arguments[o];
                A(a) && a._store && (a._store.validated = 1);
              }
              if (((o = {}), (a = null), t != null))
                for (c in (Te ||
                  !("__self" in t) ||
                  "key" in t ||
                  ((Te = !0),
                  console.warn(
                    "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform",
                  )),
                ee(t) && (M(t.key), (a = "" + t.key)),
                t))
                  ae.call(t, c) &&
                    c !== "key" &&
                    c !== "__self" &&
                    c !== "__source" &&
                    (o[c] = t[c]);
              var l = arguments.length - 2;
              if (l === 1) o.children = n;
              else if (1 < l) {
                for (var i = Array(l), d = 0; d < l; d++)
                  i[d] = arguments[d + 2];
                Object.freeze && Object.freeze(i), (o.children = i);
              }
              if (e && e.defaultProps)
                for (c in ((l = e.defaultProps), l))
                  o[c] === void 0 && (o[c] = l[c]);
              a &&
                x(
                  o,
                  typeof e == "function"
                    ? e.displayName || e.name || "Unknown"
                    : e,
                );
              var c = 1e4 > f.recentlyCreatedOwnerStacks++;
              return H(
                e,
                a,
                void 0,
                void 0,
                P(),
                o,
                c ? Error("react-stack-top-frame") : $e,
                c ? we(z(e)) : Ue,
              );
            }),
            (u.createRef = function () {
              var e = { current: null };
              return Object.seal(e), e;
            }),
            (u.forwardRef = function (e) {
              e != null && e.$$typeof === g
                ? console.error(
                    "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).",
                  )
                : typeof e != "function"
                  ? console.error(
                      "forwardRef requires a render function but was given %s.",
                      e === null ? "null" : typeof e,
                    )
                  : e.length !== 0 &&
                    e.length !== 2 &&
                    console.error(
                      "forwardRef render functions accept exactly two parameters: props and ref. %s",
                      e.length === 1
                        ? "Did you forget to use the ref parameter?"
                        : "Any additional parameter will be undefined.",
                    ),
                e != null &&
                  e.defaultProps != null &&
                  console.error(
                    "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?",
                  );
              var t = { $$typeof: E, render: e },
                n;
              return (
                Object.defineProperty(t, "displayName", {
                  enumerable: !1,
                  configurable: !0,
                  get: function () {
                    return n;
                  },
                  set: function (o) {
                    (n = o),
                      e.name ||
                        e.displayName ||
                        (Object.defineProperty(e, "name", { value: o }),
                        (e.displayName = o));
                  },
                }),
                t
              );
            }),
            (u.isValidElement = A),
            (u.lazy = function (e) {
              return {
                $$typeof: T,
                _payload: { _status: -1, _result: e },
                _init: pe,
              };
            }),
            (u.memo = function (e, t) {
              e == null &&
                console.error(
                  "memo: The first argument must be a component. Instead received: %s",
                  e === null ? "null" : typeof e,
                ),
                (t = {
                  $$typeof: g,
                  type: e,
                  compare: t === void 0 ? null : t,
                });
              var n;
              return (
                Object.defineProperty(t, "displayName", {
                  enumerable: !1,
                  configurable: !0,
                  get: function () {
                    return n;
                  },
                  set: function (o) {
                    (n = o),
                      e.name ||
                        e.displayName ||
                        (Object.defineProperty(e, "name", { value: o }),
                        (e.displayName = o));
                  },
                }),
                t
              );
            }),
            (u.startTransition = function (e) {
              var t = f.T,
                n = {};
              (f.T = n), (n._updatedFibers = new Set());
              try {
                var o = e(),
                  a = f.S;
                a !== null && a(n, o),
                  typeof o == "object" &&
                    o !== null &&
                    typeof o.then == "function" &&
                    o.then(re, Ae);
              } catch (l) {
                Ae(l);
              } finally {
                t === null &&
                  n._updatedFibers &&
                  ((e = n._updatedFibers.size),
                  n._updatedFibers.clear(),
                  10 < e &&
                    console.warn(
                      "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.",
                    )),
                  (f.T = t);
              }
            }),
            (u.unstable_useCacheRefresh = function () {
              return m().useCacheRefresh();
            }),
            (u.use = function (e) {
              return m().use(e);
            }),
            (u.useActionState = function (e, t, n) {
              return m().useActionState(e, t, n);
            }),
            (u.useCallback = function (e, t) {
              return m().useCallback(e, t);
            }),
            (u.useContext = function (e) {
              var t = m();
              return (
                e.$$typeof === h &&
                  console.error(
                    "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?",
                  ),
                t.useContext(e)
              );
            }),
            (u.useDebugValue = function (e, t) {
              return m().useDebugValue(e, t);
            }),
            (u.useDeferredValue = function (e, t) {
              return m().useDeferredValue(e, t);
            }),
            (u.useEffect = function (e, t, n) {
              e == null &&
                console.warn(
                  "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?",
                );
              var o = m();
              if (typeof n == "function")
                throw Error(
                  "useEffect CRUD overload is not enabled in this build of React.",
                );
              return o.useEffect(e, t);
            }),
            (u.useId = function () {
              return m().useId();
            }),
            (u.useImperativeHandle = function (e, t, n) {
              return m().useImperativeHandle(e, t, n);
            }),
            (u.useInsertionEffect = function (e, t) {
              return (
                e == null &&
                  console.warn(
                    "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?",
                  ),
                m().useInsertionEffect(e, t)
              );
            }),
            (u.useLayoutEffect = function (e, t) {
              return (
                e == null &&
                  console.warn(
                    "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?",
                  ),
                m().useLayoutEffect(e, t)
              );
            }),
            (u.useMemo = function (e, t) {
              return m().useMemo(e, t);
            }),
            (u.useOptimistic = function (e, t) {
              return m().useOptimistic(e, t);
            }),
            (u.useReducer = function (e, t, n) {
              return m().useReducer(e, t, n);
            }),
            (u.useRef = function (e) {
              return m().useRef(e);
            }),
            (u.useState = function (e) {
              return m().useState(e);
            }),
            (u.useSyncExternalStore = function (e, t, n) {
              return m().useSyncExternalStore(e, t, n);
            }),
            (u.useTransition = function () {
              return m().useTransition();
            }),
            (u.version = "19.1.0"),
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ==
                "function" &&
              __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
                Error(),
              );
        })();
      })(X, X.exports)),
    X.exports
  );
}
var Ne;
function Le() {
  return Ne || ((Ne = 1), (_e.exports = xe())), _e.exports;
}
var Me;
function He() {
  if (Me) return V;
  Me = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ return (
    (function () {
      function v(r) {
        if (r == null) return null;
        if (typeof r == "function")
          return r.$$typeof === pe ? null : r.displayName || r.name || null;
        if (typeof r == "string") return r;
        switch (r) {
          case x:
            return "Fragment";
          case H:
            return "Profiler";
          case ce:
            return "StrictMode";
          case G:
            return "Suspense";
          case te:
            return "SuspenseList";
          case D:
            return "Activity";
        }
        if (typeof r == "object")
          switch (
            (typeof r.tag == "number" &&
              console.error(
                "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.",
              ),
            r.$$typeof)
          ) {
            case ee:
              return "Portal";
            case A:
              return (r.displayName || "Context") + ".Provider";
            case fe:
              return (r._context.displayName || "Context") + ".Consumer";
            case le:
              var s = r.render;
              return (
                (r = r.displayName),
                r ||
                  ((r = s.displayName || s.name || ""),
                  (r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef")),
                r
              );
            case de:
              return (
                (s = r.displayName || null),
                s !== null ? s : v(r.type) || "Memo"
              );
            case O:
              (s = r._payload), (r = r._init);
              try {
                return v(r(s));
              } catch {}
          }
        return null;
      }
      function u(r) {
        return "" + r;
      }
      function S(r) {
        try {
          u(r);
          var s = !1;
        } catch {
          s = !0;
        }
        if (s) {
          s = console;
          var p = s.error,
            h =
              (typeof Symbol == "function" &&
                Symbol.toStringTag &&
                r[Symbol.toStringTag]) ||
              r.constructor.name ||
              "Object";
          return (
            p.call(
              s,
              "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
              h,
            ),
            u(r)
          );
        }
      }
      function y(r) {
        if (r === x) return "<>";
        if (typeof r == "object" && r !== null && r.$$typeof === O)
          return "<...>";
        try {
          var s = v(r);
          return s ? "<" + s + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function w() {
        var r = m.A;
        return r === null ? null : r.getOwner();
      }
      function _() {
        return Error("react-stack-top-frame");
      }
      function Z(r) {
        if (re.call(r, "key")) {
          var s = Object.getOwnPropertyDescriptor(r, "key").get;
          if (s && s.isReactWarning) return !1;
        }
        return r.key !== void 0;
      }
      function q(r, s) {
        function p() {
          N ||
            ((N = !0),
            console.error(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
              s,
            ));
        }
        (p.isReactWarning = !0),
          Object.defineProperty(r, "key", { get: p, configurable: !0 });
      }
      function J() {
        var r = v(this.type);
        return (
          I[r] ||
            ((I[r] = !0),
            console.error(
              "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.",
            )),
          (r = this.props.ref),
          r !== void 0 ? r : null
        );
      }
      function M(r, s, p, h, R, E, U, Q) {
        return (
          (p = E.ref),
          (r = { $$typeof: F, type: r, key: s, props: E, _owner: R }),
          (p !== void 0 ? p : null) !== null
            ? Object.defineProperty(r, "ref", { enumerable: !1, get: J })
            : Object.defineProperty(r, "ref", { enumerable: !1, value: null }),
          (r._store = {}),
          Object.defineProperty(r._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(r, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(r, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: U,
          }),
          Object.defineProperty(r, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: Q,
          }),
          Object.freeze && (Object.freeze(r.props), Object.freeze(r)),
          r
        );
      }
      function j(r, s, p, h, R, E, U, Q) {
        var g = s.children;
        if (g !== void 0)
          if (h)
            if (L(g)) {
              for (h = 0; h < g.length; h++) z(g[h]);
              Object.freeze && Object.freeze(g);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.",
              );
          else z(g);
        if (re.call(s, "key")) {
          g = v(r);
          var T = Object.keys(s).filter(function (ne) {
            return ne !== "key";
          });
          (h =
            0 < T.length
              ? "{key: someKey, " + T.join(": ..., ") + ": ...}"
              : "{key: someKey}"),
            B[g + h] ||
              ((T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}"),
              console.error(
                `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
                h,
                g,
                T,
                g,
              ),
              (B[g + h] = !0));
        }
        if (
          ((g = null),
          p !== void 0 && (S(p), (g = "" + p)),
          Z(s) && (S(s.key), (g = "" + s.key)),
          "key" in s)
        ) {
          p = {};
          for (var K in s) K !== "key" && (p[K] = s[K]);
        } else p = s;
        return (
          g &&
            q(
              p,
              typeof r == "function" ? r.displayName || r.name || "Unknown" : r,
            ),
          M(r, g, E, R, w(), p, U, Q)
        );
      }
      function z(r) {
        typeof r == "object" &&
          r !== null &&
          r.$$typeof === F &&
          r._store &&
          (r._store.validated = 1);
      }
      var P = Le(),
        F = Symbol.for("react.transitional.element"),
        ee = Symbol.for("react.portal"),
        x = Symbol.for("react.fragment"),
        ce = Symbol.for("react.strict_mode"),
        H = Symbol.for("react.profiler"),
        fe = Symbol.for("react.consumer"),
        A = Symbol.for("react.context"),
        le = Symbol.for("react.forward_ref"),
        G = Symbol.for("react.suspense"),
        te = Symbol.for("react.suspense_list"),
        de = Symbol.for("react.memo"),
        O = Symbol.for("react.lazy"),
        D = Symbol.for("react.activity"),
        pe = Symbol.for("react.client.reference"),
        m = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        re = Object.prototype.hasOwnProperty,
        L = Array.isArray,
        k = console.createTask
          ? console.createTask
          : function () {
              return null;
            };
      P = {
        "react-stack-bottom-frame": function (r) {
          return r();
        },
      };
      var N,
        I = {},
        Y = P["react-stack-bottom-frame"].bind(P, _)(),
        $ = k(y(_)),
        B = {};
      (V.Fragment = x),
        (V.jsx = function (r, s, p, h, R) {
          var E = 1e4 > m.recentlyCreatedOwnerStacks++;
          return j(
            r,
            s,
            p,
            !1,
            h,
            R,
            E ? Error("react-stack-top-frame") : Y,
            E ? k(y(r)) : $,
          );
        }),
        (V.jsxs = function (r, s, p, h, R) {
          var E = 1e4 > m.recentlyCreatedOwnerStacks++;
          return j(
            r,
            s,
            p,
            !0,
            h,
            R,
            E ? Error("react-stack-top-frame") : Y,
            E ? k(y(r)) : $,
          );
        });
    })(),
    V
  );
}
var De;
function Ge() {
  return De || ((De = 1), (ge.exports = He())), ge.exports;
}
var Ke = Ge(),
  Ie = Le();
const Be = ze(Ie),
  Ve = Fe({ __proto__: null, default: Be }, [Ie]);
export { Ve as V, Le as a, Be as e, Ke as j, Ie as r };
