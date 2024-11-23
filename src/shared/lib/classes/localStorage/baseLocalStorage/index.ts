import {LocalStorage} from '../abstractLocalStorage';
import type {StringKeys} from '@shared/lib/utilityTypes';

class BaseLocalStorage<State extends Record<string, string>> extends LocalStorage<State> {
  private readonly DEFAULT_VALUE = '';

  constructor() {
    super();
    this.setValue = this.setValue.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
    this.clear = this.clear.bind(this);
  }

  private getState = (localStorage: Storage) => {
    try {
      return JSON.stringify(
        Object.keys(localStorage).reduce((acc, key) => ({...acc, [key]: localStorage.getItem(key)}), {}),
      );
    } catch (e) {
      console.error('Local storage encode failed', e);
      return this.DEFAULT_VALUE;
    }
  };

  public getValue<Key extends StringKeys<State>>(key: Key): State[Key] | null {
    return localStorage.getItem(key) as State[Key] | null;
  }

  public setValue<Key extends StringKeys<State>>(key: Key, value: State[Key]): void {
    localStorage.setItem(key, value);
    this.dispatchCustomEvent();
  }

  public deleteValue<Key extends StringKeys<State>>(key: Key) {
    localStorage.removeItem(key);
    this.dispatchCustomEvent();
  }

  public getSnapshot(): string {
    return this.getState(localStorage);
  }

  public clear(): void {
    localStorage.clear();
    this.dispatchCustomEvent();
  }
}

export {BaseLocalStorage};
