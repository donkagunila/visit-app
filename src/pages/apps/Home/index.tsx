import {useState} from "react";
import Button from "../../../components/base/buttons/Button";
import {CreditCard, Home, Receipt} from "lucide-react";
import {twMerge} from "tailwind-merge";

const HomePage = () => {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        personalInfo: {
            firstName: '',
            middleName: '',
            lastName: '',
            passportNumber: '',
            passportExpiry: '',
            nationality: '',
            dateOfBirth: '',
            flightNumber: '',
            arrivalDate: '',
            departureDate: '',
        },
        paymentInfo: {
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            cardHolderName: '',
        },
        paymentReference: null
    });

    const handleChange = (e: any, section: any) => {
        const {name, value} = e.target;

        setFormData(prevState => ({
            ...prevState,
            [section]: {
                // @ts-expect-error
                ...prevState[section],
                [name]: value
            }
        }));
    };

    const nextStep = () => {
        if (step === 1 && validatePersonalInfo()) {
            setStep(2);
        } else if (step === 2 && validatePayment()) {
            // Simulate payment processing
            const paymentRef = `ZNZ${Math.floor(100000 + Math.random() * 900000)}`;
            //@ts-ignore
            setFormData(prev => ({
                ...prev,
                paymentReference: paymentRef
            }));
            setStep(3);
        }
    };

    const prevStep = () => {
        setStep(prevStep => Math.max(prevStep - 1, 1));
    };

    const validatePersonalInfo = () => {
        const {
            firstName,
            // middleName,
            // passportExpiry,
            lastName,
            passportNumber,
            // nationality,
            dateOfBirth
        } = formData.personalInfo;
        return firstName && lastName && passportNumber && dateOfBirth;
    };

    const validatePayment = () => {
        const {cardNumber, expiryDate, cvv, cardHolderName} = formData.paymentInfo;
        return cardNumber && expiryDate && cvv && cardHolderName;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Final submission logic
        alert(`Insurance purchased!\nPayment Reference: ${formData.paymentReference}`);

    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    className="input"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.personalInfo.firstName}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    placeholder="Enter first name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="middleName">Middle Name</label>
                                <input
                                    type="text"
                                    id="middleName"
                                    name="middleName"
                                    value={formData.personalInfo.middleName}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    placeholder="Enter MiddleName name"
                                    required
                                />
                            </div>


                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.personalInfo.lastName}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    placeholder="Enter last name"
                                    required
                                />
                            </div>


                        </div>
                        <hr className="border-dashed"/>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="passportNumber">Passport Number</label>
                                <input
                                    type="text"
                                    id="passportNumber"
                                    name="passportNumber"
                                    value={formData.personalInfo.passportNumber}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    placeholder="Enter passport number"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="passportExpiry">Passport Expiry</label>
                                <input
                                    type="date"
                                    id="passportExpiry"
                                    name="passportExpiry"
                                    value={formData.personalInfo.passportExpiry}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    placeholder="Enter passport Expiry"
                                    required
                                />
                            </div>
                            <div>
                                <label>Nationality</label>
                                <input
                                    type="text"
                                    id="nationality"
                                    name="nationality"
                                    value={formData.personalInfo.nationality}
                                    onChange={(e) => handleChange(e, 'nationality')}
                                    placeholder="Enter passport Expiry"
                                    required
                                />
                                {/*<Select*/}
                                {/*    value={formData.personalInfo.nationality}*/}
                                {/*    onValueChange={(value) => setFormData(prev => ({*/}
                                {/*        ...prev,*/}
                                {/*        personalInfo: {*/}
                                {/*            ...prev.personalInfo,*/}
                                {/*            nationality: value*/}
                                {/*        }*/}
                                {/*    }))}*/}
                                {/*>*/}
                                {/*    <SelectTrigger>*/}
                                {/*        <SelectValue placeholder="Select nationality"/>*/}
                                {/*    </SelectTrigger>*/}
                                {/*    <SelectContent>*/}
                                {/*        <SelectItem value="tz">Tanzanian</SelectItem>*/}
                                {/*        <SelectItem value="us">United States</SelectItem>*/}
                                {/*        <SelectItem value="uk">United Kingdom</SelectItem>*/}
                                {/*        <SelectItem value="ca">Canada</SelectItem>*/}
                                {/*        <SelectItem value="au">Australia</SelectItem>*/}
                                {/*        <SelectItem value="other">Other</SelectItem>*/}
                                {/*    </SelectContent>*/}
                                {/*</Select>*/}
                            </div>
                            <div>
                                <label htmlFor="dateOfBirth">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.personalInfo.dateOfBirth}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="flightNumber">Flight Number</label>
                                <input
                                    type="text"
                                    id="flightNumber"
                                    name="flightNumber"
                                    value={formData.personalInfo.flightNumber}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    placeholder="Enter flight number"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="arrivalDate">Arrival Date</label>
                                <input
                                    type="date"
                                    id="arrivalDate"
                                    name="arrivalDate"
                                    value={formData.personalInfo.arrivalDate}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="departureDate">Departure Date</label>
                                <input
                                    type="date"
                                    id="departureDate"
                                    name="departureDate"
                                    value={formData.personalInfo.departureDate}
                                    onChange={(e) => handleChange(e, 'personalInfo')}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="cardHolderName">Card Holder Name</label>
                            <input
                                type="text"
                                id="cardHolderName"
                                name="cardHolderName"
                                value={formData.paymentInfo.cardHolderName}
                                onChange={(e) => handleChange(e, 'paymentInfo')}
                                placeholder="Enter name on card"
                                required
                            />
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="cardNumber">Card Number</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={formData.paymentInfo.cardNumber}
                                    onChange={(e) => handleChange(e, 'paymentInfo')}
                                    placeholder="1234 5678 9012 3456"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="expiryDate">Expiry Date</label>
                                <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={formData.paymentInfo.expiryDate}
                                    onChange={(e) => handleChange(e, 'paymentInfo')}
                                    placeholder="MM/YY"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.paymentInfo.cvv}
                                onChange={(e) => handleChange(e, 'paymentInfo')}
                                placeholder="123"
                                required
                                maxLength={3}
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4 text-center">
                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold text-green-600 mb-4">Payment Successful!</h3>
                            <div className="bg-white p-4 rounded-md shadow-md">
                                <p className="text-lg font-semibold">Your Payment Reference:</p>
                                <p className="text-3xl font-bold text-primary">
                                    {formData.paymentReference}
                                </p>
                            </div>
                        </div>
                        <div className="text-muted-foreground">
                            <p>Please keep this reference number for your records.</p>
                            <p>A confirmation email will be sent to you shortly.</p>
                        </div>

                        {/*<div>*/}
                        {/*    <QRCodeSVG value="ewwewewe"/>*/}

                        {/*</div>*/}
                    </div>
                );
            default:
                return null;
        }
    };

    // @ts-ignore
    const StepIndicator = ({currentStep, stepNumber, icon: Icon, title}) => {
        const isActive = currentStep === stepNumber;
        const isPast = currentStep > stepNumber;

        return (
            <div className="flex items-center justify-center gap-2 flex-1">
                <div className={twMerge([
                    'w-[45px] h-[45px] rounded-full flex items-center justify-center',
                    `${isActive ? 'bg-primary text-white' : isPast ? 'bg-green-100 text-green-600' : 'bg-muted text-muted-foreground'}`
                ])}>
                    <Icon className="w-4 h-4"/>
                </div>

                <div
                    className={`font-medium flex-1 text-sm my-3 ${isActive ? 'text-primary' : isPast ? 'text-green-600' : 'text-muted-foreground'}`}>
                    {title}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-3xl mx-auto my-12 md:my-32 bg-white p-5 rounded-xl border border-slate-200">

            <div>
                <div className="border-b pb-4">
                    <div className="text-2xl font-bold text-center">Zanzibar Travel Insurance</div>
                    <div className="text-center text-slate-700">Required insurance for all visitors</div>
                </div>

                {/* Step Indicators */}
                <div className="flex flex-wrap justify-between items-center py-6">
                    <div className="flex-1 min-w-[200px]">
                        <StepIndicator
                            currentStep={step}
                            stepNumber={1}
                            icon={Home}
                            title="Personal Details"
                        />
                        <div
                            className={`h-0.5 mt-2 relative top-[20px] w-full mx-2 ${step > 1 ? 'bg-primary' : 'bg-muted'}`}></div>
                    </div>

                    <div className="flex-1 min-w-[200px]">

                        <StepIndicator
                            currentStep={step}
                            stepNumber={2}
                            icon={CreditCard}
                            title="Payment Details"
                        />
                        <div
                            className={`h-0.5 mt-2 relative top-[20px] w-full mx-2 ${step > 2 ? 'bg-primary' : 'bg-muted'}`}></div>
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <StepIndicator
                            currentStep={step}
                            stepNumber={3}
                            icon={Receipt}
                            title="Process Confirmation"
                        />
                    </div>
                </div>
            </div>

            <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {renderStep()}

                    <div className="flex justify-between mt-4">
                        {step > 1 && step < 3 && (
                            <Button
                                type="button"
                                variant="outline-info"
                                onClick={prevStep}
                            >
                                Previous
                            </Button>
                        )}

                        {step < 2 && (
                            <Button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto"
                                disabled={!validatePersonalInfo()}
                            >
                                Next
                            </Button>
                        )}

                        {step === 2 && (
                            <Button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto"
                                disabled={!validatePayment()}
                            >
                                Pay Now
                            </Button>
                        )}

                        {step === 3 && (
                            <Button
                                type="submit"
                                className="ml-auto"
                            >
                                Finish
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HomePage