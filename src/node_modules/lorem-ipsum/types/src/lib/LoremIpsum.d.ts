import Generator, { IGeneratorOptions } from "../lib/generator";
declare class LoremIpsum {
    generator: Generator;
    format: string;
    suffix?: string;
    constructor(options?: IGeneratorOptions, format?: string, suffix?: string);
    getLineEnding(): string;
    formatString(str: string): string;
    formatStrings(strings: string[]): string[];
    generateWords(num?: number): string;
    generateSentences(num?: number): string;
    generateParagraphs(num: number): string;
}
export default LoremIpsum;
