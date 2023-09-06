export const getInformationQuery =
    '*[_type == "people" && id.current == $id][0]';

export const getLatestProjects =
    '*[_type == "projects" && person_ref._ref == $personId && new == true]';

export const getProjects =
    '*[_type == "projects" && person_ref._ref == $personId]';
