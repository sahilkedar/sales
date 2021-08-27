exports = function(changeEvent) {
  
  var sales = context.services.get("mongodb-atlas").db("sample_supplies").collection("sales");
  var history = context.services.get("mongodb-atlas").db("sample_supplies").collection("history");
  var fullDocument = changeEvent.fullDocument;
  var fullCopy = fullDocument;
  
  //update the shipping document with the new package information
  console.log("fncSalesHistoryMarket ... executing..." );
  console.log("fullDocument");
  console.log(JSON.stringify(fullDocument));

  //track all changes to the sales document in the history collection
  fullCopy.parent_id = fullDocument._id;
  delete fullCopy._id;
  history.insertOne(fullCopy);

};
