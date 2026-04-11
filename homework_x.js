function getPermutations(str) {
  if (str.length <= 1) {
    return [str];
  }

  const result = new Set();

  function permute(s) {
    if (s.length <= 1) {
      return [s];
    }

    let res = [];

    for (let i = 0; i < s.length; i++) {
      const current = s[i];
      const remaining = s.slice(0, i) + s.slice(i + 1);

      const perms = permute(remaining);

      for (let p of perms) {
        res.push(current + p);
      }
    }

    return res;
  }

  
  const allPerms = permute(str);

  
  for (let p of allPerms) {
    result.add(p);
  }

  return Array.from(result);
}

console.log(getPermutations("abc"));