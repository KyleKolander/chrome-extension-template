import { IndentLogger } from "./";

export class Locker
{
    locks: Map<string, boolean>;
    logger: IndentLogger;

    constructor(logger: IndentLogger)
    {
        this.locks = new Map<string, boolean>();
        this.logger = logger;
    }

    isLocked(key: string)
    {
        return this.locks.get(key) === true;
    }

    setLock(key: string, lock: boolean)
    {
        this.locks.set(key, lock);
    }

    acquireLock(key: string, indentLevel: number)
    {
        if (this.isLocked(key))
        {
            return false;
        }

        this.logger.debug(`acquireLock(${key})`, indentLevel);

        this.setLock(key, true);

        return true;
    }

    releaseLock(key: string, indentLevel: number)
    {
        this.logger.debug(`releaseLock(${key})`, indentLevel);

        const lock = this.locks.get(key);
        if (lock === true)
        {
            this.locks.delete(key);
        }

        return true;
    }
}
