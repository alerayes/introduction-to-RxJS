import { interval } from "rxjs";
import { reduce, take, scan, tap } from 'rxjs/operators'

const observable = interval(500).pipe(
    take(5),
    tap({
        next(val) {
            console.log(val)
        }
    }),
    reduce(
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

// It's an operator purely for debugging a pipeline. It does not 
// affect a stream or the values emitted from an observable.
// We can insert the tap operator throughout the pipeline for 
// debugging our operators by checking the values.