abstract class LocalStorage {
  public abstract getValue(key: string): string | null;
  public abstract setValue(key: string, value: string): void;
  public abstract deleteValue(key: string): void;
  public abstract clear(): void;
  public abstract getSnapshot(): unknown;
  public abstract subscribe(callback: () => void): () => void;
}

export {LocalStorage};
