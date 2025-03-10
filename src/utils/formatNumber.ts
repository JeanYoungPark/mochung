const formatNumberWithCommas = (number: number) => {
    if (isNaN(number)) return number;
    return number.toLocaleString();
};

export default formatNumberWithCommas;
