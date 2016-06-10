declare module 'redux-api-middleware' {
  interface CALL_API {}
  interface getJSON {}
}
// declare var _Symbol: any;
// declare var CALL_API: any;
// }
//
// declare var _interopRequireDefault: any;
// declare var _CALL_API: any;
// declare var _CALL_API2: any;
// declare var _validation: any;
// declare var _errors: any;
// declare var _util: any;
// declare var _middleware: any;
//
// declare var _extends: any;
// declare var _regeneratorRuntime: any;
// declare var _interopRequireDefault: any;
// declare var _isomorphicFetch: any;
// declare var _isomorphicFetch2: any;
// declare var _lodashIsplainobject: any;
// declare var _lodashIsplainobject2: any;
// declare var _CALL_API: any;
// declare var _CALL_API2: any;
// declare var _validation: any;
// declare var _errors: any;
// declare var _util: any;
// /**
//  * A Redux middleware that processes RSAA actions.
//  *
//  * @type {ReduxMiddleware}
//  * @access public
//  */
// declare function apiMiddleware(_ref: any): (next: any) => (action: any) => any;
//
// declare var _extends: any;
// declare var _regeneratorRuntime: any;
// declare var _Promise: any;
// declare var _errors: any;
// /**
//  * Extract JSON body from a server response
//  *
//  * @function getJSON
//  * @access public
//  * @param {object} res - A raw response object
//  * @returns {promise|undefined}
//  */
// declare function getJSON(res: any): any;
// /**
//  * Blow up string or symbol types into full-fledged type descriptors,
//  *   and add defaults
//  *
//  * @function normalizeTypeDescriptors
//  * @access private
//  * @param {array} types - The [CALL_API].types from a validated RSAA
//  * @returns {array}
//  */
// declare function normalizeTypeDescriptors(types: any): any[];
// /**
//  * Evaluate a type descriptor to an FSA
//  *
//  * @function actionWith
//  * @access private
//  * @param {object} descriptor - A type descriptor
//  * @param {array} args - The array of arguments for `payload` and `meta` function properties
//  * @returns {object}
//  */
// declare function actionWith(descriptor: any, args: any): any;
//
// declare var _interopRequireDefault: any;
// declare var _CALL_API: any;
// declare var _CALL_API2: any;
// declare var _lodashIsplainobject: any;
// declare var _lodashIsplainobject2: any;
// /**
//  * Is the given action a plain JavaScript object with a [CALL_API] property?
//  *
//  * @function isRSAA
//  * @access public
//  * @param {object} action - The action to check
//  * @returns {boolean}
//  */
// declare function isRSAA(action: any): any;
// /**
//  * Is the given object a valid type descriptor?
//  *
//  * @function isValidTypeDescriptor
//  * @access private
//  * @param {object} obj - The object to check agains the type descriptor definition
//  * @returns {boolean}
//  */
// declare function isValidTypeDescriptor(obj: any): boolean;
// /**
//  * Checks an action against the RSAA definition, returning a (possibly empty)
//  * array of validation errors.
//  *
//  * @function validateRSAA
//  * @access public
//  * @param {object} action - The action to check against the RSAA definition
//  * @returns {array}
//  */
// declare function validateRSAA(action: any): any[];
// /**
//  * Is the given action a valid RSAA?
//  *
//  * @function isValidRSAA
//  * @access public
//  * @param {object} action - The action to check against the RSAA definition
//  * @returns {boolean}
//  */
// declare function isValidRSAA(action: any): boolean;
