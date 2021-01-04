import { test } from '@jest/globals';
import { fullTrim, nameIsValid } from '../src/homework/homework3';

/**
 * Допишите несколько unit тестов для функции (вспоминаем тест-дизайн),
 * которая удаляет пробелы и табуляторы в начале и конце строки.
 */

// https://question-it.com/questions/235015/chto-oznachaet-s--s--gm-v-javascript

// 1 space
test('Проверяем тримминг для пробела в начале слова', () => {
  expect(fullTrim(' Это домашка')).toEqual('Это домашка');
});
test('Проверяем тримминг для пробела в конце слова', () => {
  expect(fullTrim('test text ')).toEqual('test text');
});

// 2 spaces
test('Проверяем тримминг для 2 пробелов в начале слова', () => {
  expect(fullTrim('  test text')).toEqual('test text');
});
test('Проверяем тримминг для 2 пробелов в конце слова', () => {
  expect(fullTrim('test text  ')).toEqual('test text');
});

// Tab
test('Проверяем тримминг для tab в начале слова', () => {
  expect(fullTrim(' test text')).toEqual('test text');
});

test('Проверяем тримминг для tab в конце слова', () => {
  expect(fullTrim('test text  ')).toEqual('test text');
});

// \t symbol
test('Проверяем тримминг для \\t в начале слова', () => {
  expect(fullTrim('\t test text')).toEqual('test text');
});

// \n
test('Проверяем тримминг для \\n в начале слова', () => {
  expect(fullTrim('\n test text')).toEqual('test text');
});

// space+tab
test('Проверяем тримминг для space+tab', () => {
  expect(fullTrim(' test text ')).toEqual('test text');
});

// other symbols are not replaced
test('Проверяем тримминг для остальных символов (не изменяются)', () => {
  expect(fullTrim('!@#$%&*test text!@#$%&*')).toEqual('!@#$%&*test text!@#$%&*');
});

/**
 * Напишите параметризированный unit тест для функции, которая проверяет валидность кличек котиков.
 * Кличка счиатется валидной, если она соотвествует следующим условиям:
 * 1) Кличка содержит минимум два символа;
 * 2) Кличка не пустая;
 * 3) Кличка не содержит пробелов.

 Обратите внимание, в примере приведен обычный тест.
 Параметризированный тест - https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
 */

test.each`
  a             | expected
  ${'c'}        | ${false}
  ${'ca'}       | ${true}
  ${'CA'}       | ${true}
  ${'cat'}      | ${true}
  ${'cat '}     | ${false}
  ${' cat'}     | ${false}
  ${'cat t'}    | ${false}
  ${' '}        | ${false}
  ${'!@#$%&*'}  | ${true}
  ${null}       | ${null}
  `('returns $expected when $a is valid name', ({ a, expected }) => {
  expect(nameIsValid(a)).toBe(expected);
});
