// `data$` is an observable stream of 10 numbers.
import { data$ } from './fixtures/1-data';

// TODO: Get the subscription and unsubscribe it after 1 second

// FINAL_START
// Subscribe using callbacks
const subscription = data$.subscribe(
  x => console.log(x),
  err => console.error(err),
  () => console.info('done')
);

// a one second delay
setTimeout(() => {
  //TODO: call unsubscribe in here!
  subscription.unsubscribe();
}, 1000);
// FINAL_END
