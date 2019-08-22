import { getGreeting } from '../support/app.po';

describe('avatar', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to avatar!');
  });
});
