import { timer, interval } from "rxjs";

const intervalObserable = interval(1000)

const timerObservable =  timer(0,1000)



const subscription = observable.subscribe(
    console.log
)


