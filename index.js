// var http = require('http');
const ObsService = require("./ObservationService")
var traceEvents = require("./traceObsEvents")
const createCsvWriter = require('csv-writer').createObjectCsvWriter
const fs = require('fs');
var TRACE_LIMIT_SIZE = 10
var isPushed = false;
var TOTAL_EVENTS_COUNT = 0;
const BATCH_SIZE = 10
const OBSCODE_LIST = ["E_AIR_TEMPERATURE", "E_RAINFALL"];
const EVENT_SIZE_SPLIT = {
    "E_AIR_TEMPERATURE": 10,
    "E_RAINFALL": 10
}

const EVENTS_GENERATE_INTERVAL_TIME = 5000 // 15 sec
var events = []
function generate(obsCode, eventsSize) {
    for (let index = 1; index <= eventsSize; index++) {
        var eventData = ObsService.generateEvents(obsCode)
        fs.appendFile("observationEvents.json", JSON.stringify(eventData) + "\n", 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing JSON Object to File.");
                return console.log(err);
            }
        })
    }
    console.log("Updated The events in file")
}
generate(OBSCODE_LIST[0], EVENT_SIZE_SPLIT[OBSCODE_LIST[0]])
generate(OBSCODE_LIST[1], EVENT_SIZE_SPLIT[OBSCODE_LIST[1]])
