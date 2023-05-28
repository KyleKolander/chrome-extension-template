import { Dom, IndentLogger, Options } from "../modules";

const dom = new Dom();
const logger = new IndentLogger(true);
const options = new Options();

async function apply()
{
    const primaryBackgroundColor = await options.getPrimaryBackgroundColor();
    const secondaryBackgroundColor = await options.getSecondaryBackgroundColor();

    const bgColorPrimaryCss   = `{ background-color: ${primaryBackgroundColor} !important; }`;
    const bgColorSecondaryCss = `{ background-color: ${secondaryBackgroundColor} !important; }`;

    // Create a new stylesheet object and add rules to it
    const ss = document.createElement("style");
    document.body.appendChild(ss);

    ss.sheet?.insertRule(`body ${bgColorPrimaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`#gb ${bgColorPrimaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`body > div:last-of-type ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`form[role="search"] > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) ${bgColorPrimaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`form[role="search"] > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1):hover ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`form[role="search"] > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1):focus-within ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`form > div > div > div > div:has(> div > div > div > ul[role="listbox"]) ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`form > div > div > div > center > input ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`form > div > div > div > center > input:last-of-type + div ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`form > div > div > div > div > div > center > input ${bgColorPrimaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`ul > li ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`ul > li:hover ${bgColorPrimaryCss}`, ss.sheet.cssRules.length);
    ss.sheet?.insertRule(`body > div:nth-of-type(1) > div:last-child ${bgColorSecondaryCss}`, ss.sheet.cssRules.length);

    const textArea = document.querySelector('textarea');
    if (textArea != null)
    {
        textArea.value = 'google.js content script loaded';
    }
}

apply().then(() =>
{
    logger.info("google.js content script loaded!");
});
