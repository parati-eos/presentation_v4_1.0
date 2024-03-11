/*global userID, submissionId */

import React, { useState, useEffect } from 'react';
import { csvParse } from 'd3-dsv';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../helper/loader';

function ReviewResponses() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState(localStorage.getItem('userEmail') || '');
    const storedSubmissionId = localStorage.getItem( 'submissionId');
    const [submissionId, setSubmissionId] = useState(storedSubmissionId || '');
    const [loading, setLoading] = useState(false);


    const fetchDataFromGoogleSheet = async () => {
        const apiUrl = 'https://pitchdeck-server.onrender.com/submissionID';
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': '/',
                    'x-userId': userID // No need for string interpolation here
                },
            });
            const data = await response.json();
            console.log(data.submissionID);
            setSubmissionId(data.submissionID);
            localStorage.setItem('submissionId',data.submissionID);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchDataFromGoogleSheet();
                await handleButtonClick();
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, [userID]);
    
    

    const presentationBuilderURL = 'https://script.google.com/macros/s/AKfycbwqdlisuLkHu0d1qaCZOryMlh09T1fK03r_-QzU9e39JR_WHEknjk01W3H_9WcjjORk/exec';
    const handleButtonClick = () => {
       if(submissionId && userID){
        const urlWithParams = `${presentationBuilderURL}?userID=${userID}&submissionID=${submissionId}`;
        console.log(urlWithParams)
        window.location.href = urlWithParams;

        setTimeout(() => {
            navigate('/pages/presentationcheck')
        }, 1000);
       }
    }

    
    

    return (
        <div>
            <LoadingPage/>
        </div>
    );
}

export default ReviewResponses;