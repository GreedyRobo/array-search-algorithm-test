export default function linearSearch(items: number[], target: number) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === target) return true;
    }

    return false;
}
