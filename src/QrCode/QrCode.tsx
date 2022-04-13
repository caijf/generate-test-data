/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import QRCodeStyling from 'qr-code-styling';
import { useSafeState } from 'rc-hooks';
import { Select, Button, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './QrCode.less';

// 'png' 'jpeg' 'webp' 'svg'
const extensionOptions = [
  {
    label: 'PNG',
    value: 'png',
  },
  {
    label: 'JPEG',
    value: 'jpeg',
  },
  {
    label: 'WEBP',
    value: 'webp',
  },
  {
    label: 'SVG',
    value: 'svg',
  },
] as const;

export type QrCodeInstance = InstanceType<typeof QRCodeStyling>;
export type Options = NonNullable<ConstructorParameters<typeof QRCodeStyling>[0]>;

export interface QrCodeProps {
  options?: Options;
}

const QrCode: React.FC<QrCodeProps> = ({ options }) => {
  const qrCodeRef = React.useRef<QrCodeInstance>();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [hasQrCode, setHasQrCode] = useSafeState(false);
  const [extension, setExtension] = React.useState(extensionOptions[0].value);

  const handleDownload = React.useCallback(() => {
    qrCodeRef.current?.download({
      extension,
    });
  }, [extension]);

  React.useEffect(() => {
    if (!qrCodeRef.current) {
      qrCodeRef.current = new QRCodeStyling();
      qrCodeRef.current.append(wrapperRef.current as HTMLDivElement);
    }
    // console.log('options: ', options);
    qrCodeRef.current.update(options);
    setTimeout(() => {
      setHasQrCode((wrapperRef.current?.querySelectorAll('*').length || 0) > 0);
    }, 100);
  }, [options, setHasQrCode]);

  return (
    <div className={styles.wrapper}>
      <div ref={wrapperRef} className={styles.qrcode} />
      {hasQrCode && (
        <div className={styles.download}>
          <Button size="large" icon={<DownloadOutlined />} onClick={handleDownload}>
            点击下载
          </Button>
          <Divider type="vertical" />
          <Select
            options={extensionOptions as any}
            value={extension}
            onChange={setExtension}
            size="large"
            style={{ width: 100 }}
          />
        </div>
      )}
    </div>
  );
};

export default QrCode;
