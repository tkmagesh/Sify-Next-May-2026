let StateManager = (() => {
  let _currentState = undefined,
    _subscribers = [],
    _reducer = null,
    _init_action = { type : "@init/action" };

  function getState() {
    return _currentState;
  }

  function subscribe(cbFn) {
    _subscribers.push(cbFn);
  }

  //private
  function triggerChange() {
    _subscribers.forEach((cbFn) => cbFn());
  }

  function dispatch(action) {
    let newState = _reducer(_currentState, action);
    if (newState === _currentState) return;
    _currentState = newState;
    triggerChange();
  }

  function createStore(reducerFn) {
    if (typeof reducerFn !== "function")
      throw new Error("reducer is mandatory");
    _reducer = reducerFn;
    _currentState = reducerFn(undefined, _init_action);
    return { getState, dispatch, subscribe };
  }
  return { createStore }
})();