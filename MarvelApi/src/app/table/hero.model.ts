export interface Hero {
     
    id: number
    name: string
    description: string
    modified: string

}


//Backend API exemple
// {
//     "code": 200,
//     "status": "Ok",
//     "copyright": "© 2018 MARVEL",
//     "attributionText": "Data provided by Marvel. © 2018 MARVEL",
//     "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2018 MARVEL</a>",
//     "etag": "e387276f9bc36c0164d85dfef17cd5bcc77fb411",
//     "data": {
//       "offset": 0,
//       "limit": 20,
//       "total": 1,
//       "count": 1,
//       "results": [
//         {
//           "id": 1009664,
//           "name": "Thor",
//           "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
//           "modified": "2016-01-05T12:33:20-0500",
//           "thumbnail": {
//             "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
//             "extension": "jpg"
//           },
//           "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
//           "comics": {
//             "available": 1610,
//             "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/comics",
//             "items": [
//               {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
//                 "name": "A+X (2012) #7"
//               }
//             ],
//             "returned": 20
//           },
//           "series": {
//             "available": 448,
//             "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/series",
//             "items": [
//               {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
//                 "name": "A+X (2012 - Present)"
//               }
//             ],
//             "returned": 20
//           },
//           "stories": {
//             "available": 2452,
//             "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/stories",
//             "items": [
//               {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/stories/876",
//                 "name": "THOR (1998) #76",
//                 "type": "cover"
//               }
//             ],
//             "returned": 20
//           },
//           "events": {
//             "available": 25,
//             "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/events",
//             "items": [
//               {
//                 "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
//                 "name": "Acts of Vengeance!"
//               }
//             ],
//             "returned": 20
//           },
//           "urls": [
//             {
//               "type": "detail",
//               "url": "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=80acafa02e272accf0233cd198a9268d"
//             },
//             {
//               "type": "wiki",
//               "url": "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=80acafa02e272accf0233cd198a9268d"
//             },
//             {
//               "type": "comiclink",
//               "url": "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=80acafa02e272accf0233cd198a9268d"
//             }
//           ]
//         }
//       ]
//     }
//   }