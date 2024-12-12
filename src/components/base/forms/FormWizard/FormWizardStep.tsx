import FormLabel from "../labels/FormLabel";
import {Input} from "../form.properties";
import {renderInput} from "../../../../utils/form.helper.tsx";


interface Props {
    step: any;
    register: any;
    errors: any;
    currentStep: number;
    onValueChange: any;
    control: any;
}

function FormWizardStep(props: Props) {
    const {step, register, errors, control, onValueChange} = props;
    const errorObjects = Object.entries(errors);

    return (
        <div>
            {step.inputs?.map((input: Input) => (
                <div className="py-3" key={input.name}>
                    <FormLabel
                        htmlFor={input.name}
                        className="block font-normal text-sm text-gray-700 mb-2"
                    >
                        {input.label}
                    </FormLabel>
                    {renderInput(input, register, control, onValueChange)}
                    <div>
                        <div className="text-red-500 text-xs font-semibold">
                            {errorObjects.map(([key, value]: any) => (
                                <span key={key}>
                  {key === input.name && <span>{value.message}</span>}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

            {/* {step.inputs?.map((input: Input, index: number) => (
        <div key={input.name} className="">
          <FormLabel>{input.label}</FormLabel>
          <FormInput
            type={input.type}
            {...register(input.name)}
            placeholder={input.placeholder}
          />

          <div>
            <div className="text-red-500 text-xs font-semibold">
              {errorObjects.map(([key, value]: any) => (
                <span key={key}>
                  {key === input.name && <span>{value.message}</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))} */}
        </div>
    );
}

export default FormWizardStep;
