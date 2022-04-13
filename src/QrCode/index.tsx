/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react';
import { useThrottleFn } from 'rc-hooks';
import { Row, Col, Divider, Collapse, Affix } from 'antd';
import {
  BizForm,
  BizFormItemTextArea,
  BizFormItemNumber,
  BizFormItemUpload,
  BizFormItemSelect,
  BizFormItemSwitch,
} from 'antd-more';
import HorizontalLayout from '../Layout/HorizontalLayout';
import ColorOptions from './ColorOptions';
import QrCode from './QrCode';
import getImageUrl from './getImageUrl';

const typeOptions = [
  {
    label: 'canvas',
    value: 'canvas',
  },
  {
    label: 'svg',
    value: 'svg',
  },
];

const shapeOptions = [
  {
    label: '正方形',
    value: 'square',
  },
  {
    label: '圆形',
    value: 'circle',
  },
];

const modeOptions = [
  {
    label: 'Numeric',
    value: 'Numeric',
  },
  {
    label: 'Alphanumeric',
    value: 'Alphanumeric',
  },
  {
    label: 'Byte',
    value: 'Byte',
  },
  {
    label: 'Kanji',
    value: 'Kanji',
  },
];

const errorCorrectionLevelOptions = [
  {
    label: '低',
    value: 'L',
  },
  {
    label: '中等',
    value: 'M',
  },
  {
    label: '高',
    value: 'Q',
  },
  {
    label: '最高',
    value: 'H',
  },
];

const crossOriginOptions = [
  {
    label: 'anonymous',
    value: 'anonymous',
  },
  {
    label: 'use-credentials',
    value: 'use-credentials',
  },
];

const dotsTypeOptions = [
  {
    label: '圆形',
    value: 'rounded',
  },
  {
    label: '点',
    value: 'dots',
  },
  {
    label: '优雅',
    value: 'classy',
  },
  {
    label: '优雅圆润',
    value: 'classy-rounded',
  },
  {
    label: '正方形',
    value: 'square',
  },
  {
    label: '超圆角',
    value: 'extra-rounded',
  },
];

const cornersSquareTypeOptions = [
  {
    label: '默认',
    value: '',
  },
  {
    label: '点',
    value: 'dot',
  },
  {
    label: '正方形',
    value: 'square',
  },
  {
    label: '超圆角',
    value: 'extra-rounded',
  },
];

const cornersDotTypeOptions = [
  {
    label: '默认',
    value: '',
  },
  {
    label: '点',
    value: 'dot',
  },
  {
    label: '正方形',
    value: 'square',
  },
];

const defaultValues = {
  data: 'https://caijf.github.io/generate-test-data/index.html',
  // image: [{ url: 'https://www.caijinfeng.com/logo.png' }],
  type: 'canvas',
  width: 300,
  height: 300,
  shape: 'square',
  margin: 0,
  qrOptions: {
    typeNumber: 0,
    mode: 'Byte',
    errorCorrectionLevel: 'Q',
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.4,
    margin: 0,
    crossOrigin: 'anonymous',
  },
  dotsOptions: {
    type: 'square',
    colorType: 'single',
    color: '#000',
    gradient: {
      type: 'linear',
      rotation: 0,
      colorStops: [
        {
          offset: 0,
          color: '#000',
        },
        {
          offset: 1,
          color: '#000',
        },
      ],
    },
  },
  backgroundOptions: {
    colorType: 'single',
    color: '#fff',
    gradient: {
      type: 'linear',
      rotation: 0,
      colorStops: [
        {
          offset: 0,
          color: '#fff',
        },
        {
          offset: 1,
          color: '#fff',
        },
      ],
    },
  },
  cornersSquareOptions: {
    type: '',
    colorType: 'single',
    color: '',
    gradient: {
      type: 'linear',
      rotation: 0,
      colorStops: [
        {
          offset: 0,
          color: '',
        },
        {
          offset: 1,
          color: '',
        },
      ],
    },
  },
  cornersDotOptions: {
    type: '',
    colorType: 'single',
    color: '',
    gradient: {
      type: 'linear',
      rotation: 0,
      colorStops: [
        {
          offset: 0,
          color: '',
        },
        {
          offset: 1,
          color: '',
        },
      ],
    },
  },
};

function processColorOptions(options: Record<string, any>) {
  if (options) {
    if (options.colorType === 'single') {
      options.gradient = null;
    } else if (options.gradient) {
      options.color = undefined;
      options.gradient.rotation = (options.gradient.rotation / 180) * Math.PI;
    }
    delete options.colorType;
  }
}

function processValues(values: any) {
  const realValues = JSON.parse(JSON.stringify(values));
  if (Array.isArray(values.image) && values.image.length > 0) {
    realValues.image =
      typeof values.image[0].url === 'string'
        ? values.image[0].url
        : getImageUrl(values.image[0].originFileObj);
  } else {
    realValues.image = undefined;
  }

  processColorOptions(realValues.dotsOptions);
  processColorOptions(realValues.backgroundOptions);
  processColorOptions(realValues.cornersDotOptions);
  processColorOptions(realValues.cornersSquareOptions);
  return realValues;
}

function Demo() {
  const [form] = BizForm.useForm();
  const [value, setValue] = React.useState<any>(() => processValues(defaultValues));
  const timer = React.useRef<any>();

  const { run } = useThrottleFn(setValue, 300);

  const update = (values: any) => {
    run(processValues(values));
  };

  return (
    <HorizontalLayout
      leftTitle="基本信息"
      leftContent={
        <BizForm
          form={form}
          submitter={false}
          initialValues={defaultValues}
          onFinish={update}
          // onFinishFailed={(errorInfo) => {
          //   console.log(errorInfo);
          // }}
          onValuesChange={(changeValues, values) => {
            clearTimeout(timer.current);
            if (
              changeValues?.dotsOptions?.colorType ||
              changeValues?.backgroundOptions?.colorType ||
              changeValues?.cornersDotOptions?.colorType ||
              changeValues?.cornersSquareOptions?.colorType
            ) {
              timer.current = setTimeout(() => {
                form.submit();
              }, 300);
            } else {
              update(values);
            }
          }}
        >
          <BizFormItemTextArea name="data" label="文本/网址" />
          <Divider orientation="left">配置项</Divider>
          <Row>
            <Col span={24}>
              <BizFormItemUpload name="image" label="Logo/图片" type="image" maxCount={1} />
            </Col>
            <Col span={12}>
              <BizFormItemSelect name="shape" label="形状" options={shapeOptions} />
            </Col>
            <Col span={12}>
              <BizFormItemSelect name="type" label="渲染元素" options={typeOptions} />
            </Col>
            <Col span={12}>
              <BizFormItemNumber name="width" label="宽" inputProps={{ min: 150 }} />
            </Col>
            <Col span={12}>
              <BizFormItemNumber name="height" label="高" inputProps={{ min: 150 }} />
            </Col>
            <Col span={12}>
              <BizFormItemNumber name="margin" label="外边留白" inputProps={{ min: 0 }} />
            </Col>
          </Row>
          {/* @ts-ignore */}
          <Collapse>
            {/* @ts-ignore */}
            <Collapse.Panel header="Logo/图片选项" key="2" forceRender>
              <Row>
                <Col span={12}>
                  <BizFormItemSwitch
                    name={['imageOptions', 'hideBackgroundDots']}
                    label="隐藏背景点"
                  />
                </Col>
                <Col span={12}>
                  <BizFormItemSelect
                    name={['imageOptions', 'crossOrigin']}
                    label="crossOrigin"
                    options={crossOriginOptions}
                  />
                </Col>
                <Col span={12}>
                  <BizFormItemNumber
                    name={['imageOptions', 'imageSize']}
                    label="图像大小"
                    inputProps={{ min: 0, max: 1, step: 0.1 }}
                  />
                </Col>
                <Col span={12}>
                  <BizFormItemNumber
                    name={['imageOptions', 'margin']}
                    label="外边留白"
                    inputProps={{ min: 0 }}
                  />
                </Col>
              </Row>
            </Collapse.Panel>
            {/* @ts-ignore */}
            <Collapse.Panel header="背景选项" key="4" forceRender>
              <ColorOptions form={form} listNamePath="backgroundOptions" />
            </Collapse.Panel>
            {/* @ts-ignore */}
            <Collapse.Panel header="点选项" key="3" forceRender>
              <BizFormItemSelect
                name={['dotsOptions', 'type']}
                label="样式"
                options={dotsTypeOptions}
              />
              <ColorOptions form={form} listNamePath="dotsOptions" />
            </Collapse.Panel>
            {/* @ts-ignore */}
            <Collapse.Panel header="角落方框选项" key="5" forceRender>
              <BizFormItemSelect
                name={['cornersSquareOptions', 'type']}
                label="样式"
                options={cornersSquareTypeOptions}
              />
              <ColorOptions form={form} listNamePath="cornersSquareOptions" />
            </Collapse.Panel>
            {/* @ts-ignore */}
            <Collapse.Panel header="角落点选项" key="6" forceRender>
              <BizFormItemSelect
                name={['cornersDotOptions', 'type']}
                label="样式"
                options={cornersDotTypeOptions}
              />
              <ColorOptions form={form} listNamePath="cornersDotOptions" />
            </Collapse.Panel>
            {/* @ts-ignore */}
            <Collapse.Panel header="二维码选项" key="1" forceRender>
              <BizFormItemNumber
                name={['qrOptions', 'typeNumber']}
                label="型号"
                inputProps={{ min: 0, max: 40 }}
              />
              <BizFormItemSelect name={['qrOptions', 'mode']} label="模式" options={modeOptions} />
              <BizFormItemSelect
                name={['qrOptions', 'errorCorrectionLevel']}
                label="纠错级别"
                options={errorCorrectionLevelOptions}
              />
            </Collapse.Panel>
          </Collapse>
        </BizForm>
      }
      rightTitle="二维码"
      rightContent={
        <Affix>
          <QrCode options={value} />
        </Affix>
      }
    />
  );
}

export default Demo;
