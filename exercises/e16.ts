// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<Type>(
  array: Type[],
  callback: (element: Type, index: number, array: Type[]) => boolean
): Type | undefined {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element !== undefined && callback(element, i, array)) {
      return array[i];
    }
  }
  return undefined;
}
