function getLevelByExperience(exp) {
    for (let i = 0; i <= 20; i++) {
        let neededExp = i * (i + 1) * 500;
        if (neededExp > exp) {
            return i - 1;
        }
    }
}

function experienceByLevel(lvl) {
    return lvl * (lvl + 1) * 500;
}
export { experienceByLevel, getLevelByExperience };
