// Generated Thu May  1 21:01:34 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/editor/defines.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />

declare module goog.editor.icontent {

    /**
     * Sets up goog.editor.icontent to always use standards-mode iframes.
     */
    function forceStandardsModeIframes(): void;

    /**
     * Write the initial iframe content in normal mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     * @param {goog.editor.icontent.FieldStyleInfo?} style Style info about
     *     the field, if needed.
     * @param {HTMLIFrameElement} iframe The iframe.
     */
    function writeNormalInitialBlendedIframe(info: goog.editor.icontent.FieldFormatInfo, bodyHtml: string, style: goog.editor.icontent.FieldStyleInfo, iframe: HTMLIFrameElement): void;

    /**
     * Write the initial iframe content in normal mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     * @param {goog.editor.icontent.FieldStyleInfo?} style Style info about
     *     the field, if needed.
     * @param {HTMLIFrameElement} iframe The iframe.
     */
    function writeNormalInitialIframe(info: goog.editor.icontent.FieldFormatInfo, bodyHtml: string, style: goog.editor.icontent.FieldStyleInfo, iframe: HTMLIFrameElement): void;

    /**
     * Write the initial iframe content in IE/HTTPS mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {Document} doc The iframe document.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     */
    function writeHttpsInitialIframe(info: goog.editor.icontent.FieldFormatInfo, doc: Document, bodyHtml: string): void;

    /**
     * A data structure for storing simple rendering info about a field.
     *
     * @param {string} fieldId The id of the field.
     * @param {boolean} standards Whether the field should be rendered in
     *     standards mode.
     * @param {boolean} blended Whether the field is in blended mode.
     * @param {boolean} fixedHeight Whether the field is in fixedHeight mode.
     * @param {Object=} opt_extraStyles Other style attributes for the field,
     *     represented as a map of strings.
     * @constructor
     * @final
     */
    class FieldFormatInfo {
        /**
         * A data structure for storing simple rendering info about a field.
         *
         * @param {string} fieldId The id of the field.
         * @param {boolean} standards Whether the field should be rendered in
         *     standards mode.
         * @param {boolean} blended Whether the field is in blended mode.
         * @param {boolean} fixedHeight Whether the field is in fixedHeight mode.
         * @param {Object=} opt_extraStyles Other style attributes for the field,
         *     represented as a map of strings.
         * @constructor
         * @final
         */
        constructor(fieldId: string, standards: boolean, blended: boolean, fixedHeight: boolean, opt_extraStyles?: Object);
    }

    /**
     * A data structure for storing simple info about the styles of a field.
     * Only needed in Firefox/Blended mode.
     * @param {Element} wrapper The wrapper div around a field.
     * @param {string} css The css for a field.
     * @constructor
     * @final
     */
    class FieldStyleInfo {
        /**
         * A data structure for storing simple info about the styles of a field.
         * Only needed in Firefox/Blended mode.
         * @param {Element} wrapper The wrapper div around a field.
         * @param {string} css The css for a field.
         * @constructor
         * @final
         */
        constructor(wrapper: Element, css: string);
    }
}
