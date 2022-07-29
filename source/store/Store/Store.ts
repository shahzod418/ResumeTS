import IStoreState from '../../interfaces/IStoreState';

class Store {
  private static instance: Store;

  rootReducer;

  state: IStoreState | undefined;

  subscribers = {};

  private constructor(rootReducer: Function) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer(this.state);
  }

  public static getInstance(rootReducer: Function): Store {
    if (!Store.instance) {
      Store.instance = new Store(rootReducer);
    }

    return Store.instance;
  }

  public subscribe<KeyType extends keyof typeof this.subscribers>(key: KeyType, callback) {
    this.subscribers[key] = callback;
    this.subscribers[key](this.state);
  }

  public unsubscribe(key: keyof typeof this.subscribers) {
    delete this.subscribers[key];
  }

  public dispatch(action: object) {
    this.state = this.rootReducer(this.state, action);

    Object.values(this.subscribers).forEach((subscriberCallback) => {
      if (!!subscriberCallback && typeof subscriberCallback === 'function') {
        subscriberCallback(this.state);
      }
    });
  }
}

const createStore = (rootReducer: Function) => Store.getInstance(rootReducer);

export default createStore;
