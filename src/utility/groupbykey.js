const groupbykey = (arr, key) =>
  arr.reduce((acc, cur) => {
    var needArr = acc[cur[key]] ? acc[cur[key]] : [];
    acc[cur[key]] = [...needArr, cur];
    return acc;
  }, {});

export default groupbykey;
