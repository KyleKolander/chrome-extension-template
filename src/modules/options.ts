interface StorageObject
{
    [key: string]: any;
}

export class Options
{
    get defaultPrimaryBackgroundColor(): string
    {
        return '#202124';
    }
    get defaultSecondaryBackgroundColor(): string
    {
        return '#171717';
    }

    get KeyPrimaryBackgroundColor(): string
    {
        return 'primaryBackgroundColor';
    }

    get KeySecondaryBackgroundColor(): string
    {
        return 'secondaryBackgroundColor';
    }

    async getPrimaryBackgroundColor(): Promise<string>
    {
        return await Options.getValue(this.KeyPrimaryBackgroundColor, this.defaultPrimaryBackgroundColor);
    }

    async setPrimaryBackgroundColor(value: string): Promise<void>
    {
        await Options.setValue(this.KeyPrimaryBackgroundColor, value);
    }

    async getSecondaryBackgroundColor(): Promise<string>
    {
        return await Options.getValue(this.KeySecondaryBackgroundColor, this.defaultSecondaryBackgroundColor);
    }

    async setSecondaryBackgroundColor(value: string): Promise<void>
    {
        await Options.setValue(this.KeySecondaryBackgroundColor, value);
    }

    private static async getValue(key: string, value: string): Promise<string>
    {
        const obj: StorageObject = {};
        obj[key] = value;
        const items = await chrome.storage.sync.get(obj);
        return items[key] ?? value;
    }

    private static async setValue(key: string, value: string): Promise<void>
    {
        const storageObject: StorageObject = {};
        storageObject[key] = value;
        await chrome.storage.sync.set(storageObject);
    }
}
