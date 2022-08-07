export class Article {
    constructor(
        public articleId : number,
        public articleTitle : string,
        public imageURL : string,
        public articleLink : string,
        public categoryId : number,
        public likesCount : number,
        public commentCount : number,
        public description : string
){}
}
