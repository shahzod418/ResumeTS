import IAction from '../../interfaces/IAction';
import IStore from '../../interfaces/IStore';

interface Index {
  [index: string]: Function;
}

class Store {
  private static instance: Store;

  rootReducer;

  state: IStore | undefined;

  subscribers: Index = {};

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

  public subscribe(key: string, callback: Function) {
    this.subscribers[key] = callback;
    this.subscribers[key](this.state);
  }

  public unsubscribe(key: string) {
    delete this.subscribers[key];
  }

  public dispatch(action: IAction) {
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
