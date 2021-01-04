import supertest from 'supertest';
import { urls } from '../config';

export { spaces };

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer 95f88481-5d3a-4a16-a36e-83a254923aa9',
};

const spaces = function spaces() {
//CREATE NEW SPACE
  this.createNewSpace = async function cNS(body) {
    const r = await supertest(urls.kaiten)
      .post('/api/v1/spaces')
      .set(headers)
      .send(body);
    return r;
  };
  //UPDATE SPACE
  this.updateSpace = async function uS(body) {
    const r = await supertest(urls.kaiten)
      .patch('/api/v1/spaces/27631')
      .set(headers)
      .send(body);
    return r;
  };

  this.retrieveSpace = async function rS() {
    const r = await supertest(urls.kaiten)
      .get('/api/v1/spaces/27631')
      .set(headers);
    return r;
  };


  this.retrieveListOfSpaces = async function rLoS() {
    const r = await supertest(urls.kaiten)
      .get('/api/v1/spaces')
      .set(headers);
    return r;
  };
};

// export { retrieveListOfSpacesParams };
