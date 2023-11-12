import { of } from "rxjs";
import { map } from 'rxjs/operators'

const observable = of(1,2,3,4,5)


const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})

console.log('hello')


// The map operator will handle transforming a value pushed from an
// observable. We have complete control over the transformation of
// the value. It is very similar to the map function for an array.
