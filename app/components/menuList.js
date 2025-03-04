const menuList = [
    {
      name: "ไข่ผำผัดเผ็ด",
      ingredient: ["ไข่ผำ"],
      image: "",
    },
    {
      name: "ห่อหมกไข่ผำ",
      ingredient: ["ไข่ผำ"],
      image: "",
    },
    {
      name: "ขนมปังกรอบหน้าไข่ผำ",
      ingredient: ["ไข่ผำ"],
      image: "",
    },
    {
      name: "แกงคั่วไข่ผำ",
      ingredient: ["ไข่ผำ"],
      image: "",
    },
    {
      name: "แกงงอ่อมไข่ผำ",
      ingredient: ["ไข่ผำ"],
      image: "",
    },
    {
      name: "ผัดเผ็ดกบ",
      ingredient: ["กบ"],
      image: "gpp.jpg",
    },
    {
      name: "ต้มยำกบ",
      ingredient: ["กบ"],
      image: "gty.jpg",
    },
    {
      name: "แกงอ่อมกบ",
      ingredient: ["กบ"],
      image: "gko.jpg",
    },
    {
      name: "กบย่าง",
      ingredient: ["กบ"],
      image: "gyf.jpg",
    },
    {
      name: "ลาบกบ",
      ingredient: ["กบ"],
      image: "glp.jpg",
    },
    {
      name: "ผัดเผ็ดหนูนา",
      ingredient: ["หนูนา"],
      image: "",
    },
    {
      name: "หนูนาย่าง",
      ingredient: ["หนูนา"],
      image: "",
    },
    {
      name: "แกงอ่อมหนูนา",
      ingredient: ["หนูนา"],
      image: "",
    },
    {
      name: "ลาบหนูนา",
      ingredient: ["หนูนา"],
      image: "",
    },
    {
      name: "หนูนาอบสมุนไพร",
      ingredient: ["หนูนา"],
      image: "",
    },
    {
      name: "ต้มจืดไข่มดแดง",
      ingredient: ["ไข่มดแดง"],
      image: "",
    },
    {
      name: "ลาบไข่มดแดง",
      ingredient: ["ไข่มดแดง"],
      image: "",
    },
    {
      name: "ไข่มดแดงคั่วเกลือ",
      ingredient: ["ไข่มดแดง"],
      image: "",
    },
    {
      name: "ห่อหมกไข่มดแดง",
      ingredient: ["ไข่มดแดง"],
      image: "",
    },
    {
      name: "เเกงอ่อมไข่มดแดง",
      ingredient: ["ไข่มดแดง"],
      image: "",
    },
    {
      name: "ซุปเห็ดเผาะ",
      ingredient: ["เห็ดเผาะ"],
      image: "",
    },
    {
      name: "ลาบเห็ดเผาะ",
      ingredient: ["เห็ดเผาะ"],
      image: "",
    },
    {
      name: "หมกเห็ดเผาะ",
      ingredient: ["เห็ดเผาะ"],
      image: "",
    },
    {
      name: "เห็ดเผาะคั่วพริกเกลือ",
      ingredient: ["เห็ดเผาะ"],
      image: "",
    },
    {
      name: "เห็ดเผาะนึ่งสมุนไพร",
      ingredient: ["เห็ดเผาะ"],
      image: "",
    },
    {
      name: "หมูทอดกระเทียม",
      ingredient: ["หมู"],
      image: "mtk.jpg",
    },
    {
      name: "กระเพราะหมู",
      ingredient: ["หมู"],
      image: "mkp.jpg",
    },
    {
      name: "ต้มแซ่บหมูตุ๋น",
      ingredient: ["หมู"],
      image: "mtz.jpg",
    },
    {
      name: "คอหมูย่าง",
      ingredient: ["หมู"],
      image: "mky.jpg",
    },
    {
      name: "สเต็กหมู",
      ingredient: ["หมู"],
      image: "mst.jpg",
    },
    {
      name: "ไก่ทอดน้ำปลา",
      ingredient: ["ไก่"],
      image: "ktk.jpg",
    },
    {
      name: "ข้าวมันไก่",
      ingredient: ["ไก่"],
      image: "kkm.jpg",
    },
    {
      name: "บะหมี่ไก่ตุ๋น",
      ingredient: ["ไก่"],
      image: "kbm.jpg",
    },
    {
      name: "ยำไก่แซ่บ",
      ingredient: ["ไก่"],
      image: "kyz.jpg",
    },
    {
      name: "มัสมั่นไก่",
      ingredient: ["ไก่"],
      image: "kmz.jpg",
    },
    {
      name: "ปลาทอดราดพริกสามรส",
      ingredient: ["ปลา"],
      image: "fps.jpg",
    },
    {
      name: "ปลานึ่งมะนาว",
      ingredient: ["ปลา"],
      image: "fnm.jpg",
    },
    {
      name: "ปลาทอดยำตระไคร้อง",
      ingredient: ["ปลา"],
      image: "fyt.jpg",
    },
    {
      name: "ฉู่ฉี่ปลา",
      ingredient: ["ปลา"],
      image: "fzz.jpg",
    },
    {
      name: "เมี่ยงปลา",
      ingredient: ["ปลา"],
      image: "fmg.jpg",
    },
    {
      name: "สเต็กเนื้อ",
      ingredient: ["เนื้อ"],
      image: "",
    },
    {
      name: "เนื้อย่างจิ้มแจ่ว",
      ingredient: ["เนื้อ"],
      image: "",
    },
    {
      name: "เนื้อทอดแดดเดียว",
      ingredient: ["เนื้อ"],
      image: "",
    },
    {
      name: "เสือร้องไห้",
      ingredient: ["เนื้อ"],
      image: "",
    },
    {
      name: "ข้าวหน้าเนื้อ",
      ingredient: ["เนื้อ"],
      image: "",
    },
    {
      name: "ข้าวหน้าเป็ด",
      ingredient: ["เป็ด"],
      image: "",
    },
    {
      name: "เป็ดย่าง",
      ingredient: ["เป็ด"],
      image: "",
    },
    {
      name: "เป็ดพะโล้",
      ingredient: ["เป็ด"],
      image: "",
    },
    {
      name: "ก๋วยเตี๋ยวเป็ด",
      ingredient: ["เป็ด"],
      image: "",
    },
    {
      name: "เป็ดผัดพริกแกง",
      ingredient: ["เป็ด"],
      image: "",
    },
    {
      name: "ผัดถั่วฝักยาวหมูสับ",
      ingredient: ["ถั่วฝักยาว"],
      image: "",
    },
    {
      name: "ตำถั่วฝักยาว",
      ingredient: ["ถั่วฝักยาว"],
      image: "",
    },
    {
      name: "ยำถั่วฝักยาวกุ้งสด",
      ingredient: ["ถั่วฝักยาว"],
      image: "",
    },
    {
      name: "ถั่วฝักยาวลวกจิ้มน้ำพริก",
      ingredient: ["ถั่วฝักยาว"],
      image: "",
    },
    {
      name: "แกงส้มถั่วฝักยาวใส่กุ้ง",
      ingredient: ["ถั่วฝักยาว"],
      image: "",
    },
    {
      name: "ต้มจืดแตงกวายัดไส้",
      ingredient: ["แตงกวา"],
      image: "",
    },
    {
      name: "ยำแตงกวาหมูสับ",
      ingredient: ["แตงกวา"],
      image: "",
    },
    {
      name: "แตงกวาผัดไข่",
      ingredient: ["แตงกวา"],
      image: "",
    },
    {
      name: "สลัดแตงกวา",
      ingredient: ["แตงกวา"],
      image: "",
    },
    {
      name: "แตงกวาดอง",
      ingredient: ["แตงกวา"],
      image: "",
    },
    {
      name: "ต้มยำกุ้งใส่มะเขือเทศ",
      ingredient: ["มะเขือเทศ"],
      image: "",
    },
    {
      name: "ยำมะเขือเทศหมูสับ",
      ingredient: ["มะเขือเทศ"],
      image: "",
    },
    {
      name: "สลัดผักใส่มะเขือเทศ",
      ingredient: ["มะเขือเทศ"],
      image: "",
    },
    {
      name: "ไข่เจียวมะเขือเทศ",
      ingredient: ["มะเขือเทศ"],
      image: "",
    },
    {
      name: "มะเขือเทศผัดไข่",
      ingredient: ["มะเขือเทศ"],
      image: "",
    },
    {
      name: "ผัดสะตอกะปิกุ้งสด",
      ingredient: ["สะตอ"],
      image: "",
    },
    {
      name: "สะตอผัดพริกแกงหมู",
      ingredient: ["สะตอ"],
      image: "",
    },
    {
      name: "น้ำพริกกะปิสะตอ",
      ingredient: ["สะตอ"],
      image: "",
    },
    {
      name: "แกงไตปลาสะตอ",
      ingredient: ["สะตอ"],
      image: "",
    },
    {
      name: "ยำสะตอกุ้งสด",
      ingredient: ["สะตอ"],
      image: "",
    },
    {
      name: "แกงจืดมะระยัดไส้หมู",
      ingredient: ["มะระ"],
      image: "",
    },
    {
      name: "ผัดมะระไข่",
      ingredient: ["มะระ"],
      image: "",
    },
    {
      name: "มะระผัดเต้าซี่",
      ingredient: ["มะระ"],
      image: "",
    },
    {
      name: "ต้มมะระกระดูกหมู",
      ingredient: ["มะระ"],
      image: "",
    },
    {
      name: "ยำมะระกุ้งสด",
      ingredient: ["มะระ"],
      image: "",
    },
    {
      name: "แกงจืดเต้าหู้หมูสับ",
      ingredient: ["ผักกาด"],
      image: "",
    },
    {
      name: "ผัดผักกาดน้ำมันหอย",
      ingredient: ["ผักกาด"],
      image: "",
    },
    {
      name: "ผักกาดดองต้มกระดูกหมู",
      ingredient: ["ผักกาด"],
      image: "",
    },
    {
      name: "ผักกาดลวกจิ้มน้ำพริก",
      ingredient: ["ผักกาด"],
      image: "",
    },
    {
      name: "ผัดวุ้นเส้นใส่ผักกาดขาว",
      ingredient: ["ผักกาด"],
      image: "",
    },
    {
      name: "ผัดคะน้าหมูกรอบ",
      ingredient: ["คะน้า"],
      image: "",
    },
    {
      name: "คะน้าผัดน้ำมันหอย",
      ingredient: ["คะน้า"],
      image: "",
    },
    {
      name: "คะน้าปลาเค็ม",
      ingredient: ["คะน้า"],
      image: "",
    },
    {
      name: "คะน้าผัดหมูสับ",
      ingredient: ["คะน้า"],
      image: "",
    },
    {
      name: "ยำคะน้ากุ้งสด",
      ingredient: ["คะน้า"],
      image: "",
    }
  ]
  
export {menuList}