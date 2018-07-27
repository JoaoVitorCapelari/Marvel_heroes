export interface Hero {
     
    id: number
    name: string
    description: string
    modified: string
    comics: {
        available: number,
        collectionURI: string
    }
    thumbnail: {
        path: string,
        extension: string
    }

}
