import type {StringKeys} from '@shared/lib/utilityTypes';
import type {LocalStorage} from '../abstractLocalStorage';

class PropertyLocalStorage<State extends Record<string, string>> implements LocalStorage<State> {
  private readonly DEFAULT_VALUE = {};
  private readonly PROPERTY_ENDPOINT = 'state';
  private readonly CHANGE_STORAGE_EVENT = 'change-storage-event';

  constructor() {
    this.dispatchCustomEvent = this.dispatchCustomEvent.bind(this);
    this.setValue = this.setValue.bind(this);
    this.deleteValue = this.deleteValue.bind(this);
    this.getSnapshot = this.getSnapshot.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.clear = this.clear.bind(this);
    this.getState = this.getState.bind(this);
    this.updateState = this.updateState.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  private dispatchCustomEvent() {
    window.dispatchEvent(new StorageEvent(this.CHANGE_STORAGE_EVENT));
  }

  private getState(): Partial<State> {
    try {
      const state = localStorage.getItem(this.PROPERTY_ENDPOINT);
      return state ? JSON.parse(state) : this.DEFAULT_VALUE;
    } catch (e) {
      console.error('Local storage decode failed', e);
      return this.DEFAULT_VALUE;
    }
  }

  private storeCopy = this.getState();

  private updateState(value: Partial<State>) {
    try {
      const newState = JSON.stringify(value);
      this.storeCopy = value;
      localStorage.setItem(this.PROPERTY_ENDPOINT, newState);
    } catch (e) {
      console.error('Local storage encode failed', e);
    }
  }

  public getValue<Key extends StringKeys<State>>(key: Key): State[Key] | null {
    return this.storeCopy[key] ?? null;
  }

  public setValue<Key extends StringKeys<State>>(key: Key, value: State[Key]): void {
    this.updateState({...this.storeCopy, [key]: value});
    this.dispatchCustomEvent();
  }

  public deleteValue<Key extends StringKeys<State>>(key: Key) {
    this.updateState({...this.storeCopy, [key]: null});
    this.dispatchCustomEvent();
  }

  public getSnapshot(): string {
    return localStorage.getItem(this.PROPERTY_ENDPOINT) ?? '';
  }

  public subscribe(callback: () => void): () => void {
    window.addEventListener(this.CHANGE_STORAGE_EVENT, callback);
    return () => window.removeEventListener(this.CHANGE_STORAGE_EVENT, callback);
  }

  public clear(): void {
    this.updateState({});
    this.dispatchCustomEvent();
  }
}

export {PropertyLocalStorage};
