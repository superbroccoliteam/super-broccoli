export class Competition{
    id: number;
    name: string;
    status: string;
    date_start: string;
    date_end: string;
    location: string;
    country: string;
    size: number;
    organization: string;
    prize: number;
    rules: string;
    website: string;
    discipline: string;
    match_type: string;
    description: string;
    opponents: Opponents;
}

export class Opponents{
    forfeit: boolean;
    number: number;
    result: number;
    score: number;
    participant: Participant;
}

export class Participant{
    id: string;
    name: string;
}