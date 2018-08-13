/* Given two sentences words1, words2 (each represented as an array of strings), and a list of similar word pairs pairs, determine if two sentences are similar.

For example, "great acting skills" and "fine drama talent" are similar, if the similar word pairs are pairs = [["great", "fine"], ["acting","drama"], ["skills","talent"]].

Note that the similarity relation is not transitive. For example, if "great" and "fine" are similar, and "fine" and "good" are similar, "great" and "good" are not necessarily similar.

However, similarity is symmetric. For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.

Also, a word is always similar with itself. For example, the sentences words1 = ["great"], words2 = ["great"], pairs = [] are similar, even though there are no specified similar word pairs.

Finally, sentences can only be similar if they have the same number of words. So a sentence like words1 = ["great"] can never be similar to words2 = ["doubleplus","good"].

Note:

The length of words1 and words2 will not exceed 1000.
The length of pairs will not exceed 2000.
The length of each pairs[i] will be 2.
The length of each words[i] and pairs[i][j] will be in the range [1, 20]. */

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
var areSentencesSimilar = function(words1, words2, pairs) {
  if (words1.length != words2.length) return false
  for (var i = 0; i < words1.length; i++) {
    if (words1[i] == words2[i]) continue
    var found = find(words1[i], words2[i])
    if (found) continue
    else break
  }
  return (i == words1.length) ? true : false

  function find(word1, word2) {
    for (var i = 0; i < pairs.length; i++) {
      if (word1 == pairs[i][0]) {
        if (word2 == pairs[i][1]) return true
      }
      if (word1 == pairs[i][1]) {
        if (word2 == pairs[i][0]) return true
      }
    }
    return false
  }
};

console.log(areSentencesSimilar(["an", "extraordinary", "meal"], ["one", "good", "dinner"], [
  ["great", "good"],
  ["extraordinary", "good"],
  ["well", "good"],
  ["wonderful", "good"],
  ["excellent", "good"],
  ["fine", "good"],
  ["nice", "good"],
  ["any", "one"],
  ["some", "one"],
  ["unique", "one"],
  ["the", "one"],
  ["an", "one"],
  ["single", "one"],
  ["a", "one"],
  ["truck", "car"],
  ["wagon", "car"],
  ["automobile", "car"],
  ["auto", "car"],
  ["vehicle", "car"],
  ["entertain", "have"],
  ["drink", "have"],
  ["eat", "have"],
  ["take", "have"],
  ["fruits", "meal"],
  ["brunch", "meal"],
  ["breakfast", "meal"],
  ["food", "meal"],
  ["dinner", "meal"],
  ["super", "meal"],
  ["lunch", "meal"],
  ["possess", "own"],
  ["keep", "own"],
  ["have", "own"],
  ["extremely", "very"],
  ["actually", "very"],
  ["really", "very"],
  ["super", "very"]
]))