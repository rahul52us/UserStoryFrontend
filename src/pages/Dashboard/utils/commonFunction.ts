const getIdFromObject = (data: any) => {
  var arr: any = [];
  if (Array.isArray(data)) {
    data.forEach((item: any) => {
      arr.push(item._id);
    });
    return arr;
  } else {
    return arr;
  }
};

export { getIdFromObject };
