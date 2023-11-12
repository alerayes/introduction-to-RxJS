import { interval } from "rxjs";
import { reduce, take, scan } from 'rxjs/operators'

const observable = interval(500).pipe(
    take(5),
    scan(
        (acc, val) => acc + val,
        0
    )
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

// It limits the values pushed by an observable.
// The take operator, accepts the number of values that can be 
// pushed by an observable internally. Once the limit reaches,
// the observable completes.