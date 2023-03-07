import { Provider } from 'react-redux';
import store from '../store/store';

export const UserProvider = ({ children }) => {
  return (
    <Provider store={store}>
      { children }
    </Provider >
  );
};