
/**
 * Add leading zeros.
 *
 * @param {String} str
 * @param {Number?} grouping
 * @api public
 */

module.exports = (str, grouping = 4) => {
  const length = str.length
  const total = Math.ceil(length / grouping) * grouping
  if (total !== length) {
    var l = total - length
    while (l--) str = '0' + str
  }
  return str
}
