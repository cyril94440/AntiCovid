

export const disqusShortname = 'AntiCovid';

export function getDisqusConfig(planId){
    return {
        url: `https://www.anticovid.io/plans/${planId}`,
        identifier: planId,
        title: planId
    }
}