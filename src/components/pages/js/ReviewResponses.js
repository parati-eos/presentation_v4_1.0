/*global userID, submissionId */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../helper/loader';
function ReviewResponses() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState(localStorage.getItem('userEmail') || '');
    const storedSubmissionId = localStorage.getItem( 'submissionId');
    const [submissionId, setSubmissionId] = useState(123456789|| '');
    const [loading, setLoading] = useState(false);
    var SID = 0;
    const fetchDataFromGoogleSheet = async () => {
        const apiUrl = 'https://pitchdeck-server.onrender.com/submissionID';
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': '/',
                    'x-userId': userID 
                },
            });
            const data = await response.json();
            SID = data.submissionID;
            console.log("SID value >>>>>>>>>>>>>>>>>>>>>>>>>")
            console.log(SID);
            setSubmissionId(data.submissionID);
            localStorage.setItem('submissionId',data.submissionID);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    const presentationBuilderURL = 'https://script.google.com/macros/s/AKfycbxVOvtJxn85CrGBMaWJeSb7HqGkspQY0Ug1JWBvKEB7s_fgiJx14KQG5oWhyt20W6NF/exec';
    const handleButtonClick = () => {
       if(submissionId&&userID){
        const urlWithParams = `${presentationBuilderURL}?userID=${userID}&submissionID=${SID}`;
        console.log(urlWithParams)
        window.location.href = urlWithParams;
        setTimeout(() => {
            navigate('/pages/presentationcheck')
        }, 3000);
       }
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchDataFromGoogleSheet(); // Fetch data first
                handleButtonClick(); // Then handle button click
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [userID]);
    
    return (
        <div>
            <LoadingPage/>
        </div>
    );
}
export default ReviewResponses;