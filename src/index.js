import { of } from "rxjs";
import { reduce } from 'rxjs/operators'

const observable = of(1,2,3,4,5).pipe(
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

// The reduce operator is the counterpart to the array.reduce
// function.

// In some cases, we may want to accumulate the values emitted 
// from an observable. The reduce operator accomplishes this 
// action.

// After the observable is completes, the reduce operator will
// push the value it accumulated over time.