import * as React from 'react';
import { useThrottleFn } from 'rc-hooks';
import JsBarcode from 'jsbarcode';

const arrCODE128 = ['CODE128', 'CODE128A', 'CODE128B', 'CODE128C'];

const isCODE128 = (str?: string) => {
  return !str || arrCODE128.includes(str);
};

type BarcodeProps = Omit<
  JsBarcode.Code128Options & JsBarcode.Ean13Options & JsBarcode.NodeOptions,
  'text'
> & {
  type?: 'canvas' | 'svg' | 'img';
  value?: string;
};

const Barcode: React.FC<BarcodeProps> = ({ type = 'canvas', value, ...restProps }) => {
  const elRef = React.useRef<HTMLElement>(null);

  const { run, cancel } = useThrottleFn(() => {
    if (elRef.current) {
      const realOptions = restProps || {};
      const realText = value || undefined;

      if (isCODE128(realOptions.format)) {
        delete realOptions.flat;
        delete realOptions.lastChar;
      } else if (realOptions.format === 'EAN13') {
        delete realOptions.ean128;
      } else if (realOptions.format === 'EAN8' || realOptions.format === 'UPC') {
        delete realOptions.ean128;
        delete realOptions.lastChar;
      } else {
        delete realOptions.ean128;
        delete realOptions.flat;
        delete realOptions.lastChar;
      }

      JsBarcode(elRef.current, realText as string, realOptions);
    }
  }, 300);

  React.useEffect(() => {
    run();
  });

  React.useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  return React.createElement(type, {
    ref: elRef,
    key: type,
  });
};

export default Barcode;
