import {action, makeObservable, observable} from 'mobx';
import type {PackActions, PackActionsParams, PackState} from '../types';

class Pack implements PackState, PackActions {
  name: PackState['name'] = 'mobx';
  author: PackState['author'] = '';
  difficulty: PackState['difficulty'] = 'easy';
  roundIds: PackState['roundIds'] = [];
  file: PackState['file'] = undefined;

  constructor() {
    makeObservable(this, {
      name: observable,
      author: observable,
      difficulty: observable,
      file: observable,
      roundIds: observable,
      editInfo: action.bound,
      addRound: action.bound,
      deleteRound: action.bound,
    });
  }

  editInfo(info: PackActionsParams['editInfo']) {
    const {name, difficulty, author, file} = info;

    this.name = name;
    this.author = author;
    this.difficulty = difficulty;
    this.file = file;
  }

  addRound(roundId: PackActionsParams['addRound']) {
    this.roundIds.push(roundId);
  }

  deleteRound(roundIdToDelete: PackActionsParams['deleteRound']) {
    this.roundIds.filter((roundId) => roundId !== roundIdToDelete);
  }
}

const packStore = new Pack();

export {packStore};
