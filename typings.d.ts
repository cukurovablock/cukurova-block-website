interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    asset: {
        _ref: string;
        _type: 'reference';
    };
}

export interface SanityEvent extends SanityBody {
    _type: 'events';
    title: string;
    image: Image;
}

export interface SanityTeam extends SanityBody {
    _type: 'teamInfo';
    name: string;
    image: Image;
    role: string;
    link: url;
}



