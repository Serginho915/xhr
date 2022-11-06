let arr = [];

const getFile = file => {
    const request = new XMLHttpRequest();
    request.open(`GET`, file);
    request.send();
    request.addEventListener(`readystatechange`, () => {
        if(request.readyState === 4 && request.status===200){
            let resp = JSON.parse(request.response)
            let test = Array.from(resp.children)
           

           for (const child of test) {
                arr.push(child)
           }
           console.log(arr)
        }

    })
}



getFile(`./data.json`);
getFile(`./data2.json`);





