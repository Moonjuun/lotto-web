// 천자리 수 콤마 반환하는 함수
export const formatThousandsCommas = (input: string | number): string => {
    const str = typeof input === 'number' ? String(input) : input;

    const formattedValue: string = str.replace(/[^\d.]+/g, '');
    const parts: string[] = formattedValue.split('.');
    const integerPart: string = parts[0].replace(
        /(\d)(?=(?:\d{3})+(?!\d))/g,
        '$1,',
    );
    const result: string =
        parts.length > 1 ? integerPart + '.' + parts[1] : integerPart;

    return result;
};
