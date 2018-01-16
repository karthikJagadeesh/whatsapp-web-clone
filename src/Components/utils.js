const range = (times, fn) => {
  let container = [];
  for (let i = 0; i < times; i++) {
    container.push(fn(i));
  }
  return container;
};

export { range };
