import { useState } from "react"



export const AddTodoForm = () => {
    const [TodoText, setTodoText] = useState<string>("")
   function handleFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
     e.preventDefault()
   }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={TodoText} onChange={(e)=>setTodoText(e.target.value)}/>
                <button type="submit">Add todo</button>

            </form>
        
        </>
    )
}