import * as React from 'react';
import { Row, Col, Divider, RowProps, ColProps } from 'antd';

export const colspan = {
  xs: 24,
  xl: 12,
};

export const gutter: RowProps['gutter'] = [
  {
    xs: 8,
    sm: 24,
  },
  {
    xs: 16,
    sm: 24,
  },
];

export interface HorizontalLayoutProps extends RowProps {
  leftTitle?: React.ReactNode;
  leftContent?: React.ReactNode;
  leftColProps?: ColProps;
  rightTitle?: React.ReactNode;
  rightContent?: React.ReactNode;
  rightColProps?: ColProps;
}

const HorizontalLayout: React.FC<HorizontalLayoutProps> = ({
  leftTitle,
  leftContent,
  leftColProps,
  rightTitle,
  rightContent,
  rightColProps,
  ...restProps
}) => {
  return (
    <Row gutter={gutter} {...restProps}>
      <Col {...colspan} {...leftColProps}>
        {leftTitle && <Divider orientation="left">{leftTitle}</Divider>}
        {leftContent}
      </Col>
      <Col
        {...colspan}
        {...rightColProps}
        style={{ background: '#f5f5f5', ...rightColProps?.style }}
      >
        {rightTitle && <Divider orientation="left">{rightTitle}</Divider>}
        {rightContent}
      </Col>
    </Row>
  );
};

export default HorizontalLayout;
