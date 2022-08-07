export class Articles {
    constructor(
        public articleId: number,
        public articleTitle: string,
        public articleLink: string,
        public categoryId: number,
        public likesCount: number,
        public commentCount: number,
        public imageURL: string,
        public description: string
    ){}
}
