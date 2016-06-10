declare var _interopRequireDefault: any;
declare var _CALL_API: any;
declare var _CALL_API2: any;
declare var _lodashIsplainobject: any;
declare var _lodashIsplainobject2: any;
/**
 * Is the given action a plain JavaScript object with a [CALL_API] property?
 *
 * @function isRSAA
 * @access public
 * @param {object} action - The action to check
 * @returns {boolean}
 */
declare function isRSAA(action: any): any;
/**
 * Is the given object a valid type descriptor?
 *
 * @function isValidTypeDescriptor
 * @access private
 * @param {object} obj - The object to check agains the type descriptor definition
 * @returns {boolean}
 */
declare function isValidTypeDescriptor(obj: any): boolean;
/**
 * Checks an action against the RSAA definition, returning a (possibly empty)
 * array of validation errors.
 *
 * @function validateRSAA
 * @access public
 * @param {object} action - The action to check against the RSAA definition
 * @returns {array}
 */
declare function validateRSAA(action: any): any[];
/**
 * Is the given action a valid RSAA?
 *
 * @function isValidRSAA
 * @access public
 * @param {object} action - The action to check against the RSAA definition
 * @returns {boolean}
 */
declare function isValidRSAA(action: any): boolean;
