export default function removeDuplicate(data: string[]) {
  const result: string[] = [];
  data.forEach(d => {
    if (!result.includes(d)) result.push(d)
  });
  return result
}