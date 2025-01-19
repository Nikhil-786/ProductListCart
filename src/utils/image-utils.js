function getImageURL(name){
    console.log(name);
    return new URL(`../${name}`,import.meta.url).href;
}

export default getImageURL;