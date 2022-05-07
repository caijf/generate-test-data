import moment from 'moment';
import { randomString } from 'util-helpers';
import { getRandomCityAndAreaCode } from '../utils/area';
import { Gender } from './constants';

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

const getRandomBirthday = () => {
  const startTime = new Date('1950/01/01').getTime();
  const endTime = Date.now();
  const randomTime = Math.floor(Math.random() * (endTime - startTime));
  return moment(startTime + randomTime).format('YYYYMMDD');
};
const getRandomGender = () => {
  const random = Math.ceil(Math.random() * 10);
  return random % 2 === 0 ? Gender.Male : Gender.Female;
};
const getSequenceCode = (gender?: Gender) => {
  return randomString(2, '0123456789') + (gender ? generateGenderCode(gender) : getRandomGender());
};

export function createIdCardNo(areaCode?: string, birthday?: string, gender?: Gender) {
  const realAreaCode = areaCode || getRandomCityAndAreaCode();
  const realBirthday = birthday || getRandomBirthday();
  const sequenceCode = getSequenceCode(gender);

  const prefixCode = realAreaCode + realBirthday + sequenceCode;
  const checkCode = sumCheckCode(prefixCode);
  return prefixCode + checkCode;
}
