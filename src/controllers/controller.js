/*
    NAME : EMIS - API
    Version : V1
    Author : Tom  
    modified : Suganthi 
    Date : 22/02/23 
*/
'use strict';
const _ = require('lodash');
const connection = require('../config/db.config')
const errorHandler = require('../utils/errorHandler');
//check validation 
const { checkValidation } = require('../validators/auth')
//APP checking
const getInfo = (request, response) => {
    response.status(200).json('Node home page , USE CORRECT END POINTS')
};

//API checking
const getStagingURL = (request, response) => {   
    let query = "Select * from emisdb.tnsed_student_detail_2022_11_19 limit 1";
    connection.query(query, function (err, results, fields) {
        errorHandler(err, request, response, results);
        connection.destroy();
    });  
}
/* getByAadhaar */
const getByAadhaarID = (request, response) => {
    const aadhaarID = request.params.id
    if (aadhaarID == '') {
        return response.status(200).json({
            status: 'ERRRR',
            statusCode: 400,
            message: 'Please Enter EMIS Number ',
            data: ''
        });
    }
    else {
        // checkValidation(request, response ,aadhaarID);      
        let sqlID = "SELECT user_id , name, name_tamil,aadhaar_uid_number,dob,phone_number,unique_id_no," +
            "gender,community_id ,mothertounge_id,differently_abled,mother_occupation,mother_qualify,father_occupation, " +
            " group_code_id,education_medium_id,district_id," +
            "school_id,class_section,class_studying_id,father_name_tamil,father_name,mother_name_tamil,mother_name,pin_code, " +
            "area_village,street_name,house_address,community_name ,religion_name ,bloodg.group, langs.language_name ," +
            "disability.da_name, GROUPCODE.group_name " +
            "FROM tnsed_student_detail_2022_11_19 " +
            "LEFT JOIN baseapp_community " +
            "ON tnsed_student_detail_2022_11_19.community_id = baseapp_community.id " +
            "LEFT JOIN baseapp_religion ON tnsed_student_detail_2022_11_19.religion_id = baseapp_religion.id " +
            "LEFT JOIN baseapp_language as langs ON tnsed_student_detail_2022_11_19.mothertounge_id = langs.id " +
            "LEFT JOIN baseapp_bloodgroup as bloodg ON tnsed_student_detail_2022_11_19.bloodgroup = bloodg.id " +
            " LEFT JOIN baseapp_differently_abled as disability ON tnsed_student_detail_2022_11_19.differently_abled = disability.id " +
            "LEFT JOIN baseapp_group_code as GROUPCODE ON tnsed_student_detail_2022_11_19.group_code_id = GROUPCODE.id " +
            "where aadhaar_uid_number= ?";
        connection.query(sqlID, [aadhaarID], (err, results, fields) => {
            if (err) {
                /*  response.status(200).json({
                     status: 'ERRRR',
                     statusCode: '',
                     data: err
                 }); */
                errorHandler(err, request, response, results);
            }
            else {
                if (results.length < 1) {
                    response.status(200).json({
                        status: 'ERRRR',
                        statusCode: 400,
                        message: 'NO Records found',
                        data: results
                    });
                }
                else {
                    response.status(200).json({
                        status: 'success',
                        statusCode: 200,
                        message: 'Student Information Reterive successfully',
                        data: results
                    });
                }
            }
            connection.destroy();
        });
       
    }
}
/* getByEmisID - filter by EMIS NO */
const getByEmisID = (request, response, next) => {
    const emisID = request.params.id;
    if (emisID == '') {
        return response.status(200).json({
            status: 'ERRRR',
            statusCode: 400,
            message: 'Please Enter EMIS Number ',
            data: ''
        });
    }
    else {
           let sql = "SELECT user_id , name, name_tamil,aadhaar_uid_number,dob,phone_number,unique_id_no," +
            "gender,community_id ,mothertounge_id,differently_abled,mother_occupation,mother_qualify,father_occupation, " +
            " group_code_id,education_medium_id,district_id," +
            "school_id,class_section,class_studying_id,father_name_tamil,father_name,mother_name_tamil,mother_name,pin_code, " +
            "area_village,street_name,house_address,community_name ,religion_name ,bloodg.group, langs.language_name ," +
            "disability.da_name, GROUPCODE.group_name " +
            "FROM tnsed_student_detail_2022_11_19 " +
            "LEFT JOIN baseapp_community " +
            "ON tnsed_student_detail_2022_11_19.community_id = baseapp_community.id " +
            "LEFT JOIN baseapp_religion ON tnsed_student_detail_2022_11_19.religion_id = baseapp_religion.id " +
            "LEFT JOIN baseapp_language as langs ON tnsed_student_detail_2022_11_19.mothertounge_id = langs.id " +
            "LEFT JOIN baseapp_bloodgroup as bloodg ON tnsed_student_detail_2022_11_19.bloodgroup = bloodg.id " +
            " LEFT JOIN baseapp_differently_abled as disability ON tnsed_student_detail_2022_11_19.differently_abled = disability.id " +
            "LEFT JOIN baseapp_group_code as GROUPCODE ON tnsed_student_detail_2022_11_19.group_code_id = GROUPCODE.id " +
            "where unique_id_no= ?";
        connection.query(sql, [emisID], (error, results, fields) => {
            if (error) {
                //console.log('ERRRR in getByEmisID ' + error)
                //response.status(100).json("ERROR")
                errorHandler(error, request, response, results);
            }
            else {
                if (results.length < 1) {
                    response.status(200).json({
                        status: 'ERRRR',
                        statusCode: 400,
                        message: 'NO Records found',
                        data: results
                    });
                }
                else {
                    response.status(200).json({
                        status: 'success',
                        statusCode: 200,
                        message: 'Student Information Reterive successfully',
                        data: results
                    });
                }
            }
            connection.destroy();
        })
    }
   
};

const getByPhoneNo = (request, response, next) => {
    let phoneNumber = request.params.id;
    if (phoneNumber == '') {
        return response.status(200).json({
            status: 'ERRRR',
            statusCode: 400,
            message: 'Please Enter Phone Number ',
            data: ''
        });
    }
    else {
            let sql = "SELECT user_id , name, name_tamil,aadhaar_uid_number,dob,phone_number,unique_id_no," +
            "gender,community_id, mothertounge_id,differently_abled,mother_occupation,mother_qualify,father_occupation, " +
            " group_code_id,education_medium_id,district_id," +
            "school_id,class_section,class_studying_id,father_name_tamil,father_name,mother_name_tamil,mother_name,pin_code, " +
            "area_village,street_name,house_address,community_name ,religion_name ,bloodg.group, langs.language_name ," +
            "disability.da_name, GROUPCODE.group_name " +
            "FROM tnsed_student_detail_2022_11_19 " +
            "LEFT JOIN baseapp_community as com_id " +
            "ON tnsed_student_detail_2022_11_19.community_id = com_id.id " +
            "LEFT JOIN baseapp_religion as re_id ON tnsed_student_detail_2022_11_19.religion_id = re_id.id " +
            "LEFT JOIN baseapp_language as langs ON tnsed_student_detail_2022_11_19.mothertounge_id = langs.id " +
            "LEFT JOIN baseapp_bloodgroup as bloodg ON tnsed_student_detail_2022_11_19.bloodgroup = bloodg.id " +
            " LEFT JOIN baseapp_differently_abled as disability ON tnsed_student_detail_2022_11_19.differently_abled = disability.id " +
            "LEFT JOIN baseapp_group_code as GROUPCODE ON tnsed_student_detail_2022_11_19.group_code_id = GROUPCODE.id " +
            "where phone_number= ?";
        connection.query(sql, [phoneNumber], (error, results, fields) => {
            if (error) {
                //console.log('ERRRR in getByPhone ' + error)
                // response.status(100).json("ERROR")
                errorHandler(error, request, response, results);
            }
            else {
                if (results.length < 1) {
                    response.status(200).json({
                        status: 'ERRRR',
                        statusCode: 400,
                        message: 'NO Records found',
                        data: results
                    });
                }
                else {
                    response.status(200).json({
                        status: 'success',
                        statusCode: 200,
                        message: 'Student Information Reterive successfully',
                        data: results
                    });
                }
            }
            connection.destroy();
        })
    }
  
};
module.exports = {
    getInfo,
    getStagingURL,
    getByAadhaarID,
    getByEmisID,
    getByPhoneNo,
    errorHandler
}