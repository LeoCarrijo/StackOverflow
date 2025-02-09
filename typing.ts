export type NavbarItem = {
    title: string;
    link: string;
}

export type Post = {
    title: string;
    content: string;
    owner: string;
    votesAmmount: number;
    answersAmmount: number;
    viewsAmmount: number;
    topics: string[];
}