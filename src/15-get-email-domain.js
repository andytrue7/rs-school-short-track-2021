/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailDomain = email.match(/@([a-z0-9-]+\.[a-z]{2,3})$/)[1];
  return emailDomain;
}

module.exports = getEmailDomain;
