function isMatch(text, pattern) {
  return isMatchHelper(text, pattern, 0, 0);
}
// #  Input:
// #    text - the text to check,
// #    pattern - the regular expression to be checked,
// #    textIndex - the index the text is checked from
// #    patIndex -  the index the pattern is checked from
// #  Output:
// #   true if the text from the index textIndex matches
// #   the regular expression pattern from the pattern Index.
// #   E.g. isMatchHelper(“aaabb”,”cab*”,2, 1) since the text
// #   from index 2 (“abb”) matches the pattern from index 1 (“ab*”)
function isMatchHelper(text, pattern, textIndex, patIndex) {
  // # base cases - one of the indexes reached the end of text or pattern
  if (textIndex >= text.length) {
    if (patIndex >= pattern.length) {
      return true;
    } else {
      if (patIndex + 1 < pattern.length && pattern[patIndex + 1] == "*") {
        return isMatchHelper(text, pattern, textIndex, patIndex + 2);
      } else {
        return false;
      }
    }
  } else if (patIndex >= pattern.length && textIndex < text.length) {
    return false;
  }
  // # string matching for character followed by '*'
  else if (patIndex + 1 < pattern.length && pattern[patIndex + 1] == "*") {
    if (pattern[patIndex] == "." || text[textIndex] == pattern[patIndex]) {
      return (
        isMatchHelper(text, pattern, textIndex, patIndex + 2) ||
        isMatchHelper(text, pattern, textIndex + 1, patIndex)
      );
    } else {
      return isMatchHelper(text, pattern, textIndex, patIndex + 2);
    }
  }
  // # string matching for '.' or ordinary char.
  else if (pattern[patIndex] == "." || pattern[patIndex] == text[textIndex]) {
    return isMatchHelper(text, pattern, textIndex + 1, patIndex + 1);
  } else {
    return false;
  }
}

console.log(isMatch("aab", "aa."));
