

module.exports = (str, group = 4) => {
  const length = str.length
  const total = Math.ceil(length / group) * group
  if (total !== length) {
    var l = total - length
    while (l--) {
      str = '0' + str
    }
  }
  return str
}
