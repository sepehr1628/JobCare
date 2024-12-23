export function handleRate(array) {
  const rateSum = array?.reduce((accu, cur) => accu + cur, 0);
  const reviewNum = array?.length;
  const rateAverage = rateSum / reviewNum;
  return { rateAverage, reviewNum };
}
