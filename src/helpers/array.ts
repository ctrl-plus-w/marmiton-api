export const filterNotNull = <T, >(arr: (T | undefined | null)[]): T[] => {
  return arr.filter((el) => el !== undefined && el !== null) as T[];
}
