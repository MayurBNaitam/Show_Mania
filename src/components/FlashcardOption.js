import React from "react";
import { Link } from "react-router-dom";

export default function FlashcardOption() {
  return (
    <>
      <div className="flex mx-24 font-semibold space-x-10">

       <button className="hover:text-red-600 text-xl"><Link to="/CreateNew">Create New</Link></button>
       <button className="hover:text-red-600 text-xl"><Link to="/MyFlashCards">My Flashcard's</Link></button>
      </div>
        <hr className="my-4 mx-24 border-black"/>
    </>
  );
}
