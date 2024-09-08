import type {StringKeys} from '@shared/lib/utilityTypes';

abstract class LocalStorage<State extends Record<string, string>> {
  public abstract getValue<Key extends StringKeys<State>>(key: Key): State[Key] | null;
  public abstract setValue<Key extends StringKeys<State>>(key: Key, value: State[Key]): void;
  public abstract deleteValue<Key extends StringKeys<State>>(key: Key): void;
  public abstract clear(): void;
  public abstract getSnapshot(): string;
  public abstract subscribe(callback: () => void): () => void;
}

export {LocalStorage};
