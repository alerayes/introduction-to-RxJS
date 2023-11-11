import { timer, 
        interval, 
        fromEvent } from "rxjs";

// const observable = interval(1000)

// const observable =  timer(0,1000)

const observable = fromEvent(
    document, 'click'
)

const subscription = observable.subscribe(
    console.log
)


