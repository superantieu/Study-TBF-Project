interface Pokemon {
    name: string;
}

type Fighter = {
    _id: string;
    name: string;
};

interface IMatchResult {
    _id: string;
    winner: Fighter;
    date: string;
}

interface IRankingProfile {
    _id: string;
    name: string;
    type: string;
    class: string;
    country: string;
    recentFightOne: string;
    recentFightTwo: string;
    recentFightThree: string;
    socialMedia: string;
    icon?: string;
}

interface INewsItem {
    _id: string;
    title: string;
    date: string;
    description: string;
    source: string;
    image?: string;
}
