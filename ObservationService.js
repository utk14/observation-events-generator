var faker = require('faker')

const ASSETREF = [
    "00203DB3",
    "0020649D",
    "000022A3",
    "112983",
    "00203DA3",
    "0020648D",
    "00002CA3",
    "113983",
    "00503DV3",
    "0025648G"]
const COMPONENTCODE_LIST = ["CC_AGG_TIME_DURATION", "CC_AGG_METHOD_MEAN"]
const AGG_METHOD_TYPE_LIST = ["SUM", "MEAN"]
const INTEGRATION_ACCOUNT_REF = [
    "84839bee-69aa-483c-b5b7-c545cd1b8e52_8a476088-8c84-4f34-a0f8-378c26d5a052",
    "b19bb12c-1d08-4054-a402-cacb2a3d0cf2_594b5e6b-b11b-4ba7-9b39-900cdf65b99d",
    "510ae889-25a2-40fa-ab3d-1c3895e2134a_510b0cbf-9fa6-49fc-ad4c-03179eac9863",
    "8ad5a94b-723e-1a26-e7db-4d83fe351d0d_818fb419-b9d9-c2df-e42d-54e109a61493",

    "94839bee-69aa-483c-b5b7-c545cd1b8e52_8a476088-8c84-4f34-a0f8-378c26d5a052",
    "c19bb12c-1d08-4054-a402-cacb2a3d0cf2_594b5e6b-b11b-4ba7-9b39-900cdf65b99d",
    "610ae889-25a2-40fa-ab3d-1c3895e2134a_510b0cbf-9fa6-49fc-ad4c-03179eac9863",
    "9ad5a94b-723e-1a26-e7db-4d83fe351d0d_818fb419-b9d9-c2df-e42d-54e109a61493",

    "84839bee-69aa-632c-b5b7-c545cd1b8e52_8a476088-8c84-4f34-a0f8-378c26d5a052",
    "b19bb12c-1d08-8088-a402-cacb2a3d0cf2_594b5e6b-b11b-4ba7-9b39-900cdf65b99d",
    "510ae889-25a2-60af-ab3d-1c3895e2134a_510b0cbf-9fa6-49fc-ad4c-03179eac9863",
    "8ad5a94b-723e-1b62-e7db-4d83fe351d0d_818fb419-b9d9-c2df-e42d-54e109a61493",
    "8ad5a94b-723e-1b62-e7db-4d83fe351d0d_818fb419-b9d9-vf6c-e42d-54e109a61493"
]

const ETS_GENERATION_DATE_RANGE = { from: "2021-08-01", to: "2021-11-31"}

var ObservationService = {
    generateEvents(obsCode) {
        var obsEData = this.getEventData(obsCode)
        return this.updateEventEnvelop(obsEData, obsCode)
    },

    getEventData(obsCode) {
        const eventData = require('./obsEventData.js')
        return eventData[obsCode]
    },
    updateEventEnvelop(obsEData, obsCode) {
        var obsData = JSON.parse(JSON.stringify(obsEData))
        const eventEnvelop = require('./obsEnvelop.js')
        eventEnvelop.obsCode = obsCode
        eventEnvelop.valueUoM = obsData.valueUoM
        eventEnvelop.value = faker.random.number({ min: 0.0, max: 20.0 }).toString()
        eventEnvelop.id = faker.random.uuid()
        eventEnvelop.parentCollectionRef = [faker.random.uuid()]
        eventEnvelop.integrationAccountRef = faker.random.arrayElement(INTEGRATION_ACCOUNT_REF)
        eventEnvelop.assetRef = faker.random.arrayElement(ASSETREF)
        eventEnvelop.xMin = "-" + faker.finance.amount(17,250,2),
        eventEnvelop.xMax = eventEnvelop.xMin,
        eventEnvelop.yMin = "-" + faker.finance.amount(10,250,2),
        eventEnvelop.yMax = eventEnvelop.yMin,
        eventEnvelop.phenTime = faker.date.between(ETS_GENERATION_DATE_RANGE.from, ETS_GENERATION_DATE_RANGE.to)
        eventEnvelop.spatialExtent.type = obsData.spatialExtentType
        eventEnvelop.spatialExtent.latcoordinates = eventEnvelop.xMin
        eventEnvelop.spatialExtent.loncoordinates = eventEnvelop.yMin
        eventEnvelop.aggTimeWindow = obsData.aggTimeWindow
        eventEnvelop.aggMethod.selector = faker.random.arrayElement(AGG_METHOD_TYPE_LIST)
        eventEnvelop.aggMethod.componentCode = obsData[eventEnvelop.aggMethod.selector]

            // console.log("Telemetry Event: " + JSON.stringify(eventEnvelop))
//            console.log("size" + Buffer.byteLength(JSON.stringify(eventEnvelop), 'utf8'))
        return eventEnvelop
    }
}
module.exports = ObservationService