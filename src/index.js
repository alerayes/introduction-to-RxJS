import { of, fromEvent} from "rxjs";
import { map, filter } from 'rxjs/operators'

const observable = fromEvent(document, 'keydown').pipe(
    map((event) => event.code),
    filter((code) => code === "Space")
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


// It filters values pushed from an observable.
// We can use the filter operator to stop an observable from 
// pushing a value by setting a condition. If the condition is not met
// the observer will never receive the value.
// It's a great operator for filtering values while keeping the
// observable active.