/* eslint-disable react/prop-types */
import { createContext, useContext } from 'react';
import iconArcade from '../assets/images/icon-arcade.svg';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconPro from '../assets/images/icon-pro.svg';
import { useReducer } from 'react';

// the context is created
const FormContext = createContext();

// initial state of the reducer
const initialState = {
  name: '',
  email: '',
  phone: '',
  isYearly: false,
  // arcade, advanced, pro
  // these are the existing plans, we pass them to the plan form to show the available plans with the appropriate prices
  plans: [
    {
      planName: 'arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      icon: iconArcade,
    },
    {
      planName: 'advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
      icon: iconAdvanced,
    },
    {
      planName: 'pro',
      monthlyPrice: 15,
      yearlyPrice: 150,
      icon: iconPro,
    },
  ],
  selectedPlan: {},
  // online-services, larger-storage, customizable profile
  addOns: [
    {
      addOnName: 'online service',
      addOndescription: 'access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      addOnName: 'larger storage',
      addOndescription: 'extra 1TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      addOnName: 'customizable profile',
      addOndescription: 'custom theme on your profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ],
  selectedAddOns: [],
  selectedAddOnsNames: [],
  totalPrice: 0,
};

// this is the reducer
function reducer(state, action) {
  switch (action.type) {
    // personal info
    case 'personal/name':
      return { ...state, name: action.payload };

    case 'personal/email':
      return { ...state, email: action.payload };

    case 'personal/phone':
      return { ...state, phone: action.payload };

    // plan
    case 'select/plan':
      return {
        ...state,
        selectedPlan: state.plans
          .filter(plan => plan.planName === action.payload)
          .at(0),
      };

    // addOns
    case 'addOn/add':
      return {
        ...state,
        selectedAddOns: [
          ...state.selectedAddOns,
          state.addOns
            .filter(addOn => addOn.addOnName === action.payload)
            .at(0),
        ],
        selectedAddOnsNames: [...state.selectedAddOnsNames, action.payload],
      };

    case 'addOn/remove':
      return {
        ...state,
        selectedAddOns: state.selectedAddOns.filter(
          addOn => addOn.addOnName !== action.payload
        ),
        selectedAddOnsNames: state.selectedAddOnsNames.filter(
          addOn => addOn !== action.payload
        ),
      };

    case 'total/calc':
      return {
        ...state,
        totalPrice:
          (state.isYearly
            ? state.selectedPlan.yearlyPrice
            : state.selectedPlan.monthlyPrice) +
          state.selectedAddOns.reduce((acc, cur) => {
            const price = state.isYearly ? cur.yearlyPrice : cur.monthlyPrice;
            return (acc += price);
          }, 0),
      };

    // yearly toggle
    case 'isYearly/toggle':
      return { ...state, isYearly: state.isYearly ? false : true };

    default:
      throw new Error('Unknown action');
  }
}

// and this is the provider component
function FormProvider({ children }) {
  const [
    {
      name,
      email,
      phone,
      plans,
      isYearly,
      selectedPlan,
      addOns,
      selectedAddOns,
      selectedAddOnsNames,
      totalPrice,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // handle the monthly or yearly payment
  function onYearlyChange() {
    dispatch({ type: 'isYearly/toggle' });
  }

  // grabing and changing the name,
  function onNameChange(e) {
    dispatch({ type: 'personal/name', payload: e.target.value });
  }
  //  email,
  function onEmailChange(e) {
    dispatch({ type: 'personal/email', payload: e.target.value });
  }
  // and phone
  function onPhoneChange(e) {
    dispatch({ type: 'personal/phone', payload: e.target.value });
  }

  // changing the plan selected
  function onPlanChange(e) {
    dispatch({ type: 'select/plan', payload: e.target.value });
  }

  // add on change
  function onAddOnChange(e) {
    const value = e.target.value;
    console.log(value);

    console.log(selectedAddOnsNames);
    selectedAddOnsNames.includes(value)
      ? dispatch({ type: 'addOn/remove', payload: value })
      : dispatch({ type: 'addOn/add', payload: value });
  }

  // calc the total
  function calcTotal() {
    dispatch({ type: 'total/calc' });
  }

  return (
    <FormContext.Provider
      value={{
        isYearly,
        onYearlyChange,
        onNameChange,
        name,
        onEmailChange,
        email,
        onPhoneChange,
        phone,
        onPlanChange,
        selectedPlan,
        plans,
        onAddOnChange,
        addOns,
        selectedAddOns,
        selectedAddOnsNames,
        calcTotal,
        totalPrice,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const value = useContext(FormContext);
  if (value === undefined)
    throw new Error(`you can't access the contex from outside the provider`);
  return value;
}

export { FormProvider, useForm };
