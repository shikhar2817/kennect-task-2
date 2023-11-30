export const getWeekIndex = (date: Date) => {
    let currentDate: Date = new Date();
    let eventDate: Date = new Date(date);
    const diffTime = currentDate.getTime() - eventDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 7);
};
