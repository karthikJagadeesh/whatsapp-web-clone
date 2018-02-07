export const range = (times, fn) => {
  let container = [];
  for (let i = 0; i < times; i++) {
    container.push(fn(i));
  }
  return container;
};

export const colors = [
  "#E5DDD5",
  "#cdecdd",
  "#afd9c8",
  "#7acca6",
  "#c8eaec",
  "#aadcd9",
  "#67d6da",
  "#6ec4d5",
  "#f3dbd6",
  "#f3d6e2",
  "#fbcbd3",
  "#ffa9a9",
  "#ccdbed",
  "#d8d4ec",
  "#d8d4ec",
  "#d1dfb3",
  "#dfe1b6",
  "#e7e0aa",
  "#f7eaaa",
  "#ffd2a5",
  "#ff8b8d",
  "#ff5878",
  "#f66055",
  "#dd6e4e",
  "#e7e465",
  "#73c981",
  "#1c94a5",
  "#1b9fda",
  "#2759a7",
  "#74676a",
  "#462f4b",
  "#dfe4ea",
  "#dadbdf",
  "#c1c3c5",
  "#7f91a4",
  "#54626f",
  "#1f333e",
  "#0f1c22"
];
