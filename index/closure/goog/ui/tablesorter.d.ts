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
/// <reference path="../../goog/dom/classlist.d.ts" />

declare module goog.ui.TableSorter {

    /**
     * Table sorter events.
     * @enum {string}
     */
    enum EventType { BEFORESORT, SORT } 

    /**
     * Disables sorting on the specified column
     * @param {*} a First sort value.
     * @param {*} b Second sort value.
     * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
     */
    var noSort: any /*missing*/;

    /**
     * A numeric sort function.
     * @param {*} a First sort value.
     * @param {*} b Second sort value.
     * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
     */
    function numericSort(a: any, b: any): number;

    /**
     * Alphabetic sort function.
     * @param {*} a First sort value.
     * @param {*} b Second sort value.
     * @return {number} Negative if a < b, 0 if a = b, and positive if a > b.
     */
    var alphaSort: any /*missing*/;

    /**
     * Returns a function that is the given sort function in reverse.
     * @param {function(*, *) : number} sortFunction The original sort function.
     * @return {function(*, *) : number} A new sort function that reverses the
     *     given sort function.
     */
    function createReverseSort(sortFunction: (_0: any, _1: any) => number): (_0: any, _1: any) => number;
}

declare module goog.ui {

    /**
     * A table sorter allows for sorting of a table by column.  This component can
     * be used to decorate an already existing TABLE element with sorting
     * features.
     *
     * The TABLE should use a THEAD containing TH elements for the table column
     * headers.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class TableSorter extends goog.ui.Component {
        /**
         * A table sorter allows for sorting of a table by column.  This component can
         * be used to decorate an already existing TABLE element with sorting
         * features.
         *
         * The TABLE should use a THEAD containing TH elements for the table column
         * headers.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the row index (in <thead>) to be used for sorting.
         * By default, the first row (index 0) is used.
         * Must be called before decorate() is called.
         * @param {number} index The row index.
         */
        setSortableHeaderRowIndex(index: number): void;
    
        /**
         * @return {number} The current sort column of the table, or -1 if none.
         */
        getSortColumn(): number;
    
        /**
         * @return {boolean} Whether the last sort was in reverse.
         */
        isSortReversed(): boolean;
    
        /**
         * @return {function(*, *) : number} The default sort function to be used by
         *     all columns.
         */
        getDefaultSortFunction(): (_0: any, _1: any) => number;
    
        /**
         * Sets the default sort function to be used by all columns.  If not set
         * explicitly, this defaults to numeric sorting.
         * @param {function(*, *) : number} sortFunction The new default sort function.
         */
        setDefaultSortFunction(sortFunction: (_0: any, _1: any) => number): void;
    
        /**
         * Gets the sort function to be used by the given column.  Returns the default
         * sort function if no sort function is explicitly set for this column.
         * @param {number} column The column index.
         * @return {function(*, *) : number} The sort function used by the column.
         */
        getSortFunction(column: number): (_0: any, _1: any) => number;
    
        /**
         * Set the sort function for the given column, overriding the default sort
         * function.
         * @param {number} column The column index.
         * @param {function(*, *) : number} sortFunction The new sort function.
         */
        setSortFunction(column: number, sortFunction: (_0: any, _1: any) => number): void;
    
        /**
         * Sort the table contents by the values in the given column.
         * @param {number} column The column to sort by.
         * @param {boolean=} opt_reverse Whether to sort in reverse.
         * @return {boolean} Whether the sort was executed.
         */
        sort(column: number, opt_reverse?: boolean): boolean;
    }
}
