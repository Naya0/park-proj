import React, { useState } from 'react';

import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input';



const InputPhone = () => {
    const [value, setValue] = useState();

    return (
        <div className="input-container">
            <PhoneInput
                international={true}
                defaultCountry="RU"
                value={value}
                onChange={setValue}
                error={value ? (isValidPhoneNumber(value) ? undefined : 'Неверный формат введенного значения') : 'Номер телефона является обязательным'}
            />
        </div>
    )
}

export default InputPhone