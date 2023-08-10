import fs from "node:fs/promises";  
import path from "node:path"; 

async function fetchArticlesList() {  
    const articlePath = "./Articles";  
    const articles = await fs.readdir(articlePath)  
    let directoryArray = [];  
    for (const file of articles) {  
        let displayName = file.split(".")[0].split("-").join(" ")  
        let path = `./Articles/${file}`  
        directoryArray.push({name: displayName, path: path});  
    }
    return directoryArray;  
}  

async function updateArticlesList() {
    const response = await fetch('/Articles'); // Fetch data from the server
    const articlesList = await response.json();

    const articlesListElement = document.getElementById('articles-list');

    for (const article of articlesList) {
        const listItem = document.createElement('div');
        listItem.textContent = `${article.name}: ${article.filename}`;
        articlesListElement.appendChild(listItem);
    }
}

window.onload = updateArticlesList;