import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

const BankChatbot = () => {

    const chatbotStyle = {
        
        background: '#e98862',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        border: '2px solid #e98862',
        borderRadius: '5px',
        width: '80%',
        height: '50%',
        position: 'relative',
        // top: '50px',
        // left: '50px',
        // Add box shadow to the chatbot container
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        // Change the background color of the user input field
        userBubbleBackground: '#fff',
        // Change the color of the user input text
        userBubbleTextColor: '#333',
        // Change the background color of the chatbot's reply bubbles
        botBubbleBackground: '#007bff',
        // Change the color of the chatbot's reply text
        botBubbleTextColor: '#fff',
        // Adjust the margin between the chatbot messages
        bubbleMargin: '10px',
        // Adjust the size of the chatbot avatar image
        avatarSize: 40,
        // Change the background color of the chatbot avatar
        avatarBackgroundColor: '#FFFFFF',
    
    };

    const steps = [
        {
            id: 'Great',
            message: 'Hello, Welcome to HBOI',
            trigger: 'Ask Name'
        },
        {
            id: 'Ask Name',
            message: 'Please Enter your Name',
            trigger: 'waiting1'
        },
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name'
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, Please select what you want to know',
            trigger: 'issues'
        },
        {
            id: 'issues',
            options: [
                {
                    value: 'OpenAcc',
                    label: "How to Open Account",
                    trigger: "OpenAcc"
                },
                {
                    value: 'AboutHboi ',
                    label: "Know more About HBOI",
                    trigger: "AboutHboi"
                }
            ]
        },
        {
            id: 'OpenAcc',
            message: "Research and choose a bank, gather required documents, complete the application, deposit initial funds, review and sign the agreement, receive account details, and activate/manage your account.",
            end: true
        },
        {
            id: 'AboutHboi',
            message: "Please Visit our Site and click on 'About us Section' on Navigation Bar",
            end: true
        }
    ];

    return (
        <>
            <Segment floated="center">
            <h2>HBOI - ChatBot</h2>
                <Chatbot steps={steps} style={chatbotStyle} />
            </Segment>
        </>
    );
};

export default BankChatbot;
