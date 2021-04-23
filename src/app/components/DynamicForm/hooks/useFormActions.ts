import {FormInstance, useForm} from "antd/lib/form/Form";
import {FormInput} from "./useInputs";
import {saveCurrentInputs} from "../../../shared/utils/storage";
import { message, Button } from 'antd';

export const useFormActions = () : {
    form: FormInstance;
    onFinish: (inputs: FormInput[]) => void;
} => {
    const [form] = useForm();

    const onFinish = (inputs: FormInput[]) => {
        const data = form.getFieldsValue();
        console.log(data)
        const processedInputs: FormInput[] = inputs.map(input => {
            input.value = data[input.key];
            return input;
        });
        saveCurrentInputs(processedInputs);
        message.success('Your data was stored successfully!');
    }

    return {
        form,
        onFinish
    }
}