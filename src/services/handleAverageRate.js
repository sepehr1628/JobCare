export function handleRate(array) {
  if (!array || array.length === 0) {
    return 0;
  }
  const rateSum = array?.reduce((accu, cur) => accu + cur, 0);
  const reviewNum = array?.length;
  const rateAverage = rateSum / reviewNum;
  return { rateAverage, reviewNum };
}
