

export const disqusShortname = 'AntiCovid';

export function getDisqusConfig(planId){
    return {
        url: `http://AntiCovid/plans/${planId}`,
        identifier: planId,
        title: planId
    }
}