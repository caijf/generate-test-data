import * as React from 'react';
import {
  BizFormItem,
  BizFormList,
  BizFormItemColor,
  BizFormItemRadio,
  BizFormItemNumber,
} from 'antd-more';
import { FormInstance, Row, Col } from 'antd';

const colorTypeOptions = [
  {
    label: '单色',
    value: 'single',
  },
  {
    label: '渐变',
    value: 'gradient',
  },
];

const gradientTypeOptions = [
  {
    label: '线性',
    value: 'linear',
  },
  {
    label: '径向',
    value: 'radial',
  },
];

interface ColorOptionsProps {
  form: FormInstance;
  listNamePath: string;
}

const ColorOptions: React.FC<ColorOptionsProps> = ({ form, listNamePath }) => {
  return (
    <>
      <BizFormItemRadio
        name={[listNamePath, 'colorType']}
        label="颜色类型"
        options={colorTypeOptions}
        radioGroupProps={{ optionType: 'button', buttonStyle: 'solid' }}
      />
      <BizFormItem
        shouldUpdate={(prevValues, nextValues) =>
          prevValues[listNamePath].colorType !== nextValues[listNamePath].colorType
        }
        style={{ marginBottom: 0 }}
      >
        {() => {
          if (form.getFieldValue([listNamePath, 'colorType']) === colorTypeOptions[0].value) {
            return (
              <BizFormItemColor
                name={[listNamePath, 'color']}
                label="颜色"
                colorProps={{ placement: 'topLeft' }}
              />
            );
          }
          return (
            <>
              <BizFormItemRadio
                name={[listNamePath, 'gradient', 'type']}
                label="渐变类型"
                options={gradientTypeOptions}
              />
              <Row>
                <Col span={12}>
                  <BizFormList name={[listNamePath, 'gradient', 'colorStops']}>
                    {(fields) => {
                      // return fields.map(field => (
                      //   <>
                      //     <BizFormItemNumber key={field.key + 'offset'} name={[field.name, 'offset']} label='渐变偏移' inputProps={{ min: 0, max: 1, step: 0.1 }} />
                      //     <BizFormItemColor key={field.key + 'color'} name={[field.name, 'color']} label='渐变色' />
                      //   </>
                      // ))
                      return (
                        <BizFormItem label="渐变色">
                          {fields.map((field, index) => (
                            <span key={field.key}>
                              <BizFormItemColor
                                name={[field.name, 'color']}
                                label="渐变色"
                                noStyle
                                colorProps={{ placement: 'topLeft' }}
                              />
                              <BizFormItemNumber
                                name={[field.name, 'offset']}
                                label="渐变偏移"
                                inputProps={{ min: 0, max: 1, step: 0.1 }}
                                hidden
                              />
                              {index !== fields.length - 1 ? ' ' : ''}
                            </span>
                          ))}
                        </BizFormItem>
                      );
                    }}
                  </BizFormList>
                </Col>
                <Col span={12}>
                  <BizFormItemNumber
                    name={[listNamePath, 'gradient', 'rotation']}
                    label="旋转"
                    inputProps={{ min: 0 }}
                  />
                </Col>
              </Row>
            </>
          );
        }}
      </BizFormItem>
    </>
  );
};

export default ColorOptions;
