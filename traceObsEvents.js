var traceObsEvents = [{
  "obsCode": "E_AIR_TEMPERATURE",
  "valueUoM": "C",
  "value": "23.07",
  "id": "b7de058a-dbf9-4eaf-83ce-4bb34b360840",
  "parentCollectionRef": [
    "06dca824-4090-11ec-b8f6-e76eb501ddeb"
  ],
  "integrationAccountRef": "84839bee-69aa-483c-b5b7-c545cd1b8e52_8a476088-8c84-4f34-a0f8-378c26d5a052",
  "assetRef": "00203DB3",
  "xMin": -53.466641,
  "xMax": -53.466641,
  "yMin": -24.645142,
  "yMax": -24.645142,
  "phenTime": "2022-02-10T02:00:00Z",
  "spatialExtent": {
    "type": "Point",
    "latcoordinates": [
      -53.466641
    ],
    "loncoordinates": [
      -24.645142
    ]
  },
  "aggTimeWindow": {
    "componentCode": "CC_AGG_TIME_DURATION",
    "selector": "DURATION",
    "value": "3600",
    "valueUoM": "sec"
  },
  "aggMethod": {
    "componentCode": "CC_AGG_METHOD_MEAN",
    "selector": "MEAN"
  }
},
{
  "obsCode": "E_RAINFALL",
  "valueUoM": "mm",
  "value": "0.0",
  "id": "5bb5636b-e962-4e79-8358-c8969eb79a8a",
  "parentCollectionRef": [
    "05305243-4090-11ec-999b-e76eb501ddeb"
  ],
  "integrationAccountRef": "84839bee-69aa-483c-b5b7-c545cd1b8e52_8a476088-8c84-4f34-a0f8-378c26d5a052",
  "assetRef": "00203DB3",
  "xMin": -53.466641,
  "xMax": -53.466641,
  "yMin": -24.645142,
  "yMax": -24.645142,
  "phenTime": "2022-02-10T00:00:00Z",
  "spatialExtent": {
    "type": "Point",
    "latcoordinates": [
      -53.466641
    ],
    "loncoordinates": [
      -24.645142
    ]
  },
  "contextItems": {
    "empty": false,
    "traversableAgain": true
  },
  "aggTimeWindow": {
    "componentCode": "CC_AGG_TIME_DURATION",
    "selector": "DURATION",
    "value": "3600",
    "valueUoM": "sec"
  },
  "aggMethod": {
    "componentCode": "CC_AGG_METHOD_SUM",
    "selector": "SUM"
  }
}]

module.exports = traceObsEvents