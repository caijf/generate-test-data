import * as React from 'react';
import { Button, message } from 'antd';
import { BizForm, BizFormItemInput, BizDescriptions } from 'antd-more';
import { searchCardBin, CardInfo } from 'bankcard';

function QueryBankCard() {
  const [data, setData] = React.useState<
    | (CardInfo & {
        bankCardNo: string;
      })
    | null
  >(null);

  return (
    <div>
      <BizForm
        submitter={false}
        size="large"
        pressEnterSubmit={false}
        onFinish={({ bankCard }) => {
          const info = searchCardBin(bankCard);
          if (info) {
            setData({
              ...info,
              bankCardNo: bankCard,
            });
          } else {
            message.error('找不到该银行卡号信息');
          }
        }}
        onFinishFailed={() => {
          setData(null);
        }}
      >
        <BizFormItemInput
          name="bankCard"
          label="银行卡号"
          hideLabel
          disabledWhiteSpace
          inputProps={{
            placeholder: '请输入银行卡号 或 卡Bin',
          }}
          required
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
          <BizDescriptions.Item label="银行卡号">{data.bankCardNo}</BizDescriptions.Item>
          <BizDescriptions.Item label="银行名称">{data.bankName}</BizDescriptions.Item>
          <BizDescriptions.Item label="银行编码">{data.bankCode}</BizDescriptions.Item>
          <BizDescriptions.Item label="卡类型">{data.cardTypeName}</BizDescriptions.Item>
          <BizDescriptions.Item label="卡Bin">{data.cardBin}</BizDescriptions.Item>
          <BizDescriptions.Item label="卡号长度">{data.len}</BizDescriptions.Item>
        </BizDescriptions>
      )}
    </div>
  );
}

export default QueryBankCard;
