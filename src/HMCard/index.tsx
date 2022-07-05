/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BizForm, BizFormItemSelect } from 'antd-more';
import { Radio, Button, Input, Tooltip, Alert, Typography, message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import HorizontalLayout from '../Layout/HorizontalLayout';
import { FirstLetter } from './constants';
import { randomString } from 'util-helpers';

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

const defaultValues = {
  area: 'H',
};

function Demo() {
  const [form] = BizForm.useForm();
  const [type, setType] = React.useState(typeOptions[0].value);
  const [cardNo, setCardNo] = React.useState<string>('');

  const update = React.useCallback(
    (allValues?: any) => {
      if (type === Type.Config) {
        const { area } = allValues || form.getFieldsValue();
        setCardNo(area + randomString(8, '0123456789'));
      } else {
        setCardNo(randomString(1, 'HM') + randomString(8, '0123456789'));
      }
    },
    [form, type],
  );

  React.useEffect(() => {
    update();
  }, [update]);

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
            <BizFormItemSelect label="申请地" name="area" options={FirstLetter} />
          </BizForm>
          <div style={{ display: type === Type.Config ? 'none' : 'block', textAlign: 'center' }}>
            <Button onClick={() => update()} type="link">
              点击重新生成
            </Button>
          </div>
        </div>
      }
      rightTitle="港澳居民来往内地通行证"
      rightContent={
        cardNo ? (
          <Input.Group compact style={{ display: 'flex', maxWidth: 320, marginBottom: 12 }}>
            <Input value={cardNo} readOnly size="large" />
            <Tooltip title="点击复制">
              <CopyToClipboard
                text={cardNo}
                onCopy={() => {
                  message.success(
                    <>
                      复制成功！<Typography.Text code>{cardNo}</Typography.Text>
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
