import * as react_jsx_runtime from 'react/jsx-runtime';

interface TextFieldProps {
    Text: string;
    lineHeightCss?: string;
    className?: string;
    placeHolderOpacity?: number;
    letterSpaceCss?: string;
    offset?: [OffsetType, OffsetType];
}
type OffsetType = `${number} ${number}` | `${number} start` | `${number} end` | `${number} center` | `start ${number}` | `end ${number}` | `center ${number}` | "start start" | "start end" | "start center" | "end start" | "end end" | "end center";
declare function TextField({ Text, className, offset, lineHeightCss, placeHolderOpacity, letterSpaceCss, }: TextFieldProps): react_jsx_runtime.JSX.Element;

export { TextField as default };
