export default function binarySearch(items: number[], target: number) {
    let start = 0; //Inclusive
    let end = items.length; //Exclusive

    while (start < end) {
        const middleIndex = Math.floor((start + end) / 2);

        const value = items[middleIndex];

        if (value === target) return true;

        if (value > target) {
            end = middleIndex;
        }

        if (value < target) {
            start = middleIndex + 1;
        }
    }

    return false;
}
