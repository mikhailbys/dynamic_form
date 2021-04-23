import {FormInput} from "../../components/DynamicForm/hooks/useInputs";

export const saveCurrentInputs = (inputs: FormInput[]) => {
    localStorage.setItem('inputs', JSON.stringify(inputs));
}

export const getCurrentInputs = (): FormInput[] => {
    const data = localStorage.getItem('inputs');
    return data ? JSON.parse(data) : []
}