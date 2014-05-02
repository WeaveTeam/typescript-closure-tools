// Generated Thu May  1 21:03:59 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/color/names.d.ts" />
/// <reference path="../../goog/color/color.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/inputhandler.d.ts" />
/// <reference path="../../goog/style/bidi.d.ts" />

declare module goog.ui {

    /**
     * Creates an HSV palette. Allows a user to select the hue, saturation and
     * value/brightness.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {string=} opt_color Optional initial color (default is red).
     * @param {string=} opt_class Optional base for creating classnames (default is
     *     goog.getCssName('goog-hsv-palette')).
     * @extends {goog.ui.Component}
     * @constructor
     */
    class HsvPalette extends goog.ui.Component {
        /**
         * Creates an HSV palette. Allows a user to select the hue, saturation and
         * value/brightness.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {string=} opt_color Optional initial color (default is red).
         * @param {string=} opt_class Optional base for creating classnames (default is
         *     goog.getCssName('goog-hsv-palette')).
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_color?: string, opt_class?: string);
    
        /**
         * DOM element representing the value background image.
         * @type {Element}
         * @protected
         */
        valueBackgroundImageElement: Element;
    
        /**
         * DOM element representing the current color swatch.
         * @type {Element}
         * @protected
         */
        swatchElement: Element;
    
        /**
         * DOM element representing the hex color input text field.
         * @type {Element}
         * @protected
         */
        inputElement: Element;
    
        /**
         * Listener key for the mousemove event (during a drag operation).
         * @type {goog.events.Key}
         * @protected
         */
        mouseMoveListener: goog.events.Key;
    
        /**
         * Listener key for the mouseup event (during a drag operation).
         * @type {goog.events.Key}
         * @protected
         */
        mouseUpListener: goog.events.Key;
    
        /**
         * Gets the color that is currently selected in this color picker.
         * @return {string} The string of the selected color.
         */
        getColor(): string;
    
        /**
         * Alpha transparency of the currently selected color, in [0, 1].
         * For the HSV palette this always returns 1. The HSVA palette overrides
         * this method.
         * @return {number} The current alpha value.
         */
        getAlpha(): number;
    
        /**
         * Updates the text entry field.
         * @protected
         */
        updateInput(): void;
    
        /**
         * Sets which color is selected and update the UI.
         * @param {string} color The selected color.
         */
        setColor(color: string): void;
    
        /**
         * Sets which color is selected.
         * @param {string} color The selected color.
         * @protected
         */
        setColorInternal(color: string): void;
    
        /**
         * Alters the hue, saturation, and/or value of the currently selected color and
         * updates the UI.
         * @param {?number=} opt_hue (optional) hue in [0, 1].
         * @param {?number=} opt_saturation (optional) saturation in [0, 1].
         * @param {?number=} opt_value (optional) value in [0, 255].
         */
        setHsv(opt_hue?: number, opt_saturation?: number, opt_value?: number): void;
    
        /**
         * Updates the position, opacity, and styles for the UI representation of the
         * palette.
         * @protected
         */
        updateUi(): void;
    
        /**
         * Handles mousedown events on palette UI elements.
         * @param {goog.events.BrowserEvent} e Event object.
         * @protected
         */
        handleMouseDown(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles mouseup events on the document, which ends a drag operation.
         * @param {goog.events.Event} e Event object.
         * @protected
         */
        handleMouseUp(e: goog.events.Event): void;
    
        /**
         * Handles input events on the hex value input field.
         * @param {goog.events.Event} e Event object.
         * @protected
         */
        handleInput(e: goog.events.Event): void;
    }
}
