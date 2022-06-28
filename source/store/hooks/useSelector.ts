import { useContext, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import StoreContext from '../context/StoreContext';

const useSelector = (selector: Function) => {
  const componentId = useRef(nanoid());
  const store = useContext<any>(StoreContext);
  const [value, setValue] = useState(selector(store.state));

  useEffect(() => {
    store.subscribe(componentId.current, (state: object) => setValue(selector(state)));

    return () => store.unsubscribe(componentId);
  }, []);

  return value;
};

export default useSelector;
