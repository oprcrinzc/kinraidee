"use client";
import Image from "next/image";
import FetchMenu from "./components/fetchMenu";
import { useState, useRef , useEffect} from "react";

export default function Home() {
  const [isSearched, setIsSearched] = useState(false);
  const [ing, setIng] = useState([])
  const textareaRef = useRef();
  const onFindBtnClick = () => {
    // console.log(ing);
    setIsSearched(!isSearched);
    if (!isSearched) {
      setIng(textareaRef.current.value.split(/[\n\s]/))
    }
    console.log(ing)
  };
  useEffect(() => {
    console.log(ing); // Logs whenever 'ing' is updated
  }, [ing]);
  return (
    <body className={isSearched ? "s" : ""}>
      <div className={"home" + (isSearched ? " s" : "")}>
        <p1 className="title">เมนูกินได้</p1>
        <div className={"search" + (isSearched ? " s" : "")}>
          <textarea wrap="true" ref={textareaRef} disabled={(isSearched)} rows={10} cols={50}/>
          <p className="btn" id="find_btn" onClick={onFindBtnClick}>
            {isSearched ? "+" : "ค้นหา"}
          </p>
        </div>
          <pre>
          <FetchMenu ingredient={ing} />
          </pre>
      </div>
    </body>
  );
}
