import binarySearch from "./binarySearch";
import prepareArray from "../utils";
import { LIST_SIZE, TARGETS } from "../const";

describe("Multiple binary searches", () => {
    const list = prepareArray(LIST_SIZE);

    for (let i = 0; i < TARGETS.length; i++) {
        const target = TARGETS[i];

        test(`Binary search of ${LIST_SIZE} sorted items with target ${target}`, () => {
            expect(binarySearch(list, target)).toBe(true);
        });
    }
});
