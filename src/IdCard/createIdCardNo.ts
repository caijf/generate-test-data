import { Gender } from './constants';

function randomVal(len = 10, prefixStr = ''): string {
  if (len-- > 0) {
    const r = Math.floor(Math.random() * 10);
    return randomVal(len, prefixStr + r);
  }
  return prefixStr;
}

function sumCheckCode(id: string) {
  let index = 0;
  let sum = 0;

  for (; index < 17; index++) {
    sum += (Math.pow(2, 17 - index) % 11) * Number(id[index]);
  }

  const num = (12 - (sum % 11)) % 11;
  if (num < 10) {
    return num;
  } else {
    return 'X';
  }
}

function generateGenderCode(gender: Gender) {
  let r = Math.floor(Math.random() * 10);
  if (gender === Gender.Female) {
    if (r % 2 !== 0) {
      r += 1;
    }
  } else {
    if (r % 2 === 0) {
      r += 1;
    }
  }
  return r % 10;
}

function createIdCardNo(areaCode: string, birthday: string, gender: Gender) {
  const sequenceCode = randomVal(2) + generateGenderCode(gender);
  const prefixCode = areaCode + birthday + sequenceCode;
  const checkCode = sumCheckCode(prefixCode);
  return prefixCode + checkCode;
}

export default createIdCardNo;
