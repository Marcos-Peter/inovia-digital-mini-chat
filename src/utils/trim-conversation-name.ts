export const trimName = (name: string) => {
    const parts = name.trim().split(/\s+/);

    if (parts.length > 2) {
        return `${parts[0]} ${parts[parts.length - 1]}`;
    }

    return name;
};
