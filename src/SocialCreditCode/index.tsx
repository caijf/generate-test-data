/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BizForm, BizFormItem } from 'antd-more';
import {
  Cascader,
  Radio,
  Button,
  Input,
  Tooltip,
  Alert,
  Typography,
  message,
  Checkbox,
  CheckboxProps,
} from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import HorizontalLayout from '../Layout/HorizontalLayout';
import BodyIdentifierInput from './BodyIdentifierInput';
import { organization } from './constants';
import {
  getBodyIdentifier,
  createSocialCreditCode,
  normalizeBodyIdentifier,
  isBodyIdentifier,
} from './utils';
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
  org: ['9', '1'],
  areaCode: ['110000', '110100', '110101'],
  cityCode: ['110000', '110100'],
  bodyIdentifier: getBodyIdentifier(),
};

function Demo() {
  const [form] = BizForm.useForm();
  const [supportedArea, setSupportedArea] = React.useState(false);
  const [type, setType] = React.useState(typeOptions[0].value);
  const [socialCreditCode, setSocialCreditCode] = React.useState<string>('');

  const update = React.useCallback(
    (allValues?: any) => {
      if (type === Type.Config) {
        const values = allValues || form.getFieldsValue();
        const areaCode = transformAreaCode(supportedArea ? values.areaCode : values.cityCode);
        const org = values.org.join('');
        const bodyIdentifier = values.bodyIdentifier;

        if (isBodyIdentifier(bodyIdentifier)) {
          setSocialCreditCode(createSocialCreditCode(org, areaCode, bodyIdentifier));
        } else {
          setSocialCreditCode('');
        }
      } else {
        setSocialCreditCode(createSocialCreditCode());
      }
    },
    [form, supportedArea, type],
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

  const updateBodyIdentifier = React.useCallback(
    (value: string) => {
      form.setFieldsValue({
        bodyIdentifier: value,
      });
      // console.log(value);
      update();
    },
    [form, update],
  );

  return (
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
            labelWidth={98}
            onValuesChange={(_, values) => {
              update(values);
            }}
            style={{ display: type === Type.Config ? 'block' : 'none' }}
          >
            <BizFormItem name="org" label="机构类别">
              <Cascader options={organization} allowClear={false} />
            </BizFormItem>
            <BizFormItem
              name="cityCode"
              label="经营地址"
              transform={transformAreaCode}
              hidden={supportedArea}
              contentAfter={
                <Checkbox checked={false} onChange={handleChangeSupportedAres}>
                  区级
                </Checkbox>
              }
            >
              <Cascader options={pcOptions} allowClear={false} />
            </BizFormItem>
            <BizFormItem
              name="areaCode"
              label="经营地址"
              transform={transformAreaCode}
              hidden={!supportedArea}
              contentAfter={
                <Checkbox checked onChange={handleChangeSupportedAres}>
                  区级
                </Checkbox>
              }
            >
              <Cascader options={pcaOptions} allowClear={false} />
            </BizFormItem>
            <BizFormItem
              name="bodyIdentifier"
              label="主体标识码"
              normalize={normalizeBodyIdentifier}
              validateFirst
              rules={[
                {
                  required: true,
                  message: '请输入主体标识码',
                },
                {
                  validator(rule, value) {
                    if (!isBodyIdentifier(value)) {
                      return Promise.reject('请输入正确的主体标识码');
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <BodyIdentifierInput onUpdate={updateBodyIdentifier} />
            </BizFormItem>
          </BizForm>
          <div style={{ display: type === Type.Config ? 'none' : 'block', textAlign: 'center' }}>
            <Button onClick={() => update()} type="link">
              点击重新生成
            </Button>
          </div>
        </div>
      }
      rightTitle="统一社会信用代码"
      rightContent={
        socialCreditCode ? (
          <Input.Group compact style={{ display: 'flex', maxWidth: 320, marginBottom: 12 }}>
            <Input value={socialCreditCode} readOnly size="large" />
            <Tooltip title="点击复制">
              <CopyToClipboard
                text={socialCreditCode}
                onCopy={() => {
                  message.success(
                    <>
                      复制成功！<Typography.Text code>{socialCreditCode}</Typography.Text>
                    </>,
                  );
                }}
              >
                <Button icon={<CopyOutlined />} size="large" />
              </CopyToClipboard>
            </Tooltip>
          </Input.Group>
        ) : (
          <Alert message="数据生成失败，请输入正确的条件" type="error" showIcon />
        )
      }
    />
  );
}

export default Demo;
