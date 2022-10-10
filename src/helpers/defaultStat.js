export function defaultStat(name, value = 10, temp = 0) {
    return {
        name,
        value,
        temp,
        mod: function () {
            return Math.floor((this.value + this.temp) / 2 - 5);
        },
        abbr: name.slice(0, 3).toUpperCase(),
    };
}
