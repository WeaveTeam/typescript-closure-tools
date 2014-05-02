// Generated Thu May  1 21:07:04 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />

declare module goog.labs.style.PixelDensityMonitor {

    /**
     * The two different pixel density modes on which the various ratios between
     * physical and device pixels are mapped.
     * @enum {number}
     */
    enum Density { NORMAL, HIGH } 

    /**
     * The events fired by the PixelDensityMonitor.
     * @enum {string}
     */
    enum EventType { CHANGE } 
}

declare module goog.labs.style {

    /**
     * Monitors the window for changes to the ratio between device and screen
     * pixels, e.g. when the user moves the window from a high density screen to a
     * screen with normal density. Dispatches
     * goog.labs.style.PixelDensityMonitor.EventType.CHANGE events when the density
     * changes between the two predefined values NORMAL and HIGH.
     *
     * This class uses the window.devicePixelRatio value which is supported in
     * WebKit and FF18. If the value does not exist, it will always return a
     * NORMAL density. It requires support for MediaQueryList to detect changes to
     * the devicePixelRatio.
     *
     * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper which contains the
     *     document associated with the window to listen to. Defaults to the one in
     *     which this code is executing.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class PixelDensityMonitor extends goog.events.EventTarget {
        /**
         * Monitors the window for changes to the ratio between device and screen
         * pixels, e.g. when the user moves the window from a high density screen to a
         * screen with normal density. Dispatches
         * goog.labs.style.PixelDensityMonitor.EventType.CHANGE events when the density
         * changes between the two predefined values NORMAL and HIGH.
         *
         * This class uses the window.devicePixelRatio value which is supported in
         * WebKit and FF18. If the value does not exist, it will always return a
         * NORMAL density. It requires support for MediaQueryList to detect changes to
         * the devicePixelRatio.
         *
         * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper which contains the
         *     document associated with the window to listen to. Defaults to the one in
         *     which this code is executing.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Starts monitoring for changes in pixel density.
         */
        start(): void;
    
        /**
         * @return {goog.labs.style.PixelDensityMonitor.Density} The density for the
         *     window.
         */
        getDensity(): goog.labs.style.PixelDensityMonitor.Density;
    }
}
