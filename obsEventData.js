var faker = require('faker')
var ObsEventsData = {
    "E_AIR_TEMPERATURE": {
        "valueUoM": "C",
        "spatialExtentType": "POINT",
        "aggTimeWindow": {
            "componentCode": "CC_AGG_TIME_DURATION",
            "selector": "DURATION",
            "value": "3600",
            "valueUoM": "sec"
        },
        "MEAN": "CC_AGG_METHOD_MEAN",
        "SUM": "CC_AGG_METHOD_SUM"
    },
    "E_RAINFALL": {
        "valueUoM": "mm",
        "spatialExtentType": "POINT",
        "aggTimeWindow": {
            "componentCode": "CC_AGG_TIME_DURATION",
            "selector": "DURATION",
            "value": "3600",
            "valueUoM": "sec"
        },
        "MEAN": "CC_AGG_METHOD_MEAN",
        "SUM": "CC_AGG_METHOD_SUM"
    }
}

module.exports = ObsEventsData