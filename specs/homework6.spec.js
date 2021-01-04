import supertest from 'supertest';
import { describe, expect, test } from '@jest/globals';
import { boardBody, urls } from '../framework/config';
import {
  boards, loginKaitenBearer, loginKaitenParams, spaces, users,
} from '../framework/services';

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer 95f88481-5d3a-4a16-a36e-83a254923aa9',
};

describe('Login via supertest (without Service)', () => {
  test('Login with username/password', async () => {
    const params = {
      username: 'blamaniq',
      password: 'Asdqwe123',
    };

    const r = await supertest(urls.kaiten)
      .post('/login')
      .send(params);
    expect(r.status)
      .toBe(302); // 200 приходит в insomnia, но здесь 302 - это норм?
  });

  // некорректный тест, т.к. GET - требуется POST ?
  test('Login with Bearer token', async () => {
    const r = await supertest(urls.kaiten)
      .get('/login') // post дает 404
      .set(headers);
    expect(r.status)
      .toBe(200);
    // В ответе - Sorry, the page not found. Как получить такую надпись в запросе?
  });
});

describe('Controller test (via services: login, spaces)', () => {
  test('login via service with Params', async () => {
    const params = {
      username: 'blamaniq',
      password: 'Asdqwe123',
    };
    const r = await new loginKaitenParams().loginParams(params);
    expect(r.status)
      .toBe(302);
  });

  // некорректный тест, т.к. GET - требуется POST ?
  test('login via service with Bearer', async () => {
    const r1 = await new loginKaitenBearer().loginBearer(headers);
    expect(r1.status)
      .toBe(200);
    // В ответе - Sorry, the page not found. Как получить такую надпись в запросе?
  });

  // createNewSpace
  test('CREATE NEW SPACE', async () => {
    const body = {
      id: 1,
      title: 'Space 555',
      subspace: false,
    };
    const r = await new spaces().createNewSpace(body);
    expect(r.status)
      .toBe(200);
  });

  // UPDATE SPACE
  test('UPDATE SPACE', async () => {
    const body = {
      title: 'updateSpaceTEST',
    };
    const r = await new spaces().updateSpace(body);
    expect(r.status)
      .toBe(200);
  });
  // ETRIEVE SPACE 27631
  test('RETRIEVE SPACE', async () => {
    const r = await new spaces().retrieveSpace();
    expect(r.status)
      .toBe(200);
  });
  // RETRIEVE LIST OF SPACES
  test('RETRIEVE LIST OF SPACES', async () => {
    const r = await new spaces().retrieveListOfSpaces();
    expect(r.status)
      .toBe(200);
  });

  // getListOfBoards
  test('get List Of Boards', async () => {
    const r = await new boards().getListOfBoards();
    expect(r.status)
      .toBe(200);
  });

  // CREATE NEW BOARD
  test('CREATE NEW BOARD', async () => {
    const r = await new boards().createNewBoard(boardBody);
    expect(r.status)
      .toBe(200);
  });

  // get list of users
  test('get List Of Users', async () => {
    const r = await new users().getListOfUsers();
    expect(r.status)
      .toBe(200);
  });
});
