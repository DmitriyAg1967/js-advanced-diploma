/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import themes from './themes';
import Bowman from './characters/Bowman';
import Daemon from './characters/Daemon';
import Magician from './characters/Magician';
import Swordsman from './characters/Swordsman';
import Undead from './characters/Undead';
import Vampire from './characters/Vampire';
import PositionedCharacter from './PositionedCharacter';
import { characterGenerator, generateTeam } from './generators';

const playerClass = [Bowman, Magician, Swordsman];
const computerClass = [Undead, Vampire, Daemon];
const playerTeam = generateTeam(playerClass, 1, 2);
const computerTeam = generateTeam(computerClass, 1, 2);
const playerCellOne = [0, 8, 16, 24, 32, 40, 48, 56];
const playerCellTwo = [1, 9, 17, 25, 33, 41, 49, 57];
const computerCellOne = [6, 14, 22, 30, 38, 46, 54, 62];
const computerCellTwo = [7, 15, 23, 31, 39, 47, 55, 63];
// eslint-disable-next-line max-len
const playerTeamPosition = [new PositionedCharacter(playerTeam[0], playerCellOne[Math.floor(Math.random() * 8)]), new PositionedCharacter(playerTeam[1], playerCellTwo[Math.floor(Math.random() * 8)])];
// eslint-disable-next-line max-len
const computerTeamPosition = [new PositionedCharacter(computerTeam[0], computerCellOne[Math.floor(Math.random() * 8)]), new PositionedCharacter(computerTeam[1], computerCellTwo[Math.floor(Math.random() * 8)])];

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.level = 1;
    this.position = [];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    const theme = {
      1: themes.prairie,
      2: themes.desert,
      3: themes.arctic,
      4: themes.mountain,
    };
    this.theme = theme[this.level];

    this.gamePlay.drawUi(this.theme); // отрисовка поля
    // this.gamePlay.redrawPositions(); // отрисовка команд
    // this.gamePlay.redrawPositions(this.generateTeam(playerCell, 1, playerClass));
    // this.gamePlay.redrawPositions(this.generateTeam(computerCell, 1, computerClass));
    this.gamePlay.redrawPositions([...playerTeamPosition, ...computerTeamPosition]);
    this.position.push(playerTeamPosition[0], playerTeamPosition[1]);
    this.position.push(computerTeamPosition[0], computerTeamPosition[1]);

    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));
  }

  // eslint-disable-next-line no-unused-vars
  onCellClick(index) {
    // TODO: react to click
  }
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line lines-between-class-members
  onCellEnter(index) {
    // TODO: react to mouse enter
    const searchUnit = this.position.find((item) => item.position === index);
    if (searchUnit) {
      const unit = searchUnit.character;
      const message = `${'\u{1F396}'} ${unit.level} ${'\u{2694}'} ${unit.attack} ${'\u{1F6E1}'} ${unit.defence} ${'\u{2764}'} ${unit.health}`;
      this.gamePlay.showCellTooltip(message, index);
    }
  }

  // eslint-disable-next-line no-unused-vars
  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
  }
}
