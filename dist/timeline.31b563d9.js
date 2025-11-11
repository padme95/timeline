// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"5j6Kf":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d68ad56631b563d9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"a0t4e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _assignLanesJs = require("./assignLanes.js");
var _timelineItemsJs = require("./timelineItems.js");
var _timelineItemsJsDefault = parcelHelpers.interopDefault(_timelineItemsJs);
const toDate = (s)=>new Date(`${s}T00:00:00`);
const fmt = (d)=>d.toISOString().slice(0, 10);
const daysBetween = (aStr, bStr)=>Math.round((toDate(bStr) - toDate(aStr)) / 86400000);
const overlapsToday = (it, today)=>toDate(it.start) <= today && today <= toDate(it.end);
let items = structuredClone((0, _timelineItemsJsDefault.default));
let pxPerDay = 16;
let showTodayMarker = false;
let filterToday = false;
let lastTimelineScrollLeft = 0;
let lastTimelineScrollTop = 0;
let lastWindowX = 0;
let lastWindowY = 0;
function computeBounds(list, includeToday = false) {
    const today = new Date();
    if (!list.length) {
        const pad = 172800000;
        return [
            new Date(today.getTime() - pad),
            new Date(today.getTime() + pad)
        ];
    }
    let min = toDate(list[0].start);
    let max = toDate(list[0].end);
    for (const it of list){
        const s = toDate(it.start), e = toDate(it.end);
        if (s < min) min = s;
        if (e > max) max = e;
    }
    if (includeToday) {
        if (today < min) min = today;
        if (today > max) max = today;
    }
    const pad = 172800000;
    return [
        new Date(min.getTime() - pad),
        new Date(max.getTime() + pad)
    ];
}
function buildBarLabelHTML(it, width) {
    const W = width;
    let nameHTML = "", datesHTML = "";
    if (W >= 160) {
        nameHTML = `<div class="name">${it.name}</div>`;
        datesHTML = `<div class="dates">${it.start} \u{2192} ${it.end}</div>`;
    } else if (W >= 120) {
        const short = it.name.length > 18 ? it.name.slice(0, 18) + "\u2026" : it.name;
        nameHTML = `<div class="name">${short}</div>`;
        datesHTML = `<div class="dates">${it.start.slice(5)}\u{2192}${it.end.slice(5)}</div>`;
    } else if (W >= 80) {
        const short = it.name.length > 14 ? it.name.slice(0, 14) + "\u2026" : it.name;
        nameHTML = `<div class="name">${short}</div>`;
    } else if (W >= 48) datesHTML = `<div class="dates">${it.start.slice(5)}\u{2192}${it.end.slice(5)}</div>`;
    else if (W >= 24) datesHTML = `<div class="dates">${it.start.slice(5)}</div>`;
    return `${nameHTML}${datesHTML}`;
}
function render() {
    const root = document.getElementById("root");
    const prevTimeline = root.querySelector(".timeline");
    if (prevTimeline) {
        lastTimelineScrollLeft = prevTimeline.scrollLeft;
        lastTimelineScrollTop = prevTimeline.scrollTop;
    }
    lastWindowX = window.scrollX;
    lastWindowY = window.scrollY;
    root.innerHTML = "";
    const today = new Date();
    const working = filterToday ? items.filter((it)=>overlapsToday(it, today)) : items;
    const [minDate, maxDate] = computeBounds(working, showTodayMarker);
    const lanes = (0, _assignLanesJs.assignLanes)(working, {
        labelBufferDays: 0.45
    });
    const totalDays = daysBetween(fmt(minDate), fmt(maxDate)) + 1;
    const widthPx = totalDays * pxPerDay;
    const controls = document.createElement("div");
    controls.className = "tl-controls";
    controls.innerHTML = `
    <button id="zoomOut" aria-label="Zoom out">\u{2212}</button>
    <input id="zoomSlider" type="range" min="6" max="40" step="1" value="${pxPerDay}" aria-label="Zoom"/>
    <button id="zoomIn" aria-label="Zoom in">+</button>
    <label class="chk"><input id="showToday" type="checkbox" ${showTodayMarker ? "checked" : ""}/> <span>Show "Today"</span></label>
    <label class="chk"><input id="filterToday" type="checkbox" ${filterToday ? "checked" : ""}/> <span>Filter to Today</span></label>
    <span class="hint">Double-click to rename. Drag body to move, edges to resize.</span>
  `;
    root.appendChild(controls);
    const timeline = document.createElement("div");
    timeline.className = "timeline";
    timeline.style.setProperty("--col-width", `${pxPerDay}px`);
    const header = document.createElement("div");
    header.className = "tl-header";
    const scale = document.createElement("div");
    scale.className = "tl-scale";
    scale.style.width = `${widthPx}px`;
    const labelStep = (px)=>px >= 28 ? 1 : px >= 20 ? 2 : px >= 14 ? 3 : px >= 10 ? 7 : "month";
    const step = labelStep(pxPerDay);
    for(let i = 0; i < totalDays; i++){
        const d = new Date(minDate.getTime() + i * 86400000);
        const tick = document.createElement("div");
        tick.className = "tick";
        if (d.getUTCDay() === 1) tick.classList.add("strong");
        let label = "";
        const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
        const dd = String(d.getUTCDate()).padStart(2, "0");
        if (step === 1) label = `${mm}-${dd}`;
        else if (step === 2 || step === 3) {
            if (i % step === 0) label = `${mm}-${dd}`;
        } else if (step === 7) {
            if (d.getUTCDay() === 1) label = `${mm}-${dd}`;
        } else if (d.getUTCDate() === 1) {
            label = `${d.getUTCFullYear()}-${mm}`;
            tick.classList.add("strong");
        }
        tick.textContent = label;
        scale.appendChild(tick);
    }
    header.appendChild(scale);
    timeline.appendChild(header);
    if (showTodayMarker) {
        const fromMin = daysBetween(fmt(minDate), fmt(today));
        const marker = document.createElement("div");
        marker.className = "today";
        marker.style.left = `${fromMin * pxPerDay}px`;
        timeline.appendChild(marker);
    }
    const lanesEl = document.createElement("div");
    lanesEl.className = "lanes";
    lanesEl.style.width = `${widthPx}px`;
    const getOrigin = ()=>{
        const rect = lanesEl.getBoundingClientRect();
        const paddingLeft = 8;
        return {
            originLeftScreen: rect.left + paddingLeft,
            scrollX: timeline.scrollLeft
        };
    };
    const toDays = (clientX, originLeftScreen, scrollX)=>Math.round((clientX - originLeftScreen + scrollX) / pxPerDay);
    lanes.forEach((laneItems)=>{
        const laneEl = document.createElement("div");
        laneEl.className = "lane";
        laneItems.forEach((it)=>{
            const startDays = Math.max(0, daysBetween(fmt(minDate), it.start));
            const duration = Math.max(1, daysBetween(it.start, it.end) + 1);
            const left = startDays * pxPerDay;
            const width = duration * pxPerDay;
            const bar = document.createElement("div");
            bar.className = "bar";
            bar.style.left = `${left}px`;
            bar.style.width = `${width}px`;
            bar.title = `${it.name} \u{2022} ${it.start} \u{2192} ${it.end}`;
            const handleLeft = document.createElement("div");
            handleLeft.className = "handle left";
            const handleRight = document.createElement("div");
            handleRight.className = "handle right";
            const label = document.createElement("div");
            label.className = "label";
            label.innerHTML = buildBarLabelHTML(it, width);
            bar.ondblclick = (e)=>{
                e.stopPropagation();
                const newName = prompt("Rename item:", it.name);
                if (newName && newName.trim() && newName !== it.name) {
                    it.name = newName.trim();
                    render();
                }
            };
            const onBodyPointerDown = (downEvent)=>{
                const threshold = 3;
                const startX = downEvent.clientX;
                let dragging = false;
                const { originLeftScreen, scrollX } = getOrigin();
                const startOffset = toDays(downEvent.clientX, originLeftScreen, scrollX);
                const baseStart = toDate(it.start);
                const baseEnd = toDate(it.end);
                let liveStart = new Date(baseStart);
                let liveEnd = new Date(baseEnd);
                const move = (ev)=>{
                    if (!dragging && Math.abs(ev.clientX - startX) >= threshold) dragging = true;
                    if (!dragging) return;
                    const cur = toDays(ev.clientX, originLeftScreen, timeline.scrollLeft);
                    const delta = cur - startOffset;
                    liveStart = new Date(baseStart);
                    liveEnd = new Date(baseEnd);
                    liveStart.setDate(liveStart.getDate() + delta);
                    liveEnd.setDate(liveEnd.getDate() + delta);
                    const newLeft = Math.max(0, daysBetween(fmt(minDate), fmt(liveStart))) * pxPerDay;
                    const newWidth = Math.max(1, daysBetween(fmt(liveStart), fmt(liveEnd)) + 1) * pxPerDay;
                    bar.style.left = `${newLeft}px`;
                    bar.style.width = `${newWidth}px`;
                    const tempItem = {
                        ...it,
                        start: fmt(liveStart),
                        end: fmt(liveEnd)
                    };
                    label.innerHTML = buildBarLabelHTML(tempItem, newWidth);
                    bar.title = `${tempItem.name} \u{2022} ${tempItem.start} \u{2192} ${tempItem.end}`;
                };
                const up = ()=>{
                    if (dragging) {
                        it.start = fmt(liveStart);
                        it.end = fmt(liveEnd);
                        render();
                    }
                    window.removeEventListener("pointermove", move);
                    window.removeEventListener("pointerup", up);
                };
                window.addEventListener("pointermove", move);
                window.addEventListener("pointerup", up, {
                    once: true
                });
            };
            const onHandlePointerDown = (edge)=>(downEvent)=>{
                    downEvent.stopPropagation();
                    const { originLeftScreen, scrollX } = getOrigin();
                    const startOffset = toDays(downEvent.clientX, originLeftScreen, scrollX);
                    const baseStart = toDate(it.start);
                    const baseEnd = toDate(it.end);
                    let liveStart = new Date(baseStart);
                    let liveEnd = new Date(baseEnd);
                    const move = (ev)=>{
                        const cur = toDays(ev.clientX, originLeftScreen, timeline.scrollLeft);
                        const delta = cur - startOffset;
                        if (edge === "left") {
                            const s = new Date(baseStart);
                            s.setDate(s.getDate() + delta);
                            if (s <= baseEnd) liveStart = s;
                        } else {
                            const e = new Date(baseEnd);
                            e.setDate(e.getDate() + delta);
                            if (e >= baseStart) liveEnd = e;
                        }
                        const newLeft = Math.max(0, daysBetween(fmt(minDate), fmt(liveStart))) * pxPerDay;
                        const newWidth = Math.max(1, daysBetween(fmt(liveStart), fmt(liveEnd)) + 1) * pxPerDay;
                        bar.style.left = `${newLeft}px`;
                        bar.style.width = `${newWidth}px`;
                        const tempItem = {
                            ...it,
                            start: fmt(liveStart),
                            end: fmt(liveEnd)
                        };
                        label.innerHTML = buildBarLabelHTML(tempItem, newWidth);
                        bar.title = `${tempItem.name} \u{2022} ${tempItem.start} \u{2192} ${tempItem.end}`;
                    };
                    const up = ()=>{
                        it.start = fmt(liveStart);
                        it.end = fmt(liveEnd);
                        window.removeEventListener("pointermove", move);
                        window.removeEventListener("pointerup", up);
                        render();
                    };
                    window.addEventListener("pointermove", move);
                    window.addEventListener("pointerup", up, {
                        once: true
                    });
                };
            bar.onpointerdown = onBodyPointerDown;
            handleLeft.onpointerdown = onHandlePointerDown("left");
            handleRight.onpointerdown = onHandlePointerDown("right");
            bar.append(handleLeft, label, handleRight);
            laneEl.appendChild(bar);
        });
        lanesEl.appendChild(laneEl);
    });
    timeline.appendChild(lanesEl);
    root.appendChild(timeline);
    timeline.scrollLeft = lastTimelineScrollLeft;
    timeline.scrollTop = lastTimelineScrollTop;
    if (typeof lastWindowX === "number" && typeof lastWindowY === "number") window.scrollTo(lastWindowX, lastWindowY);
    const zoomSlider = document.getElementById("zoomSlider");
    document.getElementById("zoomIn").onclick = ()=>{
        pxPerDay = Math.min(40, pxPerDay + 2);
        zoomSlider.value = pxPerDay;
        render();
    };
    document.getElementById("zoomOut").onclick = ()=>{
        pxPerDay = Math.max(6, pxPerDay - 2);
        zoomSlider.value = pxPerDay;
        render();
    };
    zoomSlider.oninput = (e)=>{
        pxPerDay = parseInt(e.target.value, 10);
        render();
    };
    document.getElementById("showToday").onchange = (e)=>{
        showTodayMarker = e.target.checked;
        render();
    };
    document.getElementById("filterToday").onchange = (e)=>{
        filterToday = e.target.checked;
        render();
    };
}
render();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./timelineItems.js":"FMnwD","./assignLanes.js":"d7Zep"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"FMnwD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const timelineItems = [
    {
        id: 1,
        start: "2021-01-14",
        end: "2021-01-22",
        name: "Recruit translators"
    },
    {
        id: 2,
        start: "2021-01-17",
        end: "2021-01-31",
        name: "Create lesson plan 1"
    },
    {
        id: 3,
        start: "2021-02-05",
        end: "2021-02-13",
        name: "Translate phrases for lesson 1"
    },
    {
        id: 4,
        start: "2021-02-07",
        end: "2021-03-08",
        name: "Create dark mode design"
    },
    {
        id: 5,
        start: "2021-02-14",
        end: "2021-02-22",
        name: "Recruit copyeditors"
    },
    {
        id: 6,
        start: "2021-02-18",
        end: "2021-02-24",
        name: "Proofread translations for lesson 1"
    },
    {
        id: 7,
        start: "2021-02-20",
        end: "2021-02-22",
        name: "Finalize logo"
    },
    {
        id: 8,
        start: "2021-02-21",
        end: "2021-03-22",
        name: "Implement dark mode"
    },
    {
        id: 9,
        start: "2021-02-21",
        end: "2021-02-28",
        name: "Finalize lesson plan 1"
    },
    {
        id: 10,
        start: "2021-02-23",
        end: "2021-02-23",
        name: "Approve logo"
    },
    {
        id: 11,
        start: "2021-03-03",
        end: "2021-03-29",
        name: "Create lesson plan 2"
    },
    {
        id: 12,
        start: "2021-03-30",
        end: "2021-04-08",
        name: "Translate phrases for lesson 2"
    },
    {
        id: 13,
        start: "2021-04-01",
        end: "2021-04-04",
        name: "Debug mobile notification error"
    },
    {
        id: 14,
        start: "2021-04-05",
        end: "2021-04-06",
        name: "Test debugged mobile notifications"
    },
    {
        id: 15,
        start: "2021-04-16",
        end: "2021-04-30",
        name: "Beta test"
    },
    {
        id: 16,
        start: "2021-05-01",
        end: "2021-05-01",
        name: "Launch day"
    }
];
exports.default = timelineItems;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d7Zep":[function(require,module,exports,__globalThis) {
/**
 * @param {Array<{id:number,start:string,end:string,name:string}>} items
 * @param {{ labelBufferDays?: number }} options
 * @returns {Array<Array<any>>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "assignLanes", ()=>assignLanes);
function assignLanes(items, { labelBufferDays = 0.35 } = {}) {
    const sortedItems = [
        ...items
    ].sort((a, b)=>new Date(a.start) - new Date(b.start));
    const lanes = [];
    function canPlace(lane, item) {
        const last = lane[lane.length - 1];
        const bufferedEnd = new Date(new Date(last.end).getTime() + labelBufferDays * 86400000);
        return bufferedEnd < new Date(item.start);
    }
    for (const item of sortedItems){
        let placed = false;
        for (const lane of lanes)if (canPlace(lane, item)) {
            lane.push(item);
            placed = true;
            break;
        }
        if (!placed) lanes.push([
            item
        ]);
    }
    return lanes;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["5j6Kf","a0t4e"], "a0t4e", "parcelRequire9642", {})

//# sourceMappingURL=timeline.31b563d9.js.map
