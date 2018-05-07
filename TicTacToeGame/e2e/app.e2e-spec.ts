import { TicTacToeGamePage } from './app.po';

describe('tic-tac-toe-game App', () => {
  let page: TicTacToeGamePage;

  beforeEach(() => {
    page = new TicTacToeGamePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
