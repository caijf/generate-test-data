import * as React from 'react';
import { AutoComplete, AutoCompleteProps, Input, Tooltip, Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { getBodyIdentifier } from './utils';

const getOptions = () => {
  return new Array(10).fill(undefined).map(() => {
    const value = getBodyIdentifier();
    return {
      label: value,
      value,
    };
  });
};

const BodyIdentifierInput: React.FC<
  AutoCompleteProps & {
    onUpdate?: (value: string) => void;
  }
> = ({ onUpdate, ...restProps }) => {
  const [options, setOptions] = React.useState(() => getOptions());

  const update = React.useCallback(() => {
    const opts = getOptions();
    setOptions(opts);
    onUpdate?.(opts[0].value);
  }, [onUpdate]);

  return (
    <Input.Group compact style={{ display: 'flex' }}>
      <AutoComplete
        options={options}
        placeholder="请输入"
        style={{ display: 'block' }}
        allowClear
        {...restProps}
      />
      <Tooltip title="点击随机生成主体标识码">
        <Button icon={<ReloadOutlined />} onClick={update} />
      </Tooltip>
    </Input.Group>
  );
};

export default BodyIdentifierInput;
