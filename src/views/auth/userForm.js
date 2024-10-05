import React, { useState } from "react";

/**
 * useForm - Custom Hook to manage form state
 * @param {Object} initialValues - An object containing the initial values for the form inputs
 * @returns {Object} - An object containing the form values, a change handler, and a reset function
 */
function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    resetForm,
  };
}

export default useForm;
