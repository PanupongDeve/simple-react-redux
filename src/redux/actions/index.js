import axios from 'axios';

import { FETCH_HELLO } from '../types';

export const fetchHello = () => dispatch => {
  dispatch({
    type: FETCH_HELLO,
    payload: 'Hello Wolrd'
  });
}