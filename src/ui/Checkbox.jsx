import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-green-500);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

const Checkbox = React.forwardRef(
  ({ checked, onChange, disabled = false, id, children, ...props }, ref) => {
    return (
      <StyledCheckbox>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          ref={ref} // Pass the ref here
          {...props}
        />
        <label htmlFor={!disabled ? id : ""}>{children}</label>
      </StyledCheckbox>
    );
  }
);

Checkbox.displayName = "Checkbox"; // Add a display name for better debugging

// Define PropTypes
Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

// Default props
Checkbox.defaultProps = {
  checked: undefined,
  onChange: undefined,
  disabled: false,
  children: null,
};

export default Checkbox;
