/* Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL. */

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function (longUrl) {
  if (getEncoded.has(longUrl)) return getEncoded.get(longUrl)
  const chars = []
  // a -> 97, A -> 65, 0 -> 48
  for (let i = 0; i < 26; i++) {
    chars.push(...[65 + i, 97 + i].map(charCode => String.fromCharCode(charCode)))
  }
  for (let i = 0; i < 10; i++) {
    chars.push(String.fromCharCode(48 + i))
  }
  const tail = new Array(6).fill(null).map(() => chars[Math.floor(Math.random() * chars.length)])
  const shortUrl = `http://tinyurl.com/${tail.join('')}`
  getEncoded.set(longUrl) = shortUrl
  getDecoded.set(shortUrl) = longUrl
  return shortUrl
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return getDecoded.get(shortUrl)
};

const getEncoded = new Map()
const getDecoded = new Map()

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
console.log(encode('https://leetcode.com/problems/design-tinyurl'))
console.log(encode('https://leetcode.com/problems/design-tinyurl'))