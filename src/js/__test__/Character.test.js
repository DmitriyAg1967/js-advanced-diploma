import Character from '../Character';

test('Ошибка при создании new Character', () => {
  function result() {
    const unit = new Character(1);
    return unit;
  }
  expect(result).toThrow('нельзя создавать персонажа Character, так как это базовый класс');
});
