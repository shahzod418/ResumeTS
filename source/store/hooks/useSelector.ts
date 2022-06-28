import { useContext, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import StoreContext from '../context/StoreContext';

const useSelector = (selector) => {
  const componentId = useRef(nanoid());
  console.log(componentId)
  const store = useContext(StoreContext);
  const [value, setValue] = useState(selector(store.state));

  useEffect(() => {
    store.subscribe(componentId.current, (state) => setValue(selector(state)));

    return () => store.unsubscribe(componentId);
  }, []);

  return value;
};

export default useSelector;
