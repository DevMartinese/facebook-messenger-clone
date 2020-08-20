import React, { forwardRef } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Messages.css';

const Messages = forwardRef(({ username, message }, ref) => {

    const isUser = username === message.username;

    return (
       <div ref={ref} className={`message ${isUser && 'message__user'}`}>
         <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
            <CardContent>
                <Typography color='white' variant='h5' component='h2'>
                {!isUser && `${message.username  || 'Unknow User'}: `} {message.message}
                </Typography>
            </CardContent>
         </Card>
       </div>
    )
})

export default Messages;