import {makeObservable, observable} from 'mobx';
import type {RoundActionsParams, RoundState} from '../types';

class Round implements RoundState {
  map: RoundState['map'] = {};

  constructor() {
    makeObservable(this, {
      map: observable,
    });
  }

  addRound() {
    this.map[0] = {id: 0, name: `Round ${0}`, type: 'default', categoryIds: []};
  }

  editRound(info: RoundActionsParams['editRound']) {
    const {id, name, type} = info;
    const round = this.map[id];

    if (!round) {
      return;
    }

    round.name = name;
    round.type = type;
  }
}

const roundStore = new Round();

export {roundStore};
