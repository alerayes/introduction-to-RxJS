import { fromEvent, interval } from "rxjs";
import { map, concatMap, take, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const button = document.querySelector('#btn')

const observable = fromEvent(
    button, 'click'
).pipe(
    concatMap(() => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1').pipe(
            take(5),
            tap({
                complete(){
                    console.log('inner observable has been completed')
                }
            }),
        )
    }),
)

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})

console.log('hello')

// The concatMap operator is another operator for flattening
// observables. The inner observables are automatically subscribed
// by this operator. This operator will limit the number of active
// observables to one.
// Instead of cancelling the previous observable, like the switchMap
// operator does, this operator will place observables into a 
// queue. The next observable in the queue will not be subscribed
// to until the current active observable has been completed.