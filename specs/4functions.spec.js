/* eslint-disable no-undef */
/**
 * В src/homework4.js напишите функцию "Колобок" и тесты к ней здесь.
 * Функция на вход принимает имя персонажа,
 * например, "дедушка", а в ответ возвращает, текстовую строку.
 * Значение текстовой строки - какой был результат взаимодействия Колобка с данным персонажем.
 * Например, "дедушка" - "Я от дедушки ушел".
 * В функции используйте конструкцию switch - https://learn.javascript.ru/switch
 */
import { describe, expect, test } from '@jest/globals';
import { kolobok, newYear } from '../src/homework/homework4';

describe('Kolobok: test the function with DDT', () => {
  test.each`
a                | expected
${'grandfather'} | ${'kolobok ran away from grandfather'}
${'grandmother'} | ${'kolobok ran away from grandmother'}
${'fox'}         | ${'kolobok was eaten by a fox'}

`('$a = $expected', ({ a, expected }) => {
    expect(kolobok(a)).toBe(expected);
  });
});
describe('Kolobok: not valid cases of function without DDT', () => {
  test('Number gives an error', () => {
    expect(() => kolobok(1234567)).toThrowError();
  });
  test('Space gives an error', () => {
    expect(() => kolobok(' ')).toThrowError();
  });
  test('NULL gives an error', () => {
    expect(() => kolobok(null)).toThrowError();
  });
  test('Bear (unknown entity) gives an error', () => {
    expect(() => kolobok('bear')).toThrowError();
  });
  test('Incorrect string format gives an error', () => {
    expect(() => kolobok(grandfather)).toThrowError();
  });
});
describe('Kolobok: init test', () => {
  test('it loads without error', () => {
    expect(kolobok).toBeDefined();
    expect(typeof kolobok).toBe('function');
  });
});

/**
 * В src/homework4.js напишите функцию "Новый год" и тесты к ней здесь.
 * Функция на вход принимает имя персонажа. Дед Мороз или Снегурочка.
 * Возвращает "Снегурочка! Снегурочка! Снегурочка!" или "Дед Мороз! Дед Мороз! Дед Мороз!
 * В функции используйте интерполяцию. https://learn.javascript.ru/es-string
 */
describe('newYear: Test with DDT if the function returns trinity', () => {
  test.each`
a                | expected
${'Ded Moroz'}   | ${'Ded Moroz! Ded Moroz! Ded Moroz!'}
${'Snegurochka'} | ${'Snegurochka! Snegurochka! Snegurochka!'}

`('$a = $expected', ({ a, expected }) => {
    expect(newYear(a)).toEqual(expected);
  });
});
describe('newYear: init test', () => {
  test('it loads without error', () => {
    expect(newYear).toBeDefined();
    expect(typeof newYear).toBe('function');
  });
});

describe('newYar: not valid cases of function without DDT', () => {
  test('Number gives an error', () => {
    expect(() => newYear(1234567)).toThrowError();
  });
  test('Space gives an error', () => {
    expect(() => newYear(' ')).toThrowError();
  });
  test('NULL gives an error', () => {
    expect(() => newYear(null)).toThrowError();
  });
  test('Joulupukki (unknown entity) gives an error', () => {
    expect(() => newYear('joulupukki')).toThrowError();
  });
  test('Incorrect string format gives an error', () => {
    expect(() => newYear(Snegurochka)).toThrowError();
  });
});
