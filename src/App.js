import "./App.css";
import { useState,useEffect, createContext } from "react";
import Card from "./components/Card";
import Search from './components/Search';
import AddNote from "./components/AddNote";
import Button from "./components/Button";
import Heading from "./components/Heading";

export const DataContext=createContext(null);

const App = () => {
  const [cards, setCards] = useState([]);
  const [allData,setAllData]=useState([]);
  const [showToggle, setShowToggle] = useState(false);
  const [updateToggle,setUpdateToggle]=useState(false)
  const [updateInput,setUpdateInput]=useState({});

  const updateCard=(id)=>{

    // Find object which has parameter id
    let noteObj=allData.find((item)=>{
      return item.id===id;
    })
    setUpdateInput(noteObj); // Passing whole object

  }

  const createCard = (obj,update) => {

    if(update)
    { 
      // If update is true means we have to modify our data
      const updatedArr=cards.map((item)=>{
        if(item.id===obj.id)
        {
          return {...obj}
        }
        return item;
      })
      updateLocalData(updatedArr);  
    }
    else
    {
      let addedArr=[...cards,obj];
      updateLocalData(addedArr);
    }

  };

  const deleteCard = (id) => {

    let filteredArr = cards.filter((item) => {
      return item.id !== id;
    });

    updateLocalData(filteredArr);
  };

  const searchCard=(value)=>{ 

    let filteredArr=allData.filter((item)=>{
          return item.note.includes(value);
    })
    setCards(filteredArr);
    
  }

  const getLocalData=()=>{
    let response=localStorage.getItem("lists");
    let data=JSON.parse(response)

    if(data)
    {
      setCards(data);
      setAllData(data);
    }
  }

  const updateLocalData=(array)=>{
    localStorage.setItem("lists",JSON.stringify(array));
    setCards(array);
    setAllData(array);
  }

  useEffect(() => {
    getLocalData();
  }, []);


  return (
  <div className="app">
    
    <DataContext.Provider value={{showToggle,setShowToggle,updateToggle,setUpdateToggle,updateInput,setUpdateInput,createCard,deleteCard,updateCard,searchCard}}>

      <Heading/>
      <Search/>
      {
        cards.map((item) => {
          return <Card key={item.id} {...item}/>;
        })
      }
      <AddNote/>
      <Button/>

    </DataContext.Provider>
   
  </div>
  )
}

export default App;