import {useState} from "react";
import {getCurrentInputs} from "../../../shared/utils/storage";

export type FormInput = {
    key: string;
    textInput?: boolean;
    textArea?: boolean;
    datePicker?: boolean;
    value?: string;
};

export const useInputs = () :{
    inputs: FormInput[];
    addInput: (input: FormInput) => void;
    deleteInput: (key: string) => void;
} => {
    const [inputs, setInputs] = useState<FormInput[]>(getCurrentInputs);

    const addInput = (input: FormInput) => setInputs(inputs.concat([{...input}]));

    const deleteInput = (key: string) => setInputs(inputs.filter(input => input.key !== key));

    return {
        inputs,
        addInput,
        deleteInput
    };
}