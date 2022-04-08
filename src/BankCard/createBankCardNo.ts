function randomVal(len = 10, prefixStr = ''): string {
  if (len-- > 0) {
    const r = Math.floor(Math.random() * 10);
    return randomVal(len, prefixStr + r);
  }
  return prefixStr;
}

function sumCheckCode(num: number | string) {
  const numArr = (num + '').replace(/\D/g, '').split('').reverse();

  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    const currNum = parseInt(numArr[i]);
    sum += i % 2 === 0 ? currNum * 2 - (currNum > 4 ? 9 : 0) : currNum;
  }
  const mod = sum % 10;
  return mod !== 0 ? 10 - mod : 0;
}

function createBankCardNo(cardBin = '', len = 16) {
  const cardNo = randomVal(len - cardBin.length - 1, cardBin);
  return cardNo + sumCheckCode(cardNo);
}

export default createBankCardNo;
