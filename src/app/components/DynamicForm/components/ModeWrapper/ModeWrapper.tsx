import {Header} from "../Header/Header";
import {InputsForm} from "../InputsForm/InputsForm";
import {Footer} from "../Footer/Footer";
import {useInputs} from "../../hooks/useInputs";
import {FC, useEffect} from "react";
import {Mode} from "../../hooks/useCurrentMode";
import {useFormActions} from "../../hooks/useFormActions";
import {fillFormInitialValues} from "../../utils/utils";
import {ModeEnum} from "../../../../shared/enums/Mode.enum";

type Props = {
    mode: Mode;
};

export const ModeWrapper:FC<Props> = ({
   mode,
}) => {
    const { inputs, addInput, deleteInput } = useInputs();
    const {form, onFinish} = useFormActions();

    useEffect(() => {
        mode !== ModeEnum.Add ?
            fillFormInitialValues(form, inputs)
            : form.resetFields();
    }, [form, inputs, mode]);

    return (
        <>
          <Header mode={mode} addInput={addInput} inputs={inputs}/>
          <InputsForm form={form} onFinish={onFinish} mode={mode} inputs={inputs} deleteInputs={deleteInput}/>
          <Footer onFinish={onFinish} inputs={inputs} mode={mode} />
        </>
    );
}