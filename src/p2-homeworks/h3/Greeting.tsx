import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter:(e:KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onEnter} // деструктуризация пропсов
) => {
    const inputClass = `${s.input} ${error ? s.error : ''}` // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <div className={s.inputWrapper}>
                <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onEnter}/>
                <div className={s.errorText}>{error}</div>
            </div>
            <button onClick={addUser} className={s.buttonClass} disabled={!!error} >add</button>
            <span>{totalUsers}</span>


        </div>
    )
}

export default Greeting
