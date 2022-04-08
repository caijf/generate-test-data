import * as React from 'react';
import { ReloadOutlined } from '@ant-design/icons';
import {
  Row,
  Col,
  Divider,
  AutoComplete,
  Input,
  Tooltip,
  Button,
  Select,
  Radio,
  Empty,
  RowProps,
  SelectProps,
} from 'antd';
import { BizForm, BizFormItemSelect } from 'antd-more';
import { formatBankCard } from 'util-helpers';
import { banks, cards, CardType, CardTypeName } from 'bankcard';
import createBankCardNo from './createBankCardNo';
import styles from './index.less';

// console.log(banks, cards);

const cardTypes = [CardType.CC, CardType.DC, CardType.SCC, CardType.PC];
const CardTypeOptions = cardTypes.map((item) => ({
  label: CardTypeName[item],
  value: CardType[item],
}));

const CardFormatOptions = [
  {
    label: '无格式',
    value: '0',
  },
  {
    label: '四位间隔',
    value: '4',
  },
  {
    label: '六位间隔',
    value: '6',
  },
];

const colspan = {
  xs: 24,
  xl: 12,
};

const gutter: RowProps['gutter'] = [
  {
    xs: 8,
    sm: 24,
  },
  {
    xs: 16,
    sm: 24,
  },
];

function Demo() {
  const [form] = BizForm.useForm();
  const [searchValues, setSearchValues] = React.useState<Record<string, unknown>>({
    bankCode: 'ICBC',
    cardType: CardType.DC,
  });

  const [cardList, setCardList] = React.useState<typeof cards>([]);
  const [currentCard, setCurrentCard] = React.useState<typeof cards[0]>();
  const [cardOptions, setCardOptions] = React.useState<Record<string, unknown>[]>([]);
  const [cardNo, setCardNo] = React.useState('');
  const [cardFormat, setCardFormat] = React.useState(CardFormatOptions[1].value);
  const [cardNoResult, setCardNoResult] = React.useState('');

  React.useEffect(() => {
    form.setFieldsValue(searchValues);
    setCardList(
      cards.filter(
        (item) =>
          item.bankCode === searchValues.bankCode && item.cardType === searchValues.cardType,
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  React.useEffect(() => {
    const searchCards = cards.filter(
      (item) => item.bankCode === searchValues.bankCode && item.cardType === searchValues.cardType,
    );
    setCardList(searchCards);
    setCurrentCard(searchCards[0]);
  }, [searchValues]);

  const handleRefreshCardOptions = React.useCallback(() => {
    if (currentCard) {
      const searchCardNoOptions = new Array(10)
        .fill(undefined)
        .map(() =>
          createBankCardNo(currentCard.cardBin, currentCard.len).substring(
            currentCard.cardBin.length,
          ),
        );
      setCardOptions(searchCardNoOptions.map((item) => ({ label: item, value: item })));
      setCardNo(searchCardNoOptions[0]);
    } else {
      setCardOptions([]);
    }
  }, [currentCard]);

  React.useEffect(() => {
    handleRefreshCardOptions();
  }, [currentCard, handleRefreshCardOptions]);

  React.useEffect(() => {
    if (currentCard) {
      let realCardNo = currentCard.cardBin + cardNo;
      if (cardFormat === '4') {
        realCardNo = formatBankCard(realCardNo);
      } else if (cardFormat === '6') {
        realCardNo = realCardNo.substring(0, 6) + ' ' + realCardNo.substring(6);
      }
      setCardNoResult(realCardNo);
    }
  }, [cardNo, currentCard, cardFormat]);

  return (
    <Row gutter={gutter}>
      <Col {...colspan}>
        <Divider orientation="left">基本信息</Divider>
        <BizForm
          form={form}
          onValuesChange={(_, values) => setSearchValues(values)}
          submitter={false}
        >
          <BizFormItemSelect
            name="bankCode"
            label="银行"
            options={banks as unknown as SelectProps['options']}
            selectProps={{
              showSearch: true,
              fieldNames: { label: 'name', value: 'code' },
              filterOption: (inputValue, option) => {
                return (
                  option?.name.indexOf(inputValue) > -1 || option?.code.indexOf(inputValue) > -1
                );
              },
            }}
          />
          <BizFormItemSelect name="cardType" label="卡类型" options={CardTypeOptions} />
        </BizForm>
      </Col>
      <Col {...colspan} style={{ background: '#f5f5f5' }}>
        <Divider orientation="left">展示</Divider>
        {cardList.length > 0 && currentCard ? (
          <Row gutter={gutter}>
            <Col span={24}>
              <Input.Group compact style={{ display: 'flex' }}>
                <Select
                  options={cardList}
                  placeholder="请选择卡Bin"
                  showSearch
                  style={{ width: 130 }}
                  fieldNames={{ label: 'cardBin', value: 'cardBin' }}
                  value={currentCard.cardBin}
                  onChange={(v, option) => setCurrentCard(option as typeof cards[0])}
                />
                <AutoComplete
                  placeholder="请输入银行卡号"
                  options={cardOptions}
                  style={{ flex: 1 }}
                  value={cardNo}
                  onChange={(value) =>
                    setCardNo(
                      value
                        .replace(/\D/g, '')
                        .substring(0, currentCard.len - currentCard.cardBin.length),
                    )
                  }
                />
                <Tooltip title="点击随机生成卡号">
                  <Button icon={<ReloadOutlined />} onClick={handleRefreshCardOptions} />
                </Tooltip>
              </Input.Group>
            </Col>
            <Col span={24}>
              <Radio.Group
                optionType="button"
                buttonStyle="solid"
                options={CardFormatOptions}
                value={cardFormat}
                onChange={(e) => setCardFormat(e.target.value)}
              />
            </Col>
            <Col span={24}>
              <div className={styles.cardNoWrapper}>
                <div className={styles.cardNo}>{cardNoResult}</div>
              </div>
            </Col>
          </Row>
        ) : (
          <Empty description="暂无数据" style={{ marginBottom: 12 }} />
        )}
      </Col>
    </Row>
  );
}

export default Demo;
