import { timer, 
        interval, 
        fromEvent,
        of,
        from } from "rxjs";

// const observable = interval(1000)

// const observable =  timer(0,1000)

// const observable = fromEvent(
//     document, 'click'
// )

// const observable = of(1,2,3,4,5)

const observable = from('https://jsonplaceholder.typicode.com/todos/1')

const subscription = observable.subscribe({
    next(value) {
        console.log(value)
    },
    complete(){
        console.log('complete')
    }
})

console.log('hello')

