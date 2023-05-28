export class IndentLogger
{
    logDebugMessages: boolean;
    spacesPerIndentLevel: number;

    constructor(logDebugMessages = true, spacesPerIndentLevel = 4)
    {
        this.logDebugMessages = logDebugMessages;
        this.spacesPerIndentLevel = spacesPerIndentLevel;
    }

    indent(message: string, indentLevel = 0)
    {
        const indentSpaces = ' '.repeat(indentLevel * this.spacesPerIndentLevel);
        return message.split('\n').map(x => indentSpaces + x).join('\n');
    }

    debug(message: string, indentLevel = 0)
    {
        if (this.logDebugMessages)
        {
            console.debug(this.indent(message, indentLevel));
        }
    }

    info(message: string, indentLevel = 0)
    {
        console.info(this.indent(message, indentLevel));
    }

    getFormattedJson(json: any, indentLevel = 0)
    {
        return this.indent(JSON.stringify(json, null, this.spacesPerIndentLevel), indentLevel);
    }
}
