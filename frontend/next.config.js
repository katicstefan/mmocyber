const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            images: {
                domains: ['localhost'],
            },
        }
    }

    return {
        /* config options for all phases except development here */
        images: {
            domains: ['localhost'],
        },
    }
}