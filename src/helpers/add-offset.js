export function addOffset(map) {
    const offset = map.getSize().y * 0.1;
    map.ganBy([0, offset], {animate: false,});
}