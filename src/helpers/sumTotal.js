function sumAllElementsByNameSingleLine(items, targetName) {
  return items.reduce(
    (acc, curr) => (curr[targetName] ? acc + curr[targetName] : acc),
    0
  );
}
export { sumAllElementsByNameSingleLine };
