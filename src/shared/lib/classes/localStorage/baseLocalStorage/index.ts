import {memoized} from '@shared/lib/utils/memoized';
import type {LocalStorage} from '../abstractLocalStorage';

class BaseLocalStorage implements LocalStorage {
  private CHANGE_STORAGE_EVENT = 'change-storage-event';
  private getLocalStorageValue = memoized((localStorage: Storage) => {
    return Object.keys(localStorage).reduce((acc, key) => ({...acc, [key]: localStorage.getItem(key)}), {});
  });

  constructor() {
    this.dispatchCustomEvent = this.dispatchCustomEvent.bind(this);
    this.setValue = this.setValue.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.clear = this.clear.bind(this);
  }

  private dispatchCustomEvent() {
    window.dispatchEvent(new StorageEvent(this.CHANGE_STORAGE_EVENT));
  }

  public getValue(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setValue(key: string, value: string): void {
    localStorage.setItem(key, value);
    this.dispatchCustomEvent();
  }

  public deleteValue(key: string) {
    localStorage.removeItem(key);
    this.dispatchCustomEvent();
  }

  public getSnapshot(): unknown {
    return this.getLocalStorageValue(localStorage);
  }

  public subscribe(callback: () => void): () => void {
    window.addEventListener(this.CHANGE_STORAGE_EVENT, callback);
    return () => window.removeEventListener(this.CHANGE_STORAGE_EVENT, callback);
  }

  public clear(): void {
    localStorage.clear();
    this.dispatchCustomEvent();
  }
}

export {BaseLocalStorage};
