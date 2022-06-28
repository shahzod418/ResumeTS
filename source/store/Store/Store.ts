class Store {
  private static instance: Store;

  rootReducer;

  state: object | undefined;

  subscribers = {};

  private constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer(this.state);
  }

  public static getInstance(rootReducer): Store {
    if (!Store.instance) {
      Store.instance = new Store(rootReducer);
    }

    return Store.instance;
  }

  public subscribe(key, callback) {
    this.subscribers[key] = callback;
    this.subscribers[key](this.state);
  }

  public unsubscribe(key) {
    delete this.subscribers[key];
  }

  public dispatch(action) {
    this.state = this.rootReducer(this.state, action);

    Object.values(this.subscribers).forEach((subscriberCallback) => {
      if (!!subscriberCallback && typeof subscriberCallback === 'function') {
        subscriberCallback(this.state);
      }
    });
  }
}

const createStore = (rootReducer) => Store.getInstance(rootReducer);

export default createStore;
