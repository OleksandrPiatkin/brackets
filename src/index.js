module.exports = function check(str, bracketsConfig) {
  let string = str;
  const bracketsArray = [];
  bracketsConfig.forEach(element => bracketsArray.push(element.join("")));

  const recursion = () => {
    if (string.length === 0) {
      return true;
    }
    for (const element of bracketsArray) {
      if (string.includes(element)) {
        string = string.replace(element, "");
        return recursion();
      }
    }
    return false;
  };
  return recursion();
};