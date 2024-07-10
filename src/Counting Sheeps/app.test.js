import { countSheeps } from '../Counting Sheeps/app';
import { describe, it, expect } from 'vitest';

describe('countSheeps', () => {
    it('debería contar correctamente las ovejas en la lista', () => {
        const list1 = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true];
        const list2 = [false, false, false];

        expect(countSheeps(list1)).toBe('There are 17 sheep in total');
        expect(countSheeps(list2)).toBe('UPS!!! Wolfs eaten Sheeps');
    });
});
