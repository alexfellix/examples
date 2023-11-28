class WindowHome {
  public window: string;
  public key: string;
  public lock: string;

  constructor(key: string, lock: string, window: string) {
    this.key = key;
    this.lock = lock;
    this.window = window;
  }

  open() {
    return `Ele usou a ${this.key} para destravar o ${this.lock} e abrir a ${this.window}`;
  }
} 

const windowHome = new WindowHome('chave', 'cadeado', 'janela');

const result = windowHome.open();

console.log(result);
