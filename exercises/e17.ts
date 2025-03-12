export function minBy<Type>(
  array: Type[],
  callback: (element: Type) => number
): Type | undefined {
  if (array.length === 0) return undefined;
  let best = array[0];
  let bestValue = callback(best!);
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    const currentValue = callback(current!);
    if (currentValue < bestValue) {
      best = current;
      bestValue = currentValue;
    }
  }
  return best;
}

export function maxBy<Type>(
  array: Type[],
  cb: (ele: Type) => number
): Type | undefined {
  if (array.length === 0) {
    return undefined;
  }
  let best = array[0];
  let bestValue = cb(best!);
  for (let i = 1; i < array.length; i++) {
    const current = array[i];
    const currentValue = cb(current!);
    if (currentValue > bestValue) {
      best = current;
      bestValue = currentValue;
    }
  }
  return best;
}
