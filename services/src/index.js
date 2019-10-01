import "dotenv/config";
import "./db/connection";
import "./server";

import Manga from './db/models/Manga';

const manga = new Manga({
    "_id": "5d782160719a1604ba8b6c06",
    "alias": "31-ai-dream",
    "categories": [],
    "hits": 0,
    "image": null,
    "status": 1,
    "title": "31 Ai Dream"
})

manga.save(function(err, manga){
    if (err) return console.error(err);
    console.log(` ${manga} saved`);
})