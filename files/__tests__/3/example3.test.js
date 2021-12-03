const sum = (a, b) => a + b;
let result;

beforeEach(() => {
    // Вызывается тестируемый код. Это противоречит идее beforeEach.
    result = sum(5, 9);
});

test('result', () => {
    // Здесь только проверка
    expect(result).toEqual(14);
});