import { classNames } from './classNames';

describe('classNames', () => {
    test('create single className', () => {
        const expectedValue = 'someClass';
        expect(classNames('someClass'))
            .toBe(expectedValue);
    });

    test('create string with additional classes', () => {
        const expectedValue = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expectedValue);
    });

    test('create string with mods and additional classes', () => {
        const expectedValue = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2']))
            .toBe(expectedValue);
    });

    test('create string with mods (false) and additional classes', () => {
        const expectedValue = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2']))
            .toBe(expectedValue);
    });

    test('create string with mods (undefined) and additional classes', () => {
        const expectedValue = 'someClass class1 class2 scrollable';
        expect(classNames('someClass', { hovered: undefined, scrollable: true }, ['class1', 'class2']))
            .toBe(expectedValue);
    });
});
