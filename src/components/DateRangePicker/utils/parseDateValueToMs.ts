export function parseDateValueToMs(date: string | null) {
    return Date.parse(date || '');
}
