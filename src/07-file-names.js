/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newNames = [];
  let suffix = 0;
  let elemSuffix;
  for (let i = 0; i < names.length; i++) {
    if (i === 0) {
      newNames.push(names[i]);
    } else if (newNames.includes(names[i])) {
      if (names[i] === elemSuffix) {
        suffix--;
      }
      suffix++;
      elemSuffix = `${names[i]}(${suffix})`;
      newNames.push(elemSuffix);
    } else {
      newNames.push(names[i]);
    }
  }
  return newNames;
}

module.exports = renameFiles;
