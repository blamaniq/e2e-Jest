import supertest from 'supertest';
import { urls } from '../config';

const
  headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 95f88481-5d3a-4a16-a36e-83a254923aa9',
  };

const loginKaitenParams = function loginKaitenParams() {
  this.loginParams = async function loginWithParams(params) {
    const r = await supertest(urls.kaiten)
      .post('/login')
      .send(params);
    return r;
  };
};

const loginKaitenBearer = function loginKaitenBearer() {
  this.loginBearer = async function loginWithBearer() {
    const r = await supertest(urls.kaiten)
      .get('/login') // невенрный запрос, но POST даёт 404. Из-за того, логин нужен обязательно?
      .set(headers);
    return r;
  };
};

export { loginKaitenBearer, loginKaitenParams };
