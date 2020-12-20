export class Book {
    public name: string;
    public id: string;
    public genre: string;
    public isBookmarked: boolean;

    constructor(name: string, id: string, genre: string, bookmark: boolean){
        this.name = name;
        this.id = id;
        this.genre = genre;
        this.isBookmarked = bookmark;
    }
}