
const errorHandler = (error,req,res,output) => {  
    if (error) {
       res.status(200).json({
            status: 'ERRRRR',
            statusCode: '',
            data: error,
            message: 'Some error occurred while retrieving the data.'
        });
        return;
    }else{
        res.status(200).json({
            status: 'success',
            statusCode: 200,
            message: 'Student Information Reterive successfully ',
            data: output
        });
    }   
};

module.exports = errorHandler;