import React, { use } from 'react'
import { useState,useEffect } from 'react';
import useUpdateDocTitle from '../Hooks/useUpdateDocTitle';

function ClickSayHello() {

    const [text, setText] = useState('');
    const [isTrue,setIsTrue] = useState(true);

    useUpdateDocTitle(text);
      
    useEffect(() => {
         if (isTrue){
            setText('C est magique!');
         }else {
            setText('C est pas magique du tout!');
          }
      }, [isTrue]);

      return (
        <div>
            <button onClick={() => setIsTrue(!isTrue)}>Cliquez</button>
        </div>
      )
}

export default ClickSayHello
