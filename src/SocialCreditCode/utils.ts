import { randomString } from 'util-helpers';
import { basicCode, organization } from './constants';
import { getRandomCityAndAreaCode } from '../utils/area';

export function getBodyIdentifier() {
  return randomString(9, basicCode);
}

export function getRandomOrg() {
  const registryCode = randomString(1, organization.map((item) => item.value).join(''));
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const registryClasses = organization.find((item) => item.value === registryCode)!.children;
  const orgCode = randomString(1, registryClasses.map((item) => item.value).join(''));
  return [registryCode, orgCode];
}

export function isBodyIdentifier(value: string) {
  return /^[\dA-HJ-NPQRTUWXY]{9}$/.test(value);
}

export function normalizeBodyIdentifier(value: string) {
  return value
    ? value
        .toUpperCase()
        .replace(/[^\dA-HJ-NPQRTUWXY]/g, '')
        .substring(0, 9)
    : value;
}

// 基础字符组成
const baseCodeArr = '0123456789ABCDEFGHJKLMNPQRTUWXY'.split('');

// 计算校验码
function sumCheckCode(preCode: string) {
  // const preCodeArr = preCode.split('');

  let total = 0;

  // 计算字符位置对应序号和加权因子的乘积，总和
  for (let i = 0; i < 17; i++) {
    // 字符位置对应的基础编码序号
    const index = baseCodeArr.findIndex((item) => item === preCode[i]);
    // 加权因子
    const wf = Math.pow(3, i) % 31;
    // 计算序号和加权因子的乘积，并计算级数之和
    total += index * wf;
  }

  // 计算整数求余函数MOD
  const remainder = total % 31;
  // 校验码字符值序号
  const checkCodeIndex = remainder !== 0 ? 31 - remainder : 0;

  return baseCodeArr[checkCodeIndex];
}

export function createSocialCreditCode(
  orgCode?: string,
  areaCode?: string,
  bodyIdentifier?: string,
) {
  const realOrgCode = orgCode || getRandomOrg().join('');
  const realAreaCode = areaCode || getRandomCityAndAreaCode();
  const realBodyIdentifier = bodyIdentifier || getBodyIdentifier();

  const precode = realOrgCode + realAreaCode + realBodyIdentifier;
  const checkCode = sumCheckCode(precode);
  return precode + checkCode;
}
