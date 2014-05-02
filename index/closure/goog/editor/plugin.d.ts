// Generated Fri May  2 10:36:56 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/editor/command.d.ts" />
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
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.editor.Plugin {

    /**
     * An enum of operations that plugins may support.
     * @enum {number}
     */
    enum Op { KEYDOWN, KEYPRESS, KEYUP, SELECTION, SHORTCUT, EXEC_COMMAND, QUERY_COMMAND, PREPARE_CONTENTS_HTML, CLEAN_CONTENTS_HTML, CLEAN_CONTENTS_DOM } 

    /**
     * A map from plugin operations to the names of the methods that
     * invoke those operations.
     */
    var OPCODE: any /*missing*/;

    /**
     * A set of op codes that run even on disabled plugins.
     */
    var IRREPRESSIBLE_OPS: any /*missing*/;
}

declare module goog.editor {

    /**
     * Abstract API for trogedit plugins.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Plugin extends goog.events.EventTarget {
        /**
         * Abstract API for trogedit plugins.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor();
    
        /**
         * The field object this plugin is attached to.
         * @type {goog.editor.Field}
         * @protected
         * @deprecated Use goog.editor.Plugin.getFieldObject and
         *     goog.editor.Plugin.setFieldObject.
         */
        fieldObject: goog.editor.Field;
    
        /**
         * @return {goog.dom.DomHelper?} The dom helper object associated with the
         *     currently active field.
         */
        getFieldDomHelper(): goog.dom.DomHelper;
    
        /**
         * The logger for this plugin.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /**
         * Sets the field object for use with this plugin.
         * @return {goog.editor.Field} The editable field object.
         * @protected
         * @suppress {deprecated} Until fieldObject can be made private.
         */
        getFieldObject(): goog.editor.Field;
    
        /**
         * Sets the field object for use with this plugin.
         * @param {goog.editor.Field} fieldObject The editable field object.
         * @protected
         * @suppress {deprecated} Until fieldObject can be made private.
         */
        setFieldObject(fieldObject: goog.editor.Field): void;
    
        /**
         * Registers the field object for use with this plugin.
         * @param {goog.editor.Field} fieldObject The editable field object.
         */
        registerFieldObject(fieldObject: goog.editor.Field): void;
    
        /**
         * Unregisters and disables this plugin for the current field object.
         * @param {goog.editor.Field} fieldObj The field object. For single-field
         *     plugins, this parameter is ignored.
         */
        unregisterFieldObject(fieldObj: goog.editor.Field): void;
    
        /**
         * Enables this plugin for the specified, registered field object. A field
         * object should only be enabled when it is loaded.
         * @param {goog.editor.Field} fieldObject The field object.
         */
        enable(fieldObject: goog.editor.Field): void;
    
        /**
         * Disables this plugin for the specified, registered field object.
         * @param {goog.editor.Field} fieldObject The field object.
         */
        disable(fieldObject: goog.editor.Field): void;
    
        /**
         * Returns whether this plugin is enabled for the field object.
         *
         * @param {goog.editor.Field} fieldObject The field object.
         * @return {boolean} Whether this plugin is enabled for the field object.
         */
        isEnabled(fieldObject: goog.editor.Field): boolean;
    
        /**
         * Set if this plugin should automatically be disposed when the registered
         * field is disposed.
         * @param {boolean} autoDispose Whether to autoDispose.
         */
        setAutoDispose(autoDispose: boolean): void;
    
        /**
         * @return {boolean} Whether or not this plugin should automatically be disposed
         *     when it's registered field is disposed.
         */
        isAutoDispose(): boolean;
    
        /**
         * @return {boolean} If true, field will not disable the command
         *     when the field becomes uneditable.
         */
        activeOnUneditableFields: any /*missing*/;
    
        /**
         * @param {string} command The command to check.
         * @return {boolean} If true, field will not dispatch change events
         *     for commands of this type. This is useful for "seamless" plugins like
         *     dialogs and lorem ipsum.
         */
        isSilentCommand: any /*missing*/;
    
        /**
         * @return {string} The ID unique to this plugin class. Note that different
         *     instances off the plugin share the same classId.
         */
        getTrogClassId: any /*missing*/;
    
        /**
         * Handles keydown. It is run before handleKeyboardShortcut and if it returns
         * true handleKeyboardShortcut will not be called.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins or handleKeyboardShortcut.
         */
        handleKeyDown: any /*missing*/;
    
        /**
         * Handles keypress. It is run before handleKeyboardShortcut and if it returns
         * true handleKeyboardShortcut will not be called.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins or handleKeyboardShortcut.
         */
        handleKeyPress: any /*missing*/;
    
        /**
         * Handles keyup.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins.
         */
        handleKeyUp: any /*missing*/;
    
        /**
         * Handles selection change.
         * @param {!goog.events.BrowserEvent=} opt_e The browser event.
         * @param {!Node=} opt_target The node the selection changed to.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins.
         */
        handleSelectionChange: any /*missing*/;
    
        /**
         * Handles keyboard shortcuts.  Preferred to using handleKey* as it will use
         * the proper event based on browser and will be more performant. If
         * handleKeyPress/handleKeyDown returns true, this will not be called. If the
         * plugin handles the shortcut, it is responsible for dispatching appropriate
         * events (change, selection change at the time of this comment). If the plugin
         * calls execCommand on the editable field, then execCommand already takes care
         * of dispatching events.
         * NOTE: For performance reasons this is only called when any key is pressed
         * in conjunction with ctrl/meta keys OR when a small subset of keys (defined
         * in goog.editor.Field.POTENTIAL_SHORTCUT_KEYCODES_) are pressed without
         * ctrl/meta keys. We specifically don't invoke it when altKey is pressed since
         * alt key is used in many i8n UIs to enter certain characters.
         * @param {!goog.events.BrowserEvent} e The browser event.
         * @param {string} key The key pressed.
         * @param {boolean} isModifierPressed Whether the ctrl/meta key was pressed or
         *     not.
         * @return {boolean} Whether the event was handled and thus should *not* be
         *     propagated to other plugins. We also call preventDefault on the event if
         *     the return value is true.
         */
        handleKeyboardShortcut: any /*missing*/;
    
        /**
         * Handles execCommand. This default implementation handles dispatching
         * BEFORECHANGE, CHANGE, and SELECTIONCHANGE events, and calls
         * execCommandInternal to perform the actual command. Plugins that want to
         * do their own event dispatching should override execCommand, otherwise
         * it is preferred to only override execCommandInternal.
         *
         * This version of execCommand will only work for single field plugins.
         * Multi-field plugins must override execCommand.
         *
         * @param {string} command The command to execute.
         * @param {...*} var_args Any additional parameters needed to
         *     execute the command.
         * @return {*} The result of the execCommand, if any.
         */
        execCommand(command: string, ...var_args: any[]): any;
    
        /**
         * Handles execCommand. This default implementation does nothing, and is
         * called by execCommand, which handles event dispatching. This method should
         * be overriden by plugins that don't need to do their own event dispatching.
         * If custom event dispatching is needed, execCommand shoul be overriden
         * instead.
         *
         * @param {string} command The command to execute.
         * @param {...*} var_args Any additional parameters needed to
         *     execute the command.
         * @return {*} The result of the execCommand, if any.
         * @protected
         */
        execCommandInternal: any /*missing*/;
    
        /**
         * Gets the state of this command if this plugin serves that command.
         * @param {string} command The command to check.
         * @return {*} The value of the command.
         */
        queryCommandValue: any /*missing*/;
    
        /**
         * Prepares the given HTML for editing. Strips out content that should not
         * appear in an editor, and normalizes content as appropriate. The inverse
         * of cleanContentsHtml.
         *
         * This op is invoked even on disabled plugins.
         *
         * @param {string} originalHtml The original HTML.
         * @param {Object} styles A map of strings. If the plugin wants to add
         *     any styles to the field element, it should add them as key-value
         *     pairs to this object.
         * @return {string} New HTML that's ok for editing.
         */
        prepareContentsHtml: any /*missing*/;
    
        /**
         * Cleans the contents of the node passed to it. The node contents are modified
         * directly, and the modifications will subsequently be used, for operations
         * such as saving the innerHTML of the editor etc. Since the plugins act on
         * the DOM directly, this method can be very expensive.
         *
         * This op is invoked even on disabled plugins.
         *
         * @param {!Element} fieldCopy The copy of the editable field which
         *     needs to be cleaned up.
         */
        cleanContentsDom: any /*missing*/;
    
        /**
         * Cleans the html contents of Trogedit. Both cleanContentsDom and
         * and cleanContentsHtml will be called on contents extracted from Trogedit.
         * The inverse of prepareContentsHtml.
         *
         * This op is invoked even on disabled plugins.
         *
         * @param {string} originalHtml The trogedit HTML.
         * @return {string} Cleaned-up HTML.
         */
        cleanContentsHtml: any /*missing*/;
    
        /**
         * Whether the string corresponds to a command this plugin handles.
         * @param {string} command Command string to check.
         * @return {boolean} Whether the plugin handles this type of command.
         */
        isSupportedCommand(command: string): boolean;
    }
}

