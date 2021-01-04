import supertest from 'supertest';
import { urls } from '../config';

export { users };

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer 95f88481-5d3a-4a16-a36e-83a254923aa9',
};

const users = function users() {

//GET LIST OF users
  this.getListOfUsers = async function gLoU() {
    const r = await supertest(urls.kaiten)
      .get('/api/v1/users')
      .set(headers);
    return r;
  };
};


