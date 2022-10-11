import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

import { defaultStat } from "../helpers/defaultStat";

export const useMainStore = defineStore("MainStore", () => {
    const charName = ref(undefined);
    const charRace = ref(undefined);
    const charDeity = ref(undefined);
    const charAge = ref(undefined);
    const charAlignment = ref(undefined);
    const charExperience = ref(0);
    const charJobs = ref([]);
    const charBackground = ref(undefined);
    const level = ref(1);

    const halfLevel = computed(() => Math.floor(level.value / 2));
    const proficencyBonus = computed(() =>
        level.value < 7 ? 2 : level.value < 15 ? 4 : 6
    );

    const str = reactive(defaultStat("Força"));
    const dex = reactive(defaultStat("Destreza"));
    const con = reactive(defaultStat("Constituição"));
    const int = reactive(defaultStat("Inteligência"));
    const wis = reactive(defaultStat("Sabedoria"));
    const cha = reactive(defaultStat("Carisma"));

    const totalArmorPenalty = computed(() => 0);

    function defaultSkill(
        name,
        stat,
        {
            bonus = 0,
            armorPenalty = false,
            training = false,
            onlyTrained = false,
        } = {}
    ) {
        return {
            name,
            bonus,
            training,
            onlyTrained,
            armorPenalty,
            stat,
            total() {
                return (
                    halfLevel.value +
                    (this.training && proficencyBonus.value) +
                    (this?.bonus || 0) +
                    (this.armorPenalty && totalArmorPenalty.value) +
                    this.stat.mod()
                );
            },
        };
    }

    const skills = reactive([
        defaultSkill("Acrobacia", dex, { armorPenalty: true }),
        defaultSkill("Adestramento", cha, { onlyTrained: true }),
        defaultSkill("Atletismo", str, { armorPenalty: true }),
        defaultSkill("Atuação", cha),
        defaultSkill("Conhecimento", int, { onlyTrained: true }),
        defaultSkill("Cura", wis),
        defaultSkill("Diplomacia", cha),
        defaultSkill("Fortitude", con),
        defaultSkill("Furtividade", dex, { armorPenalty: true }),
        defaultSkill("Guerra", int, { onlyTrained: true }),
        defaultSkill("Iniciativa", dex),
        defaultSkill("Intimidação", cha),
        defaultSkill("Intuição", wis),
        defaultSkill("Investigação", int),
        defaultSkill("Jogatina", cha, { onlyTrained: true }),
        defaultSkill("Ladinagem", dex, {
            armorPenalty: true,
            onlyTrained: true,
        }),
        defaultSkill("Luta", str),
        defaultSkill("Misticismo", int, { onlyTrained: true }),
        defaultSkill("Nobreza", int, { onlyTrained: true }),
        defaultSkill("Ofício", int, { onlyTrained: true }),
        defaultSkill("Percepção", wis),
        defaultSkill("Pilotagem", dex, { onlyTrained: true }),
        defaultSkill("Pontaria", dex),
        defaultSkill("Reflexos", dex),
        defaultSkill("Religião", wis, { onlyTrained: true }),
        defaultSkill("Sobrevivência", wis),
        defaultSkill("Vontade", wis),
    ]);

    return { level, str, dex, con, int, wis, cha, skills, charBackground };
});
