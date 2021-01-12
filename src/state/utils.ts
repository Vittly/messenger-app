// todo: replace with UUID or something
let idCount = 0;
export function getNextId() {
    return `id-${idCount++}`;
}
