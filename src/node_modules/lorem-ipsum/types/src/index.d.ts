import { IPrng } from "./lib/generator";
import LoremIpsum from "./lib/LoremIpsum";
export interface ILoremIpsumParams {
    count?: number;
    format?: "plain" | "html";
    paragraphLowerBound?: number;
    paragraphUpperBound?: number;
    random?: IPrng;
    sentenceLowerBound?: number;
    sentenceUpperBound?: number;
    units?: "words" | "word" | "sentences" | "sentence" | "paragraphs" | "paragraph";
    words?: string[];
    suffix?: string;
}
declare const loremIpsum: ({ count, format, paragraphLowerBound, paragraphUpperBound, random, sentenceLowerBound, sentenceUpperBound, units, words, suffix, }?: ILoremIpsumParams) => string;
export { loremIpsum, LoremIpsum };
