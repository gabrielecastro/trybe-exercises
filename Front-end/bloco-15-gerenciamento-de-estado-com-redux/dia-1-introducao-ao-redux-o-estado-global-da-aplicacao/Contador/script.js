// Pegando os elementos
const addition = document.getElementById('addition');
const subtraction = document.getElementById('subtraction');
const numberSpan = document.getElementById('number');

// Adicionando evento aos elementos
addition.addEventListener('click', () => {
  store.dispatch(addingAction());
})

subtraction.addEventListener('click', () => {
  store.dispatch(subtractAction());
})

// Action que vai dizer qual a mudança que eu quero
const addingAction = () => ({ type: SUM });
const subtractAction = () => ({ type: DECREASE });

// Action Types
const SUM = 'SUM';
const DECREASE = 'DECREASE';

const initialState = {
  number: 0,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SUM:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
       };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

// SUBSCRIBE - Toda vez que atualizar algo no redux ele passa aqui
store.subscribe(() => {
  const { number } = store.getState();
  numberSpan.innerText = number;
})