/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let firstLevel;
  let firstLevelCount = 0;
  let secondLevel;
  let thirdLevel;
  let secondLevelCount = 0;
  const thirdLevelCount = 1;
  let secondLevelStr = '';
  let thirdLevelStr = '';
  const results = {};

  if (domains.length === 0) {
    return results;
  }
  for (let i = 0; i < domains.length; i++) {
    [firstLevel] = domains[i].match(/\.[a-z]+$/);
    [, secondLevel] = domains[i].match(/([a-z]+)\.[a-z]{3}$/);
    [, thirdLevel] = domains[i].match(/([a-z]+)\.[a-z]+\.[a-z]{3}$/) || '';
    if (firstLevel) {
      firstLevelCount++;
    }
    if (secondLevel) {
      secondLevelCount++;
    }
  }
  secondLevelStr += `${firstLevel}.${secondLevel}`;
  results[firstLevel] = firstLevelCount;
  results[secondLevelStr] = secondLevelCount;
  if (thirdLevel) {
    thirdLevelStr += `${firstLevel}.${secondLevel}.${thirdLevel}`;
    results[thirdLevelStr] = thirdLevelCount;
  }
  return results;
}

module.exports = getDNSStats;
