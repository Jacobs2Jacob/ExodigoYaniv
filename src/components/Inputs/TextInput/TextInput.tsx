﻿import React, { useState } from 'react';
import baseStyles from '../InputBase.module.css';
import { InputBaseProps } from '../types';
import ShrinkLabel from '../ShrkinkLabel/ShrinkLabel';

interface TextInputProps extends InputBaseProps {
    type?: string;
}

const TextInput: React.FC<TextInputProps> = ({
    label,
    error,
    type = 'text',
    register,
    value = '',
    style,
    placeholder
}) => {
    const [isFocused, setIsFocused] = useState(false);

    // TODO: put it in shared utils
    const hasValue = value !== undefined && value !== '';

    return (
        <div style={{ position: 'relative' }}>
            <ShrinkLabel label={placeholder ? placeholder : label} inputHasValue={hasValue} inputIsFocused={isFocused} />

            <input
                {...register}
                type={type}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={style}
                value={value}
            />

            {error && <p className={baseStyles.inputErrorText}>{error.message}</p>}
        </div>
    );
};

export default React.memo(TextInput);