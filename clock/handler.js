import moment from "moment/moment";

exports.clock = async (event) =>{
    console.log('This is the clock function!!');

    const message = moment().format();

    const response = {
        statusCode: 200,
        body: JSON.stringify(message)
    };

    return response;
}
