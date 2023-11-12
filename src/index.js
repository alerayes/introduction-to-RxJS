import { fromEvent, interval } from "rxjs";
import { map, switchMap, take, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const button = document.querySelector('#btn')

const observable = fromEvent(
    button, 'click'
).pipe(
    switchMap(() => {
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

// It performs a similar task to the mergeMap operator. Inner 
// observables are automatically subscribed by this operator.

// The mergeMap operator will not limit the number of inner active
// observables. On the other hand, the switchMap operator will
// limit the number of active, inner observables to one.

// It is considered one of the safest flatenning operators.

// It is great for managing one active subscription at a time.

// One realistic scenario for this operator is to handle requests.