/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { Row, Col, Divider, Collapse, Affix } from 'antd';
import {
  BizForm,
  BizFormItemColor,
  BizFormItemNumber,
  BizFormItemSelect,
  BizFormItemTextArea,
  BizFormItemSwitch,
  BizFormItemInput,
} from 'antd-more';
import { useThrottleFn } from 'rc-hooks';
import Horizontal from '../Layout/HorizontalLayout';
import Barcode from './Barcode';

const { Panel } = Collapse;

const elementOptions = [
  {
    value: 'canvas',
    label: 'canvas',
  },
  {
    value: 'svg',
    label: 'svg',
  },
  {
    value: 'img',
    label: 'img',
  },
];

const formatOptions = [
  {
    label: 'CODE128',
    value: 'CODE128',
  },
  {
    label: 'CODE128A',
    value: 'CODE128A',
  },
  {
    label: 'CODE128B',
    value: 'CODE128B',
  },
  {
    label: 'CODE128C',
    value: 'CODE128C',
  },
  {
    label: 'EAN13',
    value: 'EAN13',
  },
  {
    label: 'EAN8',
    value: 'EAN8',
  },
  {
    label: 'EAN5',
    value: 'EAN5',
  },
  {
    label: 'EAN2',
    value: 'EAN2',
  },
  {
    label: 'UPC',
    value: 'UPC',
  },
  {
    label: 'CODE39',
    value: 'CODE39',
  },
  {
    label: 'ITF',
    value: 'ITF',
  },
  {
    label: 'ITF-14',
    value: 'ITF-14',
  },
  {
    label: 'MSI',
    value: 'MSI',
  },
  {
    label: 'MSI10',
    value: 'MSI10',
  },
  {
    label: 'MSI11',
    value: 'MSI11',
  },
  {
    label: 'MSI1010',
    value: 'MSI1010',
  },
  {
    label: 'MSI1110',
    value: 'MSI1110',
  },
  {
    label: 'Pharmacode',
    value: 'pharmacode',
  },
  {
    label: 'Codabar',
    value: 'codabar',
  },
];

const textPositionOptions = [
  {
    label: '下',
    value: 'bottom',
  },
  {
    label: '上',
    value: 'top',
  },
];

const textAlignOptions = [
  {
    label: '左',
    value: 'left',
  },
  {
    label: '中',
    value: 'center',
  },
  {
    label: '右',
    value: 'right',
  },
];

const fontOptions = [
  {
    label: 'monospace',
    value: 'monospace',
  },
  {
    label: 'fantasy',
    value: 'fantasy',
  },
  {
    label: 'OCRB',
    value: 'OCRB',
  },
];

const fontOptionsOptions = [
  {
    label: '正常',
    value: '',
  },
  {
    label: '粗体',
    value: 'bold',
  },
  {
    label: '斜体',
    value: 'italic',
  },
  {
    label: '粗体，斜体',
    value: 'bold italic',
  },
];

const defaultValues = {
  element: 'canvas',
  text: '123456789',
  options: {
    format: 'CODE128',
    lineColor: '#000',
    background: '#fff',
    width: 2,
    height: 100,
    displayValue: true,
    margin: 10,
    font: 'monospace',
    fontSize: 20,
    textAlign: 'center',
    textPosition: 'bottom',
    textMargin: 2,
    fontOptions: '',
    ean128: false,
    flat: false,
    lastChar: '',
  },
};

function Demo() {
  const [form] = BizForm.useForm();
  const [value, setValue] = React.useState<Record<string, any>>(defaultValues);
  const throttleUpdateValue = useThrottleFn(setValue, 300);

  return (
    <BizForm
      form={form}
      submitter={false}
      onValuesChange={(_, values) => throttleUpdateValue.run(values)}
      initialValues={defaultValues}
    >
      <Horizontal
        leftTitle="基本信息"
        leftContent={
          <>
            <BizFormItemTextArea name="text" label="条形码内容" />
            <Divider orientation="left">配置项</Divider>
            <Row>
              <Col span={12}>
                <BizFormItemSelect
                  name={['options', 'format']}
                  label="格式"
                  options={formatOptions}
                />
              </Col>
              <Col span={12}>
                <BizFormItemSelect name="element" label="渲染元素" options={elementOptions} />
              </Col>
              <Col span={12}>
                <BizFormItemColor name={['options', 'lineColor']} label="线条颜色" />
              </Col>
              <Col span={12}>
                <BizFormItemColor name={['options', 'background']} label="背景颜色" />
              </Col>
              <Col span={12}>
                <BizFormItemNumber name={['options', 'width']} label="线条宽" />
              </Col>
              <Col span={12}>
                <BizFormItemNumber
                  name={['options', 'height']}
                  label="线条高"
                  inputProps={{ min: 0 }}
                />
              </Col>
              <Col span={12}>
                <BizFormItemNumber
                  name={['options', 'margin']}
                  label="外边留白"
                  inputProps={{ min: 0 }}
                />
              </Col>
              <Col span={12}>
                <BizFormItemSwitch name={['options', 'displayValue']} label="显示文本" />
              </Col>
            </Row>
            {/* @ts-ignore */}
            <Collapse ghost>
              {/* @ts-ignore */}
              <Panel header={<a>更多配置</a>} key="1" forceRender>
                <Row>
                  <Col span={12}>
                    <BizFormItemSelect
                      name={['options', 'font']}
                      label="文本字体"
                      options={fontOptions}
                    />
                  </Col>
                  <Col span={12}>
                    <BizFormItemNumber
                      name={['options', 'fontSize']}
                      label="文字大小"
                      inputProps={{ min: 0 }}
                    />
                  </Col>
                  <Col span={12}>
                    <BizFormItemSelect
                      name={['options', 'fontOptions']}
                      label="文字粗细"
                      options={fontOptionsOptions}
                    />
                  </Col>
                  <Col span={12}>
                    <BizFormItemSelect
                      name={['options', 'textAlign']}
                      label="文本对齐"
                      options={textAlignOptions}
                    />
                  </Col>
                  <Col span={12}>
                    <BizFormItemSelect
                      name={['options', 'textPosition']}
                      label="文本位置"
                      options={textPositionOptions}
                      style={{ marginBottom: 0 }}
                    />
                  </Col>
                  <Col span={12}>
                    <BizFormItemNumber
                      name={['options', 'textMargin']}
                      label="文本间距"
                      style={{ marginBottom: 0 }}
                    />
                  </Col>
                </Row>
              </Panel>
              {/* @ts-ignore */}
              <Panel header={<a>特殊配置</a>} key="2" forceRender>
                <Row>
                  <Col span={12}>
                    <BizFormItemSwitch
                      name={['options', 'ean128']}
                      label="ean128"
                      tooltip="仅 CODE128 生效"
                    />
                  </Col>
                  <Col span={12}>
                    <BizFormItemSwitch
                      name={['options', 'flat']}
                      label="flat"
                      tooltip="仅 EAN13 EAN8 UPC 生效"
                    />
                  </Col>
                  <Col span={12}>
                    <BizFormItemInput
                      name={['options', 'lastChar']}
                      label="lastChar"
                      tooltip="仅 EAN13 生效"
                    />
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </>
        }
        rightTitle="条形码"
        rightContent={
          <Affix>
            <Barcode type={value.element} value={value.text} {...value.options} />
          </Affix>
        }
      />
    </BizForm>
  );
}

export default Demo;
