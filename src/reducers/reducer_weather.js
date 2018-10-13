import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
  console.log("action inside reducer_weather:", action)
  switch (action.type) {
  case FETCH_WEATHER:
    // return state.concat([ action.payload.data ]); // don't use push. concat creates a new array, while push mutates the old one. YOu want to create a new array, not mutate the old one.
    return  [ action.payload.data, ...state ];
  }
  return state;
}