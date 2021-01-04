import supertest from 'supertest';
import { urls } from '../config';


export { boards };

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer 95f88481-5d3a-4a16-a36e-83a254923aa9',
};

const boards = function boards() {
//CREATE NEW BOARD
  this.createNewBoard = async function cNB(body) {
    const r = await supertest(urls.kaiten)
      .post('/api/v1/spaces/27631/boards')
      .set(headers)
      .send(body);
    return r;
  };

//GET LIST OF BOARDS
  this.getListOfBoards = async function gLoB () {
    const r = await supertest(urls.kaiten)
      .get('/api/v1/spaces/27631/boards')
      .set(headers);
    return r;
  };
};


