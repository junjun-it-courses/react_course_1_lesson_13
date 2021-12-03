test('create user', () => {
    const user = { name: 'Mark', age: 28 };

    // Тут код, добавляющий пользователя в базу данных

    expect(user.age).toEqual(28);
});

test('create user 2', () => {
    const user = { name: 'Mark', age: 28 };

    // Тут код, добавляющий пользователя в базу данных

    expect(user.name).toEqual('Mark');
});