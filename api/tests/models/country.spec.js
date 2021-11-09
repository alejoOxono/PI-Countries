const { conn } = require('../../src/db.js');
const { expect } = require('chai');
const { Country } = conn.models;
const {  DataTypes } = require('sequelize');


describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
    describe('id', () => {
      it('should throw an error if id is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid id')))
          .catch(() => done());
      });
      it('should work when its a valid id', () => {
        Country.create({ id: 'ARG' });
      });
    });
    describe('flag', () => {
      it('should throw an error if flag is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid flag')))
          .catch(() => done());
      });
      it('should work when its a valid flag', () => {
        Country.create({ flag: 'flag' });
      });
    });
    describe('capital', () => {
      it('should throw an error if capital is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid capital')))
          .catch(() => done());
      });
      it('should work when its a valid capital', () => {
        Country.create({ capital: 'Buenos Aires' });
      });
    });
    describe('Continent', () => {
      it('should throw an error if capital is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid Continent')))
          .catch(() => done());
      });
      it('should work when its a valid Continent', () => {
        Country.create({ continent: 'América' });
      });
    });
    
  });
});
