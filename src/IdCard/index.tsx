/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import moment from 'moment';
import { BizForm, BizFormItem, BizFormItemSelect, BizFormItemDate } from 'antd-more';
import {
  Cascader,
  Radio,
  Input,
  Tooltip,
  Button,
  InputNumber,
  ConfigProvider,
  List,
  Typography,
  Checkbox,
  CheckboxProps,
} from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN';
import { ReloadOutlined } from '@ant-design/icons';
import { Gender, GenderOptions } from './constants';
import HorizontalLayout from '../Layout/HorizontalLayout';
import { createIdCardNo } from './utils';
import { pcOptions, pcaOptions } from '../utils/area';

enum Type {
  Config,
  Random,
}

const typeOptions = [
  {
    label: '配置生成',
    value: Type.Config,
  },
  {
    label: '随机生成',
    value: Type.Random,
  },
];

const transformAreaCode = (value: any) => {
  // console.log(value);
  if (Array.isArray(value) && value.length > 0) {
    // 可能是不设区地级市 或 港澳台地区
    let realValue: string | undefined;
    let index = value.length - 1;
    while (index >= 0 && !realValue) {
      if (value[index]) {
        realValue = value[index] as string;
      } else {
        --index;
      }
    }
    return realValue;
  }
  return value;
};

const defaultValues = {
  cityCode: ['110000', '110100'],
  areaCode: ['110000', '110100', '110101'],
  birthday: moment('1990-01-01'),
  gender: Gender.Male,
};

const getRandomIdCardNo = (total = 1, areaCode = '', birthday = '', gender?: Gender) => {
  return new Array(total > 0 ? total : 1)
    .fill(undefined)
    .map(() => createIdCardNo(areaCode, birthday, gender));
};

function Demo() {
  const [form] = BizForm.useForm();
  const [supportedArea, setSupportedArea] = React.useState(false);
  const [type, setType] = React.useState(typeOptions[0].value);
  const [count, setCount] = React.useState(5);
  const [idCardList, setIdCardList] = React.useState<string[]>([]);

  const updateCount = React.useCallback((val: number) => {
    setCount(Math.round(!val || val < 1 ? 1 : val));
  }, []);

  const update = React.useCallback(
    (allValues?: any) => {
      if (type === Type.Config) {
        const values = allValues || form.getFieldsValue();
        const areaCode = supportedArea
          ? transformAreaCode(values.areaCode)
          : transformAreaCode(values.cityCode);
        const birthday = values.birthday.format('YYYYMMDD');
        const gender = values.gender;
        setIdCardList(getRandomIdCardNo(count, areaCode, birthday, gender));
      } else {
        setIdCardList(getRandomIdCardNo(count));
      }
    },
    [count, form, supportedArea, type],
  );

  const handleChangeSupportedAres = React.useCallback(
    (e: Parameters<NonNullable<CheckboxProps['onChange']>>[0]) => {
      setSupportedArea(e.target.checked);
    },
    [],
  );

  React.useEffect(() => {
    update();
  }, [update]);

  return (
    <ConfigProvider locale={zh_CN}>
      <HorizontalLayout
        leftTitle="基本信息"
        leftContent={
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
              <Radio.Group
                options={typeOptions}
                value={type}
                onChange={(e) => setType(e.target.value)}
                size="large"
                optionType="button"
                buttonStyle="solid"
              />
            </div>
            <BizForm
              form={form}
              submitter={false}
              initialValues={defaultValues}
              onValuesChange={(_, values) => {
                update(values);
              }}
              style={{ display: type === Type.Config ? 'block' : 'none' }}
            >
              <BizFormItem
                name="cityCode"
                label="出生地"
                hidden={supportedArea}
                contentAfter={
                  <Checkbox checked={false} onChange={handleChangeSupportedAres}>
                    区级
                  </Checkbox>
                }
              >
                <Cascader options={pcOptions} allowClear={false} placeholder="请选择出生地" />
              </BizFormItem>
              <BizFormItem
                name="areaCode"
                label="出生地"
                hidden={!supportedArea}
                contentAfter={
                  <Checkbox checked onChange={handleChangeSupportedAres}>
                    区级
                  </Checkbox>
                }
              >
                <Cascader options={pcaOptions} allowClear={false} placeholder="请选择出生地" />
              </BizFormItem>
              <BizFormItemDate
                name="birthday"
                label="出生日期"
                pickerProps={{ placeholder: '请选择出生日期', allowClear: false }}
              />
              <BizFormItemSelect
                name="gender"
                label="性别"
                options={GenderOptions}
                selectProps={{ placeholder: '请选择性别' }}
              />
            </BizForm>
            <div style={{ display: type === Type.Config ? 'none' : 'block', textAlign: 'center' }}>
              <Button onClick={() => update()} type="link">
                点击重新生成
              </Button>
            </div>
          </div>
        }
        rightTitle="身份证号"
        rightContent={
          <div>
            <Input.Group compact>
              <InputNumber
                value={count}
                onChange={updateCount}
                precision={0}
                min={1}
                max={50}
                addonBefore="数量"
              />
              <Tooltip title="点击重新生成">
                <Button icon={<ReloadOutlined />} onClick={() => update()} />
              </Tooltip>
            </Input.Group>
            {idCardList.length > 0 ? (
              <List
                dataSource={idCardList}
                bordered
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Paragraph copyable style={{ margin: 0 }}>
                      {item}
                    </Typography.Paragraph>
                  </List.Item>
                )}
                size="small"
                style={{ margin: '12px 0', background: '#fff' }}
              />
            ) : null}
          </div>
        }
      />
    </ConfigProvider>
  );
}

export default Demo;
