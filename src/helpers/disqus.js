

export const disqusShortname = 'AntiCovid';

export function getDisqusConfig(planId){
    return {
        url: `https://www.anticovid.fr/plans/${planId}`,
        identifier: planId,
        title: planId
    }
}