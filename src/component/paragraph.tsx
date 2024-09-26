import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import "../index.css"

interface ParagraphProps {
    value: string;
    lineHeightCss: string;
    letterSpaceCss: string;
    placeHolderOpacity: number;
    offset: [OffsetType, OffsetType];
}
type OffsetType = `${number} ${number}` | `${number} start` | `${number} end` | `${number} center` | `start ${number}` | `end ${number}` | `center ${number}` | "start start" | "start end" | "start center" | "end start" | "end end" | "end center";

export default function Paragraph({ value, offset, lineHeightCss, letterSpaceCss, placeHolderOpacity }: ParagraphProps) {
    const element = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset,
    });

    const words = value.split(" ");

    return (
        <div className={`flex justify-center items-center pb-24 lg:py-24 ${lineHeightCss}`}>
            <motion.p ref={element} style={{ opacity: scrollYProgress }} className="flex flex-wrap md:justify-start font-gilBold md:text-2xl text-2xl p-10 md:pl-14 pl-8">
                {words.map((word, i) => {
                    const start = i / words.length;
                    const end = start + (1 / words.length);
                    return <Word key={i} placeHolderOpacity={placeHolderOpacity} letterSpaceCss={letterSpaceCss} range={[start, end]} progress={scrollYProgress}>{word}</Word>;
                })}
            </motion.p>
        </div>
    );
}

interface WordProps {
    children: string;
    placeHolderOpacity: number;
    letterSpaceCss: string;
    range: [number, number];
    progress: any; // Can be refined based on useTransform's return type
}

const Word = ({ children, range, progress, letterSpaceCss, placeHolderOpacity }: WordProps) => {
    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
        <span className={`md:mr-[10px] mr-[8px] md:mt-5 mt-3 ${letterSpaceCss}`}>
            {characters.map((char, i) => {
                const start = range[0] + (step * i);
                const end = range[0] + (step * (i + 1));
                return <Character placeHolderOpacity={placeHolderOpacity} key={i} range={[start, end]} progress={progress}>{char}</Character>;
            })}
        </span>
    );
}

interface CharacterProps {
    children: string;
    placeHolderOpacity: number;
    range: [number, number];
    progress: any; // Can be refined based on useTransform's return type
}

const Character = ({ children, range, progress, placeHolderOpacity }: CharacterProps) => {
    const opacity = useTransform(progress, range, [0, 1]);

    return (
        <span className="relative">
            <span className={`absolute opacity-15 opacity-[${placeHolderOpacity}]`}>{children}</span>
            <motion.span style={{ opacity }}>
                {children}
            </motion.span>
        </span>
    );
}
