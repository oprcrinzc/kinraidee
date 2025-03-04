"use client";

import { useEffect, useState } from "react";
import { menuList } from "./menuList";
import Image from "next/image";

export default function FetchMenu({ ingredient }) {
  
  const ingredientList = [
    { name: "ไข่ผำ", type: "vegetable" }, // Edible plant part, often used as a vegetable.
    { name: "กบ", type: "meat" }, // Frog is an animal (meat).
    { name: "หนูนา", type: "meat" }, // Field mouse is an animal (meat).
    { name: "ไข่มดแดง", type: "meat" }, // Red ant eggs are an animal (meat).
    { name: "เห็ดเผาะ", type: "fungus" }, // Wild mushroom is a fungus.
    { name: "หมู", type: "meat" }, // Pig is an animal (meat).
    { name: "ไก่", type: "meat" }, // Chicken is an animal (meat).
    { name: "ปลา", type: "meat" }, // Fish is an animal (meat).
    { name: "วัว", type: "meat" }, // Cow is an animal (meat).
    { name: "เป็ด", type: "meat" }, // Duck is an animal (meat).
    { name: "หมึก", type: "meat" }, // Squid is an animal (meat).
    { name: "กุ้ง", type: "meat" }, // Shrimp is an animal (meat).
    { name: "ปู", type: "meat" }, // Crab is an animal (meat).
    { name: "หอย", type: "meat" }, // Shellfish is an animal (meat).
    { name: "ถั่วฝักยาว", type: "vegetable" }, // Yardlong bean is a vegetable.
    { name: "แตงกวา", type: "vegetable" }, // Cucumber is a vegetable.
    { name: "มะเขือเทศ", type: "fruit" }, // Tomato is a fruit (botanically).
    { name: "สะตอ", type: "vegetable" }, // Stink bean is a vegetable.
    { name: "มะระ", type: "vegetable" }, // Bitter melon is a vegetable.
    { name: "ผักกาด", type: "vegetable" }, // Mustard greens are vegetables.
    { name: "คะน้า", type: "vegetable" }, // Chinese kale is a vegetable.
    { name: "ผักบุ้ง", type: "vegetable" }, // Water spinach is a vegetable.
    { name: "กะหล่ำปลี", type: "vegetable" }, // Cabbage is a vegetable.
    { name: "มะเขือเปราะ", type: "vegetable" }, // Thai eggplant is a vegetable.
    { name: "ฟักทอง", type: "vegetable" }, // Pumpkin is a vegetable.
    { name: "เห็ดฟาง", type: "fungus" }, // Straw mushroom is a fungus.
    { name: "กว้างตุ้ง", type: "vegetable" }, // Chinese spinach is a vegetable.
  ];
  
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setMenu([])
    console.log((ingredient))
    menuList.forEach((n) => {
    if (n.ingredient.some((item) => ingredient.includes(item))) {
        console.log(n.name)
        setMenu((p)=>[...p, n])
      }
    });
      console.log((menu))

  }, [ingredient]);

  return (
    <div className="menu">
      {menu.map((n, i) => {
        return (
          <pre key={i} className="card">
            {n.name}
            <Image
              src={n.image=="" ? "/menu/404.jpg" : "/menu/"+n.image}
              width={300}
              height={400}
              className="img"
            />
          </pre>
        );
      })}
    </div>
  );
}
