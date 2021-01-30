export interface IBounds {
    min: number;
    max: number;
}
export declare type IPrng = () => number;
export declare type ISeedRandom = new (seed?: string) => IPrng;
export interface IMath {
    seedrandom: ISeedRandom;
}
export interface IGeneratorOptions {
    sentencesPerParagraph?: IBounds;
    wordsPerSentence?: IBounds;
    random?: IPrng;
    seed?: string;
    words?: string[];
}
declare class Generator {
    sentencesPerParagraph: IBounds;
    wordsPerSentence: IBounds;
    random: IPrng;
    words: string[];
    constructor({ sentencesPerParagraph, wordsPerSentence, random, seed, words, }?: IGeneratorOptions);
    generateRandomInteger(min: number, max: number): number;
    generateRandomWords(num?: number): string;
    generateRandomSentence(num?: number): string;
    generateRandomParagraph(num?: number): string;
    pluckRandomWord(): string;
}
export default Generator;
