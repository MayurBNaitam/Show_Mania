
// import { Link } from "react-router-dom";
import React, { useState } from 'react';


export default function CreateNew() {
  const [text, setText] = useState('');
  const [card, setCard] = useState([]);

  function addtext() {
    setCard((card) => {
      const updatedCard = [...card, text]
      console.log(updatedCard)
      setText("");
      return updatedCard
    })
  }



  const handleOnChange = (event) => {
    setText(event.target.value)

  }

  return (
    <>
      <div className="w-3/4 m-10 bg-white rounded-lg mx-24 shadow-lg">
        <div className="flex">
          <form className="m-10 mx-24">
            <label className="my-6" htmlFor="name">
              Create Group*
            </label>
            <br></br>
            <input
              className="border-2 border-gray-100 rounded-lg h-10 w-96 mx-3 my-6"
              placeholder="   Enter Your Group Name"
              type="name"
              id="name"
              name="name"
              value={text}
              onChange={handleOnChange}
            ></input>
            <button className=" border border-gray-300 rounded-lg p-1">
              <input type="file"></input>
            </button>
          </form>
        </div>
        <div className="flex flex-col mx-24">
          <label className="" htmlFor="name">
            Add description
          </label>

          <textarea
            rows="4"
            cols="93"
            className=" border-2 border-gray-100 rounded-lg my-6 mx-3"
            placeholder="  Add description for your flashcard"
          ></textarea>
          <button
            onClick={addtext}
            type="button"
            class=" w-36 mx-96 focus:outline-none text-white bg-red-700 hover:bg-red-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >Create
          </button>

        </div>
      </div>

      <div className="flex w-3/4 m-10 bg-white rounded-lg mx-24 shadow-lg">
                  {card!==[] && card.map((data, i)=>{
                    return(
                      <>
                        <p className="p-6" key={i}>
                          <div>{data}</div>
                        </p>
                      </>
                    )
                  })}
      </div>

    </>
  );
}




