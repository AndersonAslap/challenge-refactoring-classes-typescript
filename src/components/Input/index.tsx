import {
    useEffect,
    useRef,
    useState,
} from 'react';

import { Container } from './styles';

interface InputProps {
    name: string;
    placeholder:string;
    setValue: (value:string) => void;
}

export function Input({ name, placeholder, setValue } : InputProps) {
    const inputRef : any = useRef(null);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!inputRef.current?.value);
    }


  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
        <input
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            defaultValue={""}
            ref={inputRef}
            placeholder={placeholder}
            name={name}
            onChange={(event) => {setValue(event.target.value)}}
        />
    </Container>
    )
}