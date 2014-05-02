// Generated Fri May  2 10:43:13 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.testing {

    /**
     * Generic queue for writing unit tests
     * @constructor
     */
    class TestQueue {
        /**
         * Generic queue for writing unit tests
         * @constructor
         */
        constructor();
    
        /**
         * Adds a new event onto the queue.
         * @param {Object} event The event to queue.
         */
        enqueue(event: Object): void;
    
        /**
         * Returns whether the queue is empty.
         * @return {boolean} Whether the queue is empty.
         */
        isEmpty(): boolean;
    
        /**
         * Gets the next event from the queue. Throws an exception if the queue is
         * empty.
         * @param {string=} opt_comment Comment if the queue is empty.
         * @return {Object} The next event from the queue.
         */
        dequeue(opt_comment?: string): Object;
    }
}

