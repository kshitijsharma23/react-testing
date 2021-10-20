import React, { useState } from 'react';

import styles from './counterStyles.module.css';

enum CounterActions {
    INCREMENT = 'increment',
    DECREMENT = 'decrement',
}

const Counter: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = (action: CounterActions) => (): void => {
        if (action === CounterActions.INCREMENT) {
            setCounter(counter => counter + 1);
        } else {
            setCounter(counter => counter - 1);
        }
    }

    const isCounterZero = counter === 0;

    return (
        <div className={styles['counter-container']}>
            <button
                disabled={isCounterZero}
                className="decrement"
                // onClick={handleCounter(CounterActions.DECREMENT)}
                onClick={isCounterZero ? undefined : handleCounter(CounterActions.DECREMENT)}
            >
                -
            </button>
            <span className="counter-value">{counter}</span>
            <button
                className="increment"
                onClick={handleCounter(CounterActions.INCREMENT)}
            >
                +
            </button>
        </div>
    );
}

export default Counter;
