import * as React from 'react';
import { Button } from 'antd';
import { BizForm, BizFormItemInput, BizDescriptions } from 'antd-more';
import { isSocialCreditCode } from 'util-helpers';
import { parseAreaCode } from 'lcn';
import { organization } from '../../SocialCreditCode/constants';

function QuerySocialCreditCode() {
  const [data, setData] = React.useState<{
    unifiedIdentifier: string;
    organizationName: string;
    organizationClass: string;
    province: string;
    city: string;
    area: string;
    bodyIdentifier: string;
  } | null>(null);

  return (
    <div>
      <BizForm
        submitter={false}
        size="large"
        pressEnterSubmit={false}
        onFinish={({ unifiedIdentifier }) => {
          const organizationCode = unifiedIdentifier.substring(0, 2);
          const areaCode = unifiedIdentifier.substring(2, 8);
          const bodyIdentifier = unifiedIdentifier.substring(8, 17);

          const [province, city, area] = parseAreaCode(areaCode);
          const currentOrganization = organization.find(
            (item) => item.value === organizationCode[0],
          );
          const currentOrganizationClass = currentOrganization?.children.find(
            (item) => item.value === organizationCode[1],
          );

          setData({
            unifiedIdentifier,
            bodyIdentifier,
            organizationName: currentOrganization?.label || '',
            organizationClass: currentOrganizationClass?.label || '',
            province: province?.name || '',
            city: city?.name || '',
            area: area?.name || '',
          });
        }}
        onFinishFailed={() => {
          setData(null);
        }}
      >
        <BizFormItemInput
          name="unifiedIdentifier"
          label="统一社会信用代码"
          hideLabel
          disabledWhiteSpace
          inputProps={{
            placeholder: '请输入统一社会信用代码',
            maxLength: 18,
          }}
          required
          extendRules={[
            {
              validator(rule, value) {
                if (!isSocialCreditCode(value)) {
                  return Promise.reject('请输入正确的统一社会信用代码');
                }
                return Promise.resolve();
              },
            },
          ]}
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
          <BizDescriptions.Item label="统一社会信用代码">
            {data.unifiedIdentifier}
          </BizDescriptions.Item>
          <BizDescriptions.Item label="登记管理部门">{data.organizationName}</BizDescriptions.Item>
          <BizDescriptions.Item label="机构类别">{data.organizationClass}</BizDescriptions.Item>
          <BizDescriptions.Item label="经营地址">{`${data.province}/${data.city}${
            data.area ? '/' + data.area : ''
          }`}</BizDescriptions.Item>
          <BizDescriptions.Item label="主体标识码">{data.bodyIdentifier}</BizDescriptions.Item>
        </BizDescriptions>
      )}
    </div>
  );
}

export default QuerySocialCreditCode;
