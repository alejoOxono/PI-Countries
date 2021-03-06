/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
  id: 'ARG',
  flag: 'flagArgentina',
  continent: 'America',
  capital: 'Buenos Aires'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /api/countries', () => {
    it('should get 200', () =>
      agent.get('/api/countries').expect(200)
    );
  });
  describe('GET /api/countries/ARG', () => {
    it('should get the info from ARG', () =>
    agent.get('/api/countries/ARG').expect([
      {
        id: 'ARG',
        name: 'Argentina',
        flag: 'flagArgentina',
        shield: null,
        map: null,
        info: null,
        continent: 'America',
        capital: 'Buenos Aires',
        region: null,
        area: null,
        population: null,
        activities: []
      }
    ]))
  });
  describe('GET /api/countries', () => {
    it('should get the info from ARG', () =>
    agent.get('/api/countries').expect([
      {
        id: 'ARG',
        name: 'Argentina',
        flag: 'flagArgentina',
        shield: null,
        map: null,
        info: null,
        continent: 'America',
        capital: 'Buenos Aires',
        region: null,
        area: null,
        population: null,
        activities: []
      }
    ]))
  });
  describe('GET /api/countries?name=ARG', () => {
    it('should get the info from ARG', () =>
    agent.get('/api/countries?name=ARG').expect([
      {
        id: 'ARG',
        name: 'Argentina',
        flag: 'flagArgentina',
        shield: null,
        map: null,
        info: null,
        continent: 'America',
        capital: 'Buenos Aires',
        region: null,
        area: null,
        population: null,
        activities: []
      }
    ]))
  });
});
