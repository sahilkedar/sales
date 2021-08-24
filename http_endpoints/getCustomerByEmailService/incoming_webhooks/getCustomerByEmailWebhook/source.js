exports = function(payload) {

    var queryArg = payload.query.arg1 || '';
    return context.functions.execute("findCustomerByEmail", queryArg);

};
