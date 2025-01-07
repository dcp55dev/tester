import { useEffect, useState } from 'react'


export default function TextCom(){
  const [label, setLabel] = useState('Default Text Here');

  useEffect(()=>{
    async function init(){
    }

    init();
  }, []);

  return (
    <>
      <div>
        <label>{ label }</label>
      </div>
    </>
  );
}
