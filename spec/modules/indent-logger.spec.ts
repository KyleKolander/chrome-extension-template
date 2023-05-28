import { describe, expect, test, jest, afterEach, beforeEach } from '@jest/globals';
import type { SpyInstance } from 'jest-mock';
import { IndentLogger } from '../../src/modules/indent-logger';

const testCasesForInfoDebug: [string, string, number, string][] = [
    ['no indent',            'Hello, world!', 0, 'Hello, world!'        ],
    ['one level of indent',  'Hello, world!', 1, '    Hello, world!'    ],
    ['two levels of indent', 'Hello, world!', 2, '        Hello, world!'],
];

describe('IndentLogger', () =>
{
    describe('info()', () =>
    {
        let mockedConsole: SpyInstance<(message?: any, ...optionalParams: any[]) => void>;

        beforeEach(() =>
        {
            mockedConsole = jest.spyOn(console, 'info').mockImplementation(() => {});
        });

        afterEach(() =>
        {
            jest.restoreAllMocks();
        });

        test.each(testCasesForInfoDebug)
        ('should log an info message with %s', (_, message, indentLevel, expected) =>
        {
            const logger = new IndentLogger();
            logger.info(message, indentLevel);
            expect(mockedConsole).toHaveBeenCalledWith(expected);
        });
    });

    describe('debug()', () =>
    {
        let mockedConsole: SpyInstance<(message?: any, ...optionalParams: any[]) => void>;

        beforeEach(() =>
        {
            mockedConsole = jest.spyOn(console, 'debug').mockImplementation(() => {});
        });

        afterEach(() =>
        {
            jest.restoreAllMocks();
        });

        test.each(testCasesForInfoDebug)
        ('should log a debug message with %s', (_, message, indentLevel, expected) =>
        {
            const logger = new IndentLogger();
            logger.debug(message, indentLevel);
            expect(mockedConsole).toHaveBeenCalledWith(expected);
        });

        test('should not log a debug message', () => {
            const logger = new IndentLogger(false);
            logger.debug('no message');
            expect(mockedConsole).toHaveBeenCalledTimes(0);
        })
        });
});

// For reference, I'm mocking console.info and in node_modules/@types/node/console.d.ts,
// the info function is defined as follows:
//
//     info(message?: any, ...optionalParams: any[]): void;
//
// In node_modules/jest_mock/build/index.d.ts, SpyInstance is defined as follows:
//
//     export declare interface SpyInstance<T extends FunctionLike = UnknownFunction>
//         extends MockInstance<T> {}
//
//     export declare type FunctionLike = (...args: any) => any;
//
// Since SpyInstance takes a generic type T of type FunctionLike, which has a default value,
// I could have declared this instance without providing the generic type parameter,
// but it is better to be explicit and take full advantage of type safety.
//
