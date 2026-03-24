async function fetchdata(){
    console.log("soodaabac data da fetch ka kana dhig mid dhaqsaa")
    const response= await fetch("data.json");
    const data = await response.json();
    console.log(data);
}

fetchdata();

console.log("This message runs immediately and is not blocked.");



