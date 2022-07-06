import * as React from 'react';
import { isIdCard, parseIdCard } from 'util-helpers';
import { parseAreaCode } from 'lcn';
import { Button, message } from 'antd';
import { BizForm, BizFormItemInput, BizDescriptions } from 'antd-more';
import { sumCheckCode } from '../../IdCard/utils';

const basicReg = /^\d*$/;

// 第一位数字是以前的大区制代码。第二位是大区所在省市编码。全国共分为8个大区：华北（1）、东北（2）、华东（3）、中南（4）、西南（5）、西北（6）、台湾（7）和港澳（8）。
const Regions = [
  ['1', '华北地区'],
  ['2', '东北地区'],
  ['3', '华东地区'],
  ['4', '中南地区'],
  ['5', '西南地区'],
  ['6', '西北地区'],
  ['7', '台湾地区'],
  ['8', '港澳地区'],
];

// 计算年龄（周岁）
function calcAge({ year, month, day }: { year: string; month: string; day: string }) {
  const y = Number(year);
  const m = Number(month);
  const d = Number(day);

  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth() + 1;
  const currDay = date.getDate();

  let age = currYear - y;

  if (currMonth < m || (currMonth === m && currDay < d)) {
    age--;
  }
  return age;
}

function QueryIdCard() {
  const [data, setData] = React.useState<{
    idCard: string;
    region: string;
    province?: string;
    city?: string;
    area?: string;
    birthday: string;
    age: number;
    gender: string;
  } | null>(null);

  return (
    <div>
      <BizForm
        submitter={false}
        size="large"
        pressEnterSubmit={false}
        onFinish={({ idCard }) => {
          const info = parseIdCard(idCard);
          if (info) {
            // console.log(info);
            const areaCode = info.origin.province + info.origin.city + info.origin.area;
            const [province, city, area] = parseAreaCode(areaCode);
            setData({
              idCard,
              region: Regions.find((item) => item[0] === province?.code[0])?.[1] || '',
              province: province?.name,
              city: city?.name,
              area: area?.name,
              birthday: info.birthday,
              age: calcAge(info.origin),
              gender: info.gender,
            });
          } else {
            message.error('身份证号解析失败');
          }
        }}
        onFinishFailed={() => {
          setData(null);
        }}
      >
        <BizFormItemInput
          name="idCard"
          label="身份证号"
          hideLabel
          inputProps={{
            placeholder: '请输入身份证号',
          }}
          required
          extendRules={[
            {
              validator(rule, value) {
                if (isIdCard(value)) {
                  return Promise.resolve();
                }

                const preCode = value.substring(0, 17) || '';
                if (basicReg.test(preCode) && preCode.length === 17) {
                  const checkCode = sumCheckCode(preCode);
                  return Promise.reject(`验证不通过，可能你要输入的是 “${preCode}${checkCode}”`);
                }
                return Promise.reject('请输入正确的身份证号');
              },
            },
          ]}
          contentAfter={
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          }
        />
      </BizForm>
      {data && (
        <BizDescriptions
          column={1}
          bordered
          size="small"
          labelStyle={{ padding: 8 }}
          contentStyle={{ padding: 8 }}
        >
          <BizDescriptions.Item label="身份证号">{data.idCard}</BizDescriptions.Item>
          <BizDescriptions.Item label="地区">{data.region}</BizDescriptions.Item>
          <BizDescriptions.Item label="出生地">{`${data.province}/${data.city}${
            data.area ? '/' + data.area : ''
          }`}</BizDescriptions.Item>
          <BizDescriptions.Item label="出生日期">{data.birthday}</BizDescriptions.Item>
          <BizDescriptions.Item label="年龄（周岁）">
            {data.age < 0 ? '未出生' : data.age}
          </BizDescriptions.Item>
          <BizDescriptions.Item label="性别">{data.gender}</BizDescriptions.Item>
        </BizDescriptions>
      )}
    </div>
  );
}

export default QueryIdCard;
