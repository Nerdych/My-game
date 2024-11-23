import type {StringKeys} from '@shared/lib/utilityTypes';

abstract class LocalStorage<State extends Record<string, string>> {
  private readonly CHANGE_STORAGE_EVENT = 'change-storage-event';

  protected dispatchCustomEvent() {
    window.dispatchEvent(new StorageEvent(this.CHANGE_STORAGE_EVENT));
  }

  public subscribe(callback: () => void): () => void {
    window.addEventListener(this.CHANGE_STORAGE_EVENT, callback);
    return () => window.removeEventListener(this.CHANGE_STORAGE_EVENT, callback);
  }

  public abstract getValue<Key extends StringKeys<State>>(key: Key): State[Key] | null;
  public abstract setValue<Key extends StringKeys<State>>(key: Key, value: State[Key]): void;
  public abstract deleteValue<Key extends StringKeys<State>>(key: Key): void;
  public abstract clear(): void;
  public abstract getSnapshot(): string;
}

export {LocalStorage};
