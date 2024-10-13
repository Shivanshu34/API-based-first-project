let url1 = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
let url3 = "http://universities.hipolabs.com/search?name=";

const arr1 = [];
const arr2 = [];
const arr3 = [];
let j = 0;
let k = 0;
let l = 0;

const front = document.querySelector(".front-page");
const cat = document.querySelector(".cat");
const dog = document.querySelector(".dog");
const colleges = document.querySelector(".colleges");
const get = document.querySelector(".get");
const get2 = document.querySelector(".get2");
const exit = document.querySelector(".btn-e");
const exit2 = document.querySelector(".btn-e2");
const exit3 = document.querySelector(".btn-e3");
const prev = document.querySelector(".btn-p");
const prev2 = document.querySelector(".btn-p2");
const cat_f = document.querySelector(".cat-f");
const nav = document.querySelector(".nav h2");
const dog_i = document.querySelector(".dog-i");
const colleges_n = document.querySelector(".colleges-n");
const get3 = document.querySelector(".get3 button");
const prev3 = document.querySelector(".btn-p3");

cat.addEventListener("click",async()=>
{
    front.style.display = "none";
    cat_f.style.width = "100%";
    cat_f.style.display = "block";
    nav.innerText = "Random Cat Facts";
});

dog.addEventListener("click",async()=>
{
    front.style.display = "none";
    dog_i.style.width = "100%";
    dog_i.style.display = "block";
    nav.innerText = "Random Dog Images";
});

colleges.addEventListener("click",async()=>
{
    front.style.display = "none";
    colleges_n.style.width = "100%";
    colleges_n.style.display = "block";
    nav.innerText = "Get Colleges of your country";
});

get.addEventListener("click",async ()=>
{
    const p = document.querySelector(".para div p");
    let pa = await catFacts();
    arr1.push(pa);
    j = arr1.length;
    p.innerText = pa;
});

get2.addEventListener("click",async ()=>
{
    const p = document.querySelector(".para2 div img");
    let pa = await dogImages();
    arr2.push(pa);
    k = arr2.length;
    p.setAttribute("src",pa);
    p.src = pa;
});

get3.addEventListener("click",async ()=>
{
    // const p = document.querySelector(".para3 div ul");
    // p.innerText = "";
    const inp = document.querySelector(".get3 input");
    let country = inp.value;
    let pa = await collegeNames(country);
    show(pa);
    arr3.push(pa);
    l = arr3.length;
    // arr2.push(pa);
    // k = arr2.length;
    // p.setAttribute("src",pa);
    // p.src = pa;
});

exit.addEventListener("click",()=>
{
    const p = document.querySelector(".para div p");
    p.innerText = "";
    cat_f.style.display = "none";
    front.style.display = "flex";
    nav.innerText = "Use of API's";
    arr1 =[];
    j = 0;
});

exit2.addEventListener("click",()=>
{  
    const p = document.querySelector(".para2 div img");
    p.src = "";
    dog_i.style.display = "none";
    front.style.display = "flex";
    nav.innerText = "Use of API's";
    arr2 = [];
    k = 0;
});

exit3.addEventListener("click",()=>
    {  
        const p = document.querySelector(".para3 div ul");
        p.innerText = "";
        colleges_n.style.display = "none";
        front.style.display = "flex";
        nav.innerText = "Use of API's";
        arr3 = [];
        l = 0;
    });

prev.addEventListener("click",()=>
{
    const p = document.querySelector(".para div p");
    if(j-1 > 0)
    {
        p.innerText = arr1[j-2];
        j--;
    }
    else{
        p.innerText = "";
    }
});

prev2.addEventListener("click",()=>
{
    const p = document.querySelector(".para2 div img");
    if(k-1 > 0)
    {
        p.setAttribute("src",arr2[k-2]);
        k--;
    }
});

prev3.addEventListener("click",()=>
{
    const p = document.querySelector(".para3 div ul");
    if(l-1 > 0)
    {
        show(arr3[l-2]);
        l--;
    }
    else{
        p.innerText = "";
    }
});

async function catFacts()
{
    try{
        let res = await axios.get(url1);
        return res.data.fact;
    }catch(e)
    {
        console.log("Enter a valid link");
    }  
}

async function dogImages()
{
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }catch(e)
    {
        console.log("Enter a valid link");
    }  
}

async function collegeNames(country)
{
    try{
        let res = await axios.get(url3+country);
        //console.log(res.data);
        return res.data;
    }catch(e)
    {
        console.log("Enter a valid link");
    }  
}

const show = (pa)=>
{
    const p = document.querySelector(".para3 div ul");
    p.innerText = "";
    for(let i = 0; i < pa.length; i++)
        {
            let li = document.createElement("li");
            li.append(pa[i].name);
            p.appendChild(li);
        }
}
