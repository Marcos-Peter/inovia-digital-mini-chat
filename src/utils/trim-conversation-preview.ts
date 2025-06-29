export const trimMessage = (message: string, maxLength = 60) => {
    const trimmed = message.trim();

    if (trimmed.length <= maxLength) return trimmed;

    return `${trimmed.slice(0, maxLength)}...`;
};
