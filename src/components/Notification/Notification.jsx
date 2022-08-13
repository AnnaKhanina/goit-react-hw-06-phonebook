import React from 'react';
import PropTypes from 'prop-types';
import Warning from './Notification.styled';

const Notification = ({ message }) => <Warning>{message}</Warning>;

export default Notification;

Notification.prototype = {
  message: PropTypes.string.isRequired,
};