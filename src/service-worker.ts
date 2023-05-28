import { IndentLogger } from "./modules";

const logger = new IndentLogger(true);

function onInstalled()
{
    logger.info('Extension successfully installed!');
}

chrome.runtime.onInstalled.addListener(onInstalled);
