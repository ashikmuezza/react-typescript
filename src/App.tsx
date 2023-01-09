

//interface used to define the entity, example props

interface AppProps {
  headerText : string;
  extraText?: string
}

function App({headerText, extraText = 'default text'}:AppProps) {
  return (
    <>
     <h1> {headerText} </h1>
     <p>{extraText} </p>
    </>
   
  );
}

export default App;
