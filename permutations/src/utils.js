export const insertAt = (string, replace, index) => {
  return string.slice(0, index) + replace + string.slice(index);
};

export const unique = s => {
  for (let i = 0; i < s.length; i++) {
    for (let u = i + 1; u < s.length; u++) {
      if (s[u] != s[i]) break;
      else return false;
    }
  }
  return true;
};

export const makeSpaces = (str, acc) => {
  for (; acc > 0; acc--) str = " " + str;
};
