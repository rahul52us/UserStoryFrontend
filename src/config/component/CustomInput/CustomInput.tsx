import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Switch,
  Textarea,
  useTheme,
} from "@chakra-ui/react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CustomInputProps {
  type?:
    | "password"
    | "number"
    | "text"
    | "switch"
    | "textarea"
    | "select"
    | "date";
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: any;
  name: string;
  onChange?: any;
  value?: any;
  w?: string;
  options?: any[];
  isSearchable?: boolean;
  isMulti?: boolean;
  getOptionLabel?: any;
  getOptionValue?: any;
  rows?: number;
  disabled?: boolean;
  showError? : boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  type,
  label,
  placeholder,
  error,
  name,
  value,
  onChange,
  required,
  options,
  isSearchable,
  isMulti,
  getOptionLabel,
  getOptionValue,
  disabled,
  rows,
  showError,
  ...rest
}) => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const renderInputComponent = () => {
    switch (type) {
      case "password":
        return (
          <Input
            type={showPassword ? "text" : "password"}
            pr="4.5rem"
            position="relative"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            required={required}
            disabled={disabled}
            {...rest}
          />
        );
      case "number":
        return (
          <Input
            type="number"
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            {...rest}
          />
        );
      case "text":
        return (
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
            {...rest}
          />
        );
      case "textarea":
        return (
          <Textarea
            rows={rows || 3}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
            {...rest}
          />
        );
      case "switch":
        return <Switch name={name} {...rest} />;
      case "select":
        return (
          <Select
            options={options}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            isClearable
            className={`chakra-select ${
              theme ? theme.components.Select.baseStyle : ""
            }`}
            isMulti={isMulti}
            isSearchable={isSearchable}
            getOptionLabel={getOptionLabel}
            getOptionValue={getOptionValue}
            isDisabled={disabled}
            components={{
              IndicatorSeparator: null,
              DropdownIndicator: () => (
                <div className="chakra-select__dropdown-indicator" />
              ),
            }}
          />
        );
      case "date":
        return (
          <DatePicker
            customInput={
              <Input className="chakra-input" style={{ width: "100%" }} />
            }
            name={name}
            selected={value}
            onChange={onChange}
            placeholderText={placeholder}
            className="chakra-input"
            isClearable
            disabled={disabled}
            {...rest}
          />
        );
      default:
        return (
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            disabled={disabled}
            {...rest}
          />
        );
    }
  };

  return (
    <FormControl id={name} isInvalid={!!error && showError}>
      <FormLabel fontSize={"small"} mt={2}>
      {label} {required && <span style={{color:'red'}}>*</span>}
      </FormLabel>
      <div style={{ position: "relative" }}>
        {renderInputComponent()}
        {type === "password" && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "0.75rem",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            onClick={handleTogglePassword}
          >
            {showPassword ? (
              <RiEyeOffLine size={18} />
            ) : (
              <RiEyeLine size={18} />
            )}
          </div>
        )}
      </div>
      {showError && error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomInput;
