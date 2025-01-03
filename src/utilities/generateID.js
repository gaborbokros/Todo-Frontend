export default () => {
    const datePart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `${datePart}-${randomPart}`;
}