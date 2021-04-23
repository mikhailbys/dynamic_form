import {FormInstance} from "antd/lib/form/Form";
import {FormInput} from "../hooks/useInputs";
import moment from "moment/moment";

export const fillFormInitialValues = (form: FormInstance, inputs: FormInput[]) => {
    const initialValuesArray = [...inputs.map(input =>
        ([input.key, input.datePicker ? moment(input.value) : input.value]))];
    const initialValues = Object.fromEntries(new Map(initialValuesArray as []));
    form.setFieldsValue(initialValues);
};