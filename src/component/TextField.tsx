import Paragraph from "./paragraph";
import '../index.css'

interface TextFieldProps {
    Text: string;
    lineHeightCss?: string;
    className?: string;
    placeHolderOpacity?: number;
    letterSpaceCss?: string;
    offset?: [OffsetType, OffsetType];
}

type OffsetType = `${number} ${number}` | `${number} start` | `${number} end` | `${number} center` | `start ${number}` | `end ${number}` | `center ${number}` | "start start" | "start end" | "start center" | "end start" | "end end" | "end center";

export default function TextField({ 
    Text, 
    className = '',
    offset = ['start .9', 'start .3'],
    lineHeightCss = '',
    placeHolderOpacity = 15,
    letterSpaceCss = '',
}: TextFieldProps) {
    return (
        <>
            <div className={`flex justify-center items-center w-screen ${className}`}>
                <Paragraph 
                    value={Text} 
                    offset={offset} 
                    lineHeightCss={lineHeightCss} 
                    letterSpaceCss={letterSpaceCss} 
                    placeHolderOpacity={placeHolderOpacity}
                />
            </div>
        </>
    );
}
