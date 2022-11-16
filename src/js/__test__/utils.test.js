import { calcTileType } from '../utils';

test('Если размер поля boardSize 3, индекс ячейки index 0 то должна вернуться строка top-left', () => {
  const result = calcTileType(0, 3);
  expect(result).toBe('top-left');
});

test('Если размер поля boardSize 3, индекс ячейки index 2 то должна вернуться строка top-right', () => {
  const result = calcTileType(2, 3);
  expect(result).toBe('top-right');
});

test('Если размер поля boardSize 5, индекс ячейки index 3 то должна вернуться строка top', () => {
  const result = calcTileType(3, 5);
  expect(result).toBe('top');
});

test('Если размер поля boardSize 4, индекс ячейки index 4 то должна вернуться строка left', () => {
  const result = calcTileType(4, 4);
  expect(result).toBe('left');
});

test('Если размер поля boardSize 4, индекс ячейки index 7 то должна вернуться строка right', () => {
  const result = calcTileType(7, 4);
  expect(result).toBe('right');
});

test('Если размер поля boardSize 5, индекс ячейки index 12 то должна вернуться строка right', () => {
  const result = calcTileType(12, 5);
  expect(result).toBe('center');
});

test('Если размер поля boardSize 5, индекс ячейки index 20 то должна вернуться строка bottom-left', () => {
  const result = calcTileType(20, 5);
  expect(result).toBe('bottom-left');
});

test('Если размер поля boardSize 5, индекс ячейки index 24 то должна вернуться строка bottom-right', () => {
  const result = calcTileType(24, 5);
  expect(result).toBe('bottom-right');
});

test('Если размер поля boardSize 5, индекс ячейки index 22 то должна вернуться строка bottom', () => {
  const result = calcTileType(22, 5);
  expect(result).toBe('bottom');
});

test('Если размер поля boardSize 5, индекс ячейки index 16 то должна вернуться строка center', () => {
  const result = calcTileType(16, 5);
  expect(result).toBe('center');
});

test('Если размер поля boardSize 5, индекс ячейки index 6 то должна вернуться строка center', () => {
  const result = calcTileType(6, 5);
  expect(result).toBe('center');
});
