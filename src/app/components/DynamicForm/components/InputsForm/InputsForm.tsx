import {FC} from "react";
import {Form} from "antd";
import {FormInput} from "../../hooks/useInputs";
import styles from './InputsForm.module.scss';
import {InputsWrapper} from "../InputsWrapper/InputsWrapper";
import {FormInstance} from "antd/lib/form/Form";
import {Mode} from "../../hooks/useCurrentMode";

type Props = {
    form: FormInstance
    mode: Mode
    inputs: FormInput[];
    deleteInputs: (index: string) => void;
    onFinish: (inputs: FormInput[]) => void;
};

export const InputsForm: FC<Props> = ({
  inputs,
  deleteInputs,
  mode,
  form,
}) => {
    return (
        <div className={styles.wrapper}>
            <Form form={form}>
                {inputs.map(input => (
                    <InputsWrapper
                        mode={mode}
                        label={`#${inputs.indexOf(input) + 1}`}
                        name={input.key}
                        inputKey={input.key}
                        key={input.key}
                        deleteInput={deleteInputs}
                        input={input}
                    />
                ))}
            </Form>
        </div>
    );
}