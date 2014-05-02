// Generated Fri May  2 10:44:40 PDT 2014

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
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/datasource/datasource.d.ts" />
/// <reference path="../../goog/datasource/expr.d.ts" />

declare module goog.ds.DataManager {

    /**
     * Get the global instance
     * @return {!goog.ds.DataManager} The data manager singleton.
     */
    function getInstance(): goog.ds.DataManager;

    /**
     * Clears the global instance (for unit tests to reset state).
     */
    function clearInstance(): void;
}

declare module goog.ds {

    /**
     * Create a DataManger
     * @extends {goog.ds.DataNode}
     * @constructor
     * @final
     */
    class DataManager extends goog.ds.DataNode {
        /**
         * Create a DataManger
         * @extends {goog.ds.DataNode}
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Add a data source
         * @param {goog.ds.DataNode} ds The data source.
         * @param {boolean=} opt_autoload Whether to automatically load the data,
         *   defaults to false.
         * @param {string=} opt_name Optional name, can also get name
         *   from the datasource.
         */
        addDataSource(ds: goog.ds.DataNode, opt_autoload?: boolean, opt_name?: string): void;
    
        /**
         * Create an alias for a data path, very similar to assigning a variable.
         * For example, you can set $CurrentContact -> $Request/Contacts[5], and all
         * references to $CurrentContact will be procesed on $Request/Contacts[5].
         *
         * Aliases will hide datasources of the same name.
         *
         * @param {string} name Alias name, must be a top level path ($Foo).
         * @param {string} dataPath Data path being aliased.
         */
        aliasDataSource(name: string, dataPath: string): void;
    
        /**
         * Gets a named child node of the current node.
         *
         * @param {string} name The node name.
         * @return {goog.ds.DataNode} The child node,
         *   or null if no node of this name exists.
         */
        getDataSource(name: string): goog.ds.DataNode;
    
        /**
         * Get the total count of events fired (mostly for debugging)
         * @return {number} Count of events.
         */
        getEventCount(): number;
    
        /**
         * Adds a listener
         * Listeners should fire when any data with path that has dataPath as substring
         * is changed.
         * TODO(user) Look into better listener handling
         *
         * @param {Function} fn Callback function, signature function(dataPath, id).
         * @param {string} dataPath Fully qualified data path.
         * @param {string=} opt_id A value passed back to the listener when the dataPath
         *   is matched.
         */
        addListener(fn: Function, dataPath: string, opt_id?: string): void;
    
        /**
         * Adds an indexed listener.
         *
         * Indexed listeners allow for '*' in data paths. If a * exists, will match
         * all values and return the matched values in an array to the callback.
         *
         * Currently uses a promiscuous match algorithm: Matches everything before the
         * first '*', and then does a regex match for all of the returned events.
         * Although this isn't optimized, it is still an improvement as you can collapse
         * 100's of listeners into a single regex match
         *
         * @param {Function} fn Callback function, signature (dataPath, id, indexes).
         * @param {string} dataPath Fully qualified data path.
         * @param {string=} opt_id A value passed back to the listener when the dataPath
         *   is matched.
         */
        addIndexedListener(fn: Function, dataPath: string, opt_id?: string): void;
    
        /**
         * Removes indexed listeners with a given callback function, and optional
         * matching datapath and matching id.
         *
         * @param {Function} fn Callback function, signature function(dataPath, id).
         * @param {string=} opt_dataPath Fully qualified data path.
         * @param {string=} opt_id A value passed back to the listener when the dataPath
         *   is matched.
         */
        removeIndexedListeners(fn: Function, opt_dataPath?: string, opt_id?: string): void;
    
        /**
         * Removes listeners with a given callback function, and optional
         * matching dataPath and matching id
         *
         * @param {Function} fn Callback function, signature function(dataPath, id).
         * @param {string=} opt_dataPath Fully qualified data path.
         * @param {string=} opt_id A value passed back to the listener when the dataPath
         *   is matched.
         */
        removeListeners(fn: Function, opt_dataPath?: string, opt_id?: string): void;
    
        /**
         * Get the total number of listeners (per expression listened to, so may be
         * more than number of times addListener() has been called
         * @return {number} Number of listeners.
         */
        getListenerCount(): number;
    
        /**
         * Disables the sending of all data events during the execution of the given
         * callback. This provides a way to avoid useless notifications of small changes
         * when you will eventually send a data event manually that encompasses them
         * all.
         *
         * Note that this function can not be called reentrantly.
         *
         * @param {Function} callback Zero-arg function to execute.
         */
        runWithoutFiringDataChanges(callback: Function): void;
    
        /**
         * Fire a data change event to all listeners
         *
         * If the path matches the path of a listener, the listener will fire
         *
         * If your path is the parent of a listener, the listener will fire. I.e.
         * if $Contacts/bob@bob.com changes, then we will fire listener for
         * $Contacts/bob@bob.com/Name as well, as the assumption is that when
         * a parent changes, all children are invalidated.
         *
         * If your path is the child of a listener, the listener may fire, depending
         * on the ancestor depth.
         *
         * A listener for $Contacts might only be interested if the contact name changes
         * (i.e. $Contacts doesn't fire on $Contacts/bob@bob.com/Name),
         * while a listener for a specific contact might
         * (i.e. $Contacts/bob@bob.com would fire on $Contacts/bob@bob.com/Name).
         * Adding "/..." to a lisetener path listens to all children, and adding "/*" to
         * a listener path listens only to direct children
         *
         * @param {string} dataPath Fully qualified data path.
         */
        fireDataChange(dataPath: string): void;
    }
}

