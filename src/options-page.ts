import './sass/options-page.scss';

import { Dom, IndentLogger, Options } from "./modules";
import ColorPicker from '@thednp/color-picker';

const dom = new Dom();
const logger = new IndentLogger(true);
const options = new Options();

const selectorPrimaryBackgroundColor = `#${options.KeyPrimaryBackgroundColor}`;
const selectorSecondaryBackgroundColor = `#${options.KeySecondaryBackgroundColor}`;

const getColorPickerValue = (selector: string): string => ColorPicker.getInstance(dom.$(selector)).value;

async function saveOptions()
{
    logger.debug('Saving options...');

    await options.setPrimaryBackgroundColor(getColorPickerValue(selectorPrimaryBackgroundColor));
    await options.setSecondaryBackgroundColor(getColorPickerValue(selectorSecondaryBackgroundColor));

    dom.setTextContent('#statusDiv', 'Options saved', 750);
}

function initializeColorPicker(selector: string, color: string, defaultColor: string)
{
    const inputElement = dom.setAttribute(selector, 'data-color-keywords', `${defaultColor}:default`);
    const cp = new ColorPicker(inputElement);
    cp.color = new ColorPicker.Color(color);
    cp.update();
}

async function onLoaded()
{
    logger.debug('Initializing color picker controls...');

    const primaryBackgroundcolor = await options.getPrimaryBackgroundColor();
    await initializeColorPicker(selectorPrimaryBackgroundColor, primaryBackgroundcolor, options.defaultPrimaryBackgroundColor);

    const secondaryBackgroundcolor = await options.getSecondaryBackgroundColor();
    await initializeColorPicker(selectorSecondaryBackgroundColor, secondaryBackgroundcolor, options.defaultSecondaryBackgroundColor);
}

if (document != null)
{
    document.addEventListener('DOMContentLoaded', onLoaded);
    dom.$('#saveButton')?.addEventListener('click', saveOptions);
}
