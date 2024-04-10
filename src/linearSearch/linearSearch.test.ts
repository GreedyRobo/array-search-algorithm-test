import linearSearch from "./linearSearch";
import prepareArray from "../utils";
import { TARGETS, LIST_SIZE } from "../const";

describe("Multiple linear searches", () => {
    const list = prepareArray(LIST_SIZE);

    for (let i = 0; i < TARGETS.length; i++) {
        const target = TARGETS[i];

        test(`Linear search of ${LIST_SIZE} sorted items with value ${target}`, () => {
            expect(linearSearch(list, target)).toBe(true);
        });
    }
});
