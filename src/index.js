import { fromEvent, interval } from "rxjs";
import { map, exhaustMap, take, tap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

const button = document.querySelector('#btn')

const observable = fromEvent(
    button, 'click'
).pipe(
    exhaustMap(() => {
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

// The exhaustMap will subscribe to inner observables. It will
// ignore incoming observables if the current observable is active.
// It can be useful if you wanna wait for a current obsercable to
// complete before moving on.