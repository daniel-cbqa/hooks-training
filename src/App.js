import React from "react"; // { useState }
//import StatelessComponent from "./StatelessComponent";
//import ClassBasedComponent from "./ClassBasedComponent";
//import CounterClassBasedComponent from "./CounterClassBasedComponent";
//import LifecycleMethodsInClassBasedComponent from "./useEffectHook/LifecycleMethodsInClassBasedComponent";
//import UseEffectHook from "./useEffectHook/UseEffectHook";
//import UseEffectExample from "./useEffectHook/useEffectExample";
//import CreateContextHook from "./createContextHook/CreateContextHook";
//import ReactContext from "./createContextHook/ReactContext";
//import CustomHook from "./customHook/CustomHook";
//import CounterCustomHook from "./customHook/CounterCustomHook";
import CustomHookChallenge from "./customHook/CustomHookChallenge";

/*function IntroductionToUseState() {
  const [variable, setVariable] = useState(false);
  const text = variable ? "Active" : "Inactive";
  const handleOnClick = () => setVariable(!variable);
  return <button onClick={handleOnClick}>{text}</button>;
}*/

/*function CounterWithReactHooks() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  function handleReset() {
    setCount(0);
  }
  return (
    <div>
      <br />
      <button onClick={handleIncrease}>Increase</button>&nbsp;&nbsp;
      <button onClick={handleDecrease}>Decrease</button>&nbsp;&nbsp;
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </div>
  );
}*/

/*function UseStateWithObjectArgument() {
  /*const [state, setState] = useState({
    city: "",
    country: ""
  });

  function handleChange(event) {
    const target = event.target.name;
    const value = event.target.value;
    setState({
      ...state,
      [target]: value
    });
  }

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="City"
          name="city"
          value={state.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="country"
          type="text"
          placeholder="Country"
          value={state.country}
          onChange={handleChange}
        />
      </div>
      <h4>You live in {`${state.city}, ${state.country}`}</h4>
    </form>
  );*/
/*
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const handleChangeCity = event => setCity(event.target.value);
  const handleChangeCountry = event => setCountry(event.target.value);

  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="City"
          name="city"
          value={city}
          onChange={handleChangeCity}
        />
      </div>
      <div>
        <input
          name="country"
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleChangeCountry}
        />
      </div>
      <h4>You live in {`${city}, ${country}`}</h4>
    </form>
  );
}*/

function App() {
  //stateless functional component
  //return <StatelessComponent />;

  //class based component
  //return <ClassBasedComponent />;

  //introduction to useState
  //return IntroductionToUseState();

  //Counter with a class based component
  //return <CounterClassBasedComponent />;

  //Counter with a react hooks
  //return CounterWithReactHooks();

  //UseStateWithObjectArgument
  //return UseStateWithObjectArgument();

  //LifeCycleMethods
  //return <LifecycleMethodsInClassBasedComponent />;

  //useEffect Hook
  //return <UseEffectHook />;

  //useEffect Hook Example
  //return <UseEffectExample />;

  //createContext Hook
  //return <CreateContextHook />;

  //React Context
  //return <ReactContext />;

  //Custom Hook
  //return <CustomHook />;

  //Counter Custom Hook
  //return <CounterCustomHook />;

  //Counter Custom Hook
  return <CustomHookChallenge />;
}

export default App;
