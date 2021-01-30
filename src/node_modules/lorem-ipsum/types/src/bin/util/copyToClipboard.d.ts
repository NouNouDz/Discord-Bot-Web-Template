/**
 * Copy text to the clipboard using a platform's native command.
 * @param  text  The text to copy.
 * @returns      A promise that resolves with the text to copy.
 */
declare const copyToClipboard: (text: string) => Promise<string>;
export default copyToClipboard;
