export interface Publisher {
    firstName: string;
    lastName: string;
    gender: PublisherGender;
    resposibilities: PublisherResposibility[];
    allowedAssignments: Assignment[];
    lastAssigmentsDates: Record<Assignment, Date>[];
}

export enum PublisherGender {
    MALE,
    FEMALE
}

export enum PublisherResposibility {
    ELDER,
    MINISTERIAL_SERVANT,
    PIONEER,
}

enum Assignment {
    BIBLE_READING,
    INITIAL_CALL,
    RETURN_VISIT,
    BIBLE_STUDY,
}
